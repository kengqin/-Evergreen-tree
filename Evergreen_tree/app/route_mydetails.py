from flask import Blueprint, request
from app.service.mydetails_service import *
import json

mydetails = Blueprint('mydetails', __name__)


@mydetails.route('/mydetails',methods=['pos','get'])
def my_details():
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
