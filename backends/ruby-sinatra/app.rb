require 'json'
require 'mongo'
require 'sinatra'

set :port, 8888

conn = Mongo::Connection.new
todos = conn.db('todos')['todos']


get '/todos' do
    content_type :json
    todos.find.to_a.to_json
end


get '/todo/:id' do
    content_type :json
    todo = todos.find("_id" => BSON::ObjectId(params[:id])).to_a[0]
    if todo.nil?
        status 404
    else
        return todo.to_json
    end
end
