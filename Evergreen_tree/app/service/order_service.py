import app.dao.order_dao as orderDao
import json
from flask import make_response

def get_ticket_info(res):
    res_order = orderDao.get_ticket(res)
    if res_order:
        response = make_response()
        response.data = json.dumps({"status_code": "10008",
                                    "status_text": "获取成功", "tname": res_order[0]['tname'], "adult_introduce":res_order[0]['adult_introduce'], "adult_price":res_order[0]['adult_price']})

        return response


def create_order(res):
    res_buy=orderDao.order_create(res)
    pass

