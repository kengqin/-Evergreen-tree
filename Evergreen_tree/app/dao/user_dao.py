# 用户模块
from app.dao.__init__ import client
import pymysql
from app.dao.sql.sql_user import sql_user


# 注册用户
def addUser(user):
    '''
    :param user:
    :return: 返回注册成功后用户的id；如果id为None说明注册失败，id如果为0表示该用户已经存在，id为1表示注册成功
    '''

    if not getUserById(user['telephone']):
        try:
            user_id = None
            cursor = client.cursor(cursor=pymysql.cursors.DictCursor)
            # 4. 准备sql语句
            # sql = 'insert into user(telephone,password,regist_date) ' \
            #       'values("{telephone}","{password}",CURDATE())'. \
            #     format(telephone=user['telephone'], password=user['password'])

            sql = sql_user.get('addUser').format(telephone=user['telephone'], password=user['password'])
            # 5. 通过游标进行操作,execute()执行sql语句,这时结果为：1.如果插入成功返回受影响的行数 2. 如果插入失败返回None
            cursor.execute(sql)
            user_id = client.insert_id()
            client.commit()
        except Exception as ex:
            client.rollback()
        finally:
            print(user_id)
            return user_id
    else:
        return -1


def getUserById(id):
    try:
        res_user = -1
        cursor = client.cursor(cursor=pymysql.cursors.DictCursor)
        # 4. 准备sql语句
        sql = sql_user.get('getUserById').format(
            telephone=id)

        # 5. 通过游标进行操作,execute()执行sql语句,这时结果为：1.如果插入成功返回受影响的行数 2. 如果插入失败返回None
        cursor.execute(sql)
        res_user = cursor.fetchone()

        client.commit()
    except Exception as ex:
        client.rollback()
    finally:
        print(res_user)
        return res_user


if __name__ == '__main__':
    user = {"telephone": "18792031923", "password": "123456"}
    addUser(user)
