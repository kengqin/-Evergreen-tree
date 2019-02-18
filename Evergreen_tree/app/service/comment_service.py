import app.dao.comment_dao as commentdao


def get_my_comment(user_id):
    if user_id:
        result=commentdao.get_comment(user_id)
        return result
