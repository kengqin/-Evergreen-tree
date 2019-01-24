import pymysql

client=None
try:
    client = pymysql.connect(host='192.168.1.106', user='root',
                             password='123456', port=3306, db='pig')
except Exception as ex:
    print(ex)

