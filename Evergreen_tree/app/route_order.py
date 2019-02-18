from flask import Blueprint, request, make_response
# 导入user service模块
from app.service.order_service import get_ticket_info
from app.utils.my_token import checkLogin, checkToken

# 用参数name和import_name初始化
# user是模块的名称
orders = Blueprint('orders', __name__)
import json


# restful api
@orders.route('/goods', methods=['POST', 'GET', 'PUT', 'DELETE'])
def order():
    # id=request.values.get('telephone')
    if request.method == 'POST':
        # print(request)
        if request.is_json and request.get_json():
            u = request.get_json()
            # print(u)
            result = get_ticket_info(u)
            # print(result)
            return result
        else:
            return json.dumps({"status_code": "40005", "status_text": "数据格式不合法"})


@orders.route('/buy', methods=['POST', 'GET', 'PUT', 'DELETE'])
# @checkLogin(request)
def buy():
    # id=request.values.get('telephone')
    if request.method == 'POST':
        # print(request)
        if request.is_json and request.get_json():
            u = request.get_json()
            # print(u)
            result = get_ticket_info(u)
            # print(result)
            return result
        else:
            return json.dumps({"status_code": "40005", "status_text": "数据格式不合法"})


@orders.route('/cashier', methods=['POST', 'GET', 'PUT', 'DELETE'])
def cashier():
    # id=request.values.get('telephone')
    token1 = None
    if request.method == 'POST':
        if request.is_json and request.get_json():
            token1 = request.get_json()
            token = token1['token']
            # print(token)
            if token:
                #     解析token
                tel = checkToken(token)
                if tel:
                    # 去请求数据
                    return json.dumps({"status_code": "10003", "status_text": "登录成功"})
                else:
                    return json.dumps({"status_code": "10006", "status_text": "登录过期"})

            else:
                return json.dumps({"status_code": "10007", "status_text": "未登录"})
        else:
            return json.dumps({"status_code": "40005", "status_text": "数据格式不合法"})


'''
@resume.route('/list/')
def list():
    if request.method == 'GET':
        token = request.headers.get('token')
        print(token)
        if token:
        #     解析token
            tel=checkToken(token)
            if tel:
                # 去请求数据
                return json.dumps({"status_code":"10003","status_text":"登录成功"})
            else:
                return json.dumps({"status_code":"10006","status_text":"登录过期"})

        else:
            return json.dumps({"status_code":"10007","status_text":"未登录"})

'''

# @resume.route('/list/')
# @checkLogin(request)
# def list():
#
#     id=request.values.get('telephone')
#     print(id)
#     return json.dumps({"status_code": "10003", "status_text": "登录成功"})
