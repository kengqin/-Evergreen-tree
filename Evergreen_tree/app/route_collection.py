from flask import Blueprint, request
from app.service.mycollection_service import *
import json
mycollection = Blueprint('mycollection', __name__)



@mycollection.route('/mycollection', methods=['GET', 'POST'])
def collection():
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