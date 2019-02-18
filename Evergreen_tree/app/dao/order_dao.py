from app.dao.__init__ import POOL
import pymysql
from app.dao.sql.sql_order import sql_order


def get_ticket(res):
    try:
        res1 = None
        client = POOL.connection()
        cursor = client.cursor(cursor=pymysql.cursors.DictCursor)
        # 4. 准备sql语句
        sql = sql_order.get('get_ticket').format(tid=res["tid"])

        # 5. 通过游标进行操作,execute()执行sql语句,这时结果为：1.如果插入成功返回受影响的行数 2. 如果插入失败返回None
        cursor.execute(sql)
        res1 = cursor.fetchall()

        client.commit()

    except Exception as ex:
        client.rollback()
    finally:
        client.close()
        return res1

def order_create(res):
    pass
# if __name__ == '__main__':
#     user={
#         "tid":"2"
#     }
#
#     get_ticket(user)
