USER_ID_FILEPATH = '/session/attendance_id'


def read_attendance_id():
    with open(USER_ID_FILEPATH) as id_file:
        return id_file.read().strip()
