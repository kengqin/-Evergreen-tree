import app.dao.user_dao as userDao
import json
from werkzeug.security import generate_password_hash, check_password_hash
from flask import make_response
from app.utils.my_token import createToken


def addUser(user):
    if user.get('telephone') and user.get('password'):

        pf = generate_password_hash(user['password'], method='pbkdf2:sha1:1001', salt_length=8)
        user['password'] = pf
        rr = userDao.addUser(user)
        if rr:
            if rr == -1:
                return json.dumps({"status_code": "10002", "status_text": "用户已经存在"})
            else:
                token = createToken(user['telephone'])
                response = make_response()
                response.data = json.dumps({"status_code": "10001",
                                            "status_text": "注册成功", "token": token, "telephone": user['telephone']})
                return response
        else:
            return json.dumps({"status_code": "40004", "status_text": "系统错误"})
    else:
        return json.dumps({"status_code": "40005", "status_text": "数据格式不合法"})


def getUserById(user):
    res_user = userDao.getUserById(user['telephone'])
    if res_user:
        if res_user == -1:
            return json.dumps({"status_code": "10004", "status_text": "该用户不存在"})
        else:
            # 验证密码是否相同
            if (check_password_hash(res_user['password'], user['password'])):
                # 构建token

                token = createToken(user['telephone'])
                # return json.dumps({"status_code":"10003","status_text":"登录成功"}),200,{"token":token}

                response = make_response()
                response.data = json.dumps({"status_code": "10003",
                                            "status_text": "登录成功", "token": token, "telephone": user['telephone']})
                # 此处前端ajax无法获取header所以这种方式不可行
                # response.headers['token']=token
                response.status_code = 200
                return response
            else:
                return json.dumps({"status_code": "10005", "status_text": "密码错误"})
    else:
        return json.dumps({"status_code": "40004", "status_text": "系统错误"})


def updateUser(user):
    pass


def deleteUserById(id):
    pass


def login(user):
    pass


# if __name__ == '__main__':
#     user = {"telephone": "13812790420", "password": "123456"}
#     addUser(user)
