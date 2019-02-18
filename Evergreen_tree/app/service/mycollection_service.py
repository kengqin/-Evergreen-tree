import app.dao.collection_dao as collectiondao


def get_my_collection(user_id):
    if user_id:
        result=collectiondao.get_my_collection(user_id)
        return result
