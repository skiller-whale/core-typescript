import json
import os
import threading
from urllib.parse import urljoin

import requests

from lib.attendance import read_attendance_id


SERVER_URL = os.getenv('SERVER_URL', "https://train.skillerwhale.com")


def create_skiller_whale_url(path):
    return urljoin(SERVER_URL, path)


class Pinger:
    @property
    def uri(self):
        return create_skiller_whale_url(self.path)

    @property
    def path(self):
        return f'attendances/{read_attendance_id()}/pings'

    def ping(self):
        try:
            requests.post(self.uri)
        except requests.exceptions.ConnectionError:
            pass  # Tolerate failed pings


class FileUploader:
    def __init__(self, output_lock=threading.Lock()):
        self.output_lock = output_lock

    def get_uri(self):
        return create_skiller_whale_url(self.get_path())

    def get_path(self):
        return f'attendances/{read_attendance_id()}/file_snapshots'

    @staticmethod
    def get_file_data(path):
        with open(path, "r") as f:
            data = {"relative_path": path, "contents": f.read()}
            return json.dumps(data)

    @staticmethod
    def get_headers(data):
        return {
            "Content-Type": "application/json",
            "Content-Length": str(len(data))
        }

    def post_file(self, path):
        data = self.get_file_data(path)
        headers = self.get_headers(data)
        return requests.post(self.get_uri(), data=data, headers=headers)

    def file_changed(self, path):
        with self.output_lock:
            print(f"Uploading: {path}", end='\t')
        if not read_attendance_id():
            with self.output_lock:
                print("No attendance id set; file update not sent.")
            return

        try:
            response = self.post_file(path)
        except requests.exceptions.ConnectionError:
            with self.output_lock:
                print(f"Failed\nCould not reach {SERVER_URL}")
        else:
            with self.output_lock:
                print(f"Status: {response.status_code}")
            if response.text:
                with self.output_lock:
                    print(response.text)


