from app.dao.__init__ import POOL
import pymysql
from app.dao.sql.sql_scenic import sql_user


def getdatabyid(id):
    try:
        client=POOL.connection()
        res_data = None
        cursor = client.cursor(cursor=pymysql.cursors.DictCursor)
        sql = sql_user.get('getdatabyid').format(tid=id['tid'])
        cursor.execute(sql)
        res_data = cursor.fetchone()
        client.commit()
    except Exception as ex:
        client.rollback()
    finally:
        client.close()
        return res_data

def getdatabyid2(id):
    try:
        client = POOL.connection()
        res_data2 = None
        cursor = client.cursor(cursor=pymysql.cursors.DictCursor)
        sql = sql_user.get('getdatabyid2').format(tid=id['tid'])
        cursor.execute(sql)
        res_data2 = cursor.fetchone()
        client.commit()
    except Exception as ex:
        client.rollback()
    finally:
        client.close()
        return res_data2

def getdatabyid3(id):
    try:
        client = POOL.connection()
        res_data3=None
        cursor = client.cursor(cursor=pymysql.cursors.DictCursor)
        sql = sql_user.get('getdatabyid3').format(tid=id['tid'])
        cursor.execute(sql)
        res_data3 = cursor.fetchone()
        client.commit()
    except Exception as ex:
        client.rollback()
    finally:
        client.close()
        return res_data3

def getdatabyid4(id):
    try:
        client = POOL.connection()
        res_data4=None
        cursor = client.cursor(cursor=pymysql.cursors.DictCursor)
        sql = sql_user.get('getdatabyid4').format(tid=id['tid'])
        cursor.execute(sql)
        res_data4 = cursor.fetchone()
        client.commit()
    except Exception as ex:
        client.rollbake()
    finally:
        client.close()
        return res_data4

def getdatabyid5(id):
    try:
        client = POOL.connection()
        res_data5=None
        cursor = client.cursor(cursor=pymysql.cursors.DictCursor)
        sql = sql_user.get('getdatabyid5').format(id=id['id'])
        cursor.execute(sql)
        res_data5= cursor.fetchone()
        client.commit()
    except Exception as ex:
        client.rollbake()
    finally:
        client.close()
        return res_data5

def getdatabyid6(id):
    try:
        client = POOL.connection()
        res_data6=None
        cursor = client.cursor(cursor=pymysql.cursors.DictCursor)
        sql = sql_user.get('getdatabyid6').format(id=id['id'])
        cursor.execute(sql)
        res_data6= cursor.fetchone()
        client.commit()
    except Exception as ex:
        client.rollbake()
    finally:
        client.close()
        return res_data6



def getdatabyid13(id):
    try:
        client = POOL.connection()
        res_data13=None
        cursor = client.cursor(cursor=pymysql.cursors.DictCursor)
        sql = sql_user.get('getdatabyid13').format(id=id['id'])
        cursor.execute(sql)
        res_data13= cursor.fetchone()
        client.commit()
    except Exception as ex:
        client.rollbake()
    finally:
        client.close()
        return res_data13

def getdatabyid14(id):
    try:
        client = POOL.connection()
        res_data14=None
        cursor = client.cursor(cursor=pymysql.cursors.DictCursor)
        sql = sql_user.get('getdatabyid14').format(tid=id['tid'])
        cursor.execute(sql)
        res_data14= cursor.fetchone()
        client.commit()
        print(res_data14)
    except Exception as ex:
        client.rollbake()
    finally:
        client.close()
        return res_data14

def getdatabyid15(id):
    try:
        client = POOL.connection()
        res_data15=None
        cursor = client.cursor(cursor=pymysql.cursors.DictCursor)
        sql = sql_user.get('getdatabyid14').format(tid=id['tid'])
        cursor.execute(sql)
        res_data15= cursor.fetchone()
        client.commit()
        print(res_data15)
    except Exception as ex:
        client.rollbake()
    finally:
        client.close()
        return res_data15

def getdatabyid16(id):
    try:
        client = POOL.connection()
        res_data16=None
        cursor = client.cursor(cursor=pymysql.cursors.DictCursor)
        sql = sql_user.get('getdatabyid16').format(tid=id['tid'])
        cursor.execute(sql)
        res_data16= cursor.fetchone()
        client.commit()
        print(res_data16)
    except Exception as ex:
        client.rollbake()
    finally:
        client.close()
        return res_data16

