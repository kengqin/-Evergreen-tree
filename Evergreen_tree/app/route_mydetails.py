from flask import Blueprint, request
from app.service.mydetails_service import *
import json

my_details = Blueprint('my_details', __name__)


@my_details.route('/my_details', methods=['POST', 'GET'])
def my_detail():
    if request.method == 'GET':
        return 'loding'
    elif request.method == 'POST':
        if request.is_json and request.get_json():
            i = request.get_json()
            result = get_order_mydetails(i)
            print(result)
            return json.dumps(result)
        else:
            return json.dumps({"1102": "错误"})
