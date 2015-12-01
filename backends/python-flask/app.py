from bson.objectid import ObjectId
from flask import Flask, request, Response
from flask.ext.cors import CORS
from json import dumps
from time import time
from pymongo import MongoClient


app = Flask(__name__)
CORS(app)
todos = MongoClient().todos.todos


@app.route('/todos')
def todos_route():
    all_todos = list(todos.find())
    return jsonify(all_todos)


@app.route('/todo/<id>', methods=['GET'])
def todo_get(id):
    if ObjectId.is_valid(id):
        todo = todos.find_one({'_id': ObjectId(id)})
        if todo:
            return jsonify(todo)

    return not_found()


@app.route('/todo/<id>', methods=['DELETE'])
def todo_delete(id):
    if ObjectId.is_valid(id):
        result = todos.delete_one({'_id': ObjectId(id)})
        if result.deleted_count > 0:
            return jsonify({'result': 'Successfully removed ' + id})

    return not_found()


@app.route('/todo', methods=['POST'])
def todo_create():
    content = request.get_json(force=True)
    now = int(time())
    content['modificationDate'] = now
    content['creationDate'] = now
    if 'title' not in content or 'status' not in content:
        return 'Invalid todo supplied. title and status field are mandatory.', 400
    else:
        result = todos.insert_one(content)
        if result.acknowledged:
            content['_id'] = result.inserted_id
            return jsonify(content)
        else:
            return 'Error', 500


@app.route('/todo/<id>', methods=['POST'])
def todo_update(id):
    content = request.get_json(force=True)
    content['modificationDate'] = int(time())
    if ObjectId.is_valid(id):
        result = todos.update_one({'_id': ObjectId(id)}, {'$set': content})
        if result.modified_count > 0:
            return jsonify({'result': 'Updated ' + id})

    return not_found()


def jsonify(o):
    return Response(dumps(o, default=to_json), mimetype='application/json')


def to_json(o):
    if type(o) == ObjectId:
        return str(o)


def not_found():
    return 'Not found', 404


if __name__ == '__main__':
    app.run(port=8888)
