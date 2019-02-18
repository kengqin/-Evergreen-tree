import app.dao.order_mydetails as mydetails


def get_order_mydetails(order_id):
    if order_id:
        result=mydetails.get_order_mydetail(order_id)
        return result
