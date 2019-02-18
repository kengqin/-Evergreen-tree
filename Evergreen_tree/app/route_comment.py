from flask import Blueprint, request
from app.service.comment_service import *
import json

comment = Blueprint('comment', __name__)


@comment.route('/comment', methods=['GET', 'POST'])
def my_comment():
    if request.method == 'GET':
        return 'loding'
    elif request.method == 'POST':
        if request.is_json and request.get_json():
            i = request.get_json()
            result = get_my_comment(i)
            print(result)
            return json.dumps(result)
        else:
            return json.dumps({"1102": "错误"})
