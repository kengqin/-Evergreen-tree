from app.app import app
from app.route_user import user
from app.route_resume import resume

# 构建蓝图
app.register_blueprint(user,url_prefix='/api/user')
app.register_blueprint(resume,url_prefix='/api/resume')
@app.route('/api/v1')
def index():
    return 'INDEX'
@app.errorhandler(404)
def miss(e):
    return '该页面不存在', 404
@app.errorhandler(500)
def error(e):
    return '服务器正在维护...',500
