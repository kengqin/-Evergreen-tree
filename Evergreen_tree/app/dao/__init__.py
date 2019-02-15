import pymysql
from DBUtils.PooledDB import PooledDB, SharedDBConnection
POOL=PooledDB(
    creator=pymysql,
    maxconnections=6,
    mincached=2,
    maxcached=5,
    maxshared=3,
    blocking=True,
    maxusage=None,
    setsession=[],
    ping=0,
    host='192.168.1.106',
    port=3306,
    user='root',
    password='123456',
    db='pig',
    charset='utf8'
)

