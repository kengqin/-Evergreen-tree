from flask import Blueprint, request
from app.service.personalDate_service import *
import json

personalDate = Blueprint('personalDate', __name__)


@personalDate.route('/personalDate', methods=['GET', 'POST'])
def personal_date():
    if request.method == 'GET':
        return 'loding'
    elif request.method == 'POST':
        if request.is_json and request.get_json():
            i = request.get_json()
            result = get_personal_Date(i)
            print(result)
            return json.dumps(result)
        else:
            return json.dumps({"1102": "错误"})
