import hashlib
import os
import threading
import time


IGNORE_DIRS = [".git", "node_modules"]
WATCHED_EXTS = [".ts", ".js", ".json"]


class Watcher:
    def __init__(self, responder, base_path='.', output_lock=threading.Lock()):
        self.responder = responder
        self.base_path = base_path
        self.output_lock = output_lock
        self._file_hashes = {}
        # Tracks whether this is the first pass of the directory tree. If not,
        # then any new file encountered will be treated as an update.
        self._first_pass = True

    @staticmethod
    def get_file_hash(path):
        """Return a hash digest of the file located at path"""
        with open(path, "rb") as f:
            contents = f.read()
            return hashlib.md5(contents).hexdigest()

    def _respond_to_file_change(self, path):
        _, extension = os.path.splitext(path)
        if extension not in WATCHED_EXTS:
            return

        hashed = self.get_file_hash(path)
        if not self._first_pass:
            old_hash = self._file_hashes.get(path)
            if old_hash != hashed:
                try:
                    self.responder.file_changed(path)
                except Exception as err:
                    with self.output_lock:
                        print("Unexpected error:", err)
        self._file_hashes[path] = hashed

    def _check_dir_for_changes(self, dir_path):
        if os.path.basename(dir_path) in IGNORE_DIRS:
            return

        for filename in os.listdir(dir_path):
            new_path = os.path.join(dir_path, filename)
            if os.path.isdir(new_path):
                # Recursively check subdirectories
                self._check_dir_for_changes(new_path)
            else:
                self._respond_to_file_change(new_path)

    def poll_for_changes(self, wait_time=1, loop_callback=lambda: None):
        """Optionally specify loop_callback, which is called each iteration"""
        while True:
            try:
                loop_callback()
            except Exception as err:
                with self.output_lock:
                    print("Unexpected callback error:", err)

            try:
                self._check_dir_for_changes(self.base_path)
            except Exception as err:
                with self.output_lock:
                    print("Unexpected error in file watcher:", err)
            else:
                self._first_pass = False

            time.sleep(wait_time)  # Poll for changes every `wait_time` seconds


