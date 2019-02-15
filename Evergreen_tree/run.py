from app.app import app
from app.route import *
from app.config import *
if __name__ == '__main__':
    app.run(host=HOST, port=PORT, debug=DEBUG)