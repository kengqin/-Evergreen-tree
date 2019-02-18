import app.dao.personalDate_dao as personaldao


def get_personal_Date(user_id):
    if user_id:
        result=personaldao.get_personal_date(user_id)
        return result
