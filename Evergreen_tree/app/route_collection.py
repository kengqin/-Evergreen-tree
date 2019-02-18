from flask import Blueprint, request
from app.service.mycollection_service import *
import json

my_collection = Blueprint('my_collections', __name__)


@my_collection.route('/my_collections', methods=['GET', 'POST'])
def my_collections():
    if request.method == 'GET':
        return 'loding'
    elif request.method == 'POST':
        if request.is_json and request.get_json():
            i = request.get_json()
            result = get_my_collection(i)
            print(result)
            return json.dumps(result)
        else:
            return json.dumps({"1102": "错误"})
