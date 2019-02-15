from app.app import app
from app.route_detail import detail

app.register_blueprint(detail,url_prefix='/api/detail')

@app.route('/api/v1')
def index():
    return '123'

@app.errorhandler(404)
def miss(e):
    return '该页面不存在', 404
@app.errorhandler(500)
def error(e):
    return '服务器正在维护...',500