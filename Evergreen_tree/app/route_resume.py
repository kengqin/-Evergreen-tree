from flask import Blueprint, request
# 导入user service模块
import json
from app.utils.my_token import checkLogin

# 用参数name和import_name初始化
# user是模块的名称
resume = Blueprint('resume', __name__)

import json
# restful api
@resume.route('/')
def index():
    return 'welcome user resume!!'

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

@resume.route('/list/')
@checkLogin(request)
def list():

    id=request.values.get('telephone')
    print(id)
    return json.dumps({"status_code": "10003", "status_text": "登录成功"})

