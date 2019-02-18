import app.dao.myOrder_dao as Orderdao


def get_order_detail_1(userid):
    if userid:
        result=Orderdao.get_order_detail(userid)
        return result
