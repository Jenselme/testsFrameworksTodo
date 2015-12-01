angular.module('todos').factory('todos', TodosService);


function TodosService($http) {
    var todos = [];
    var onCreateCallbacks = [];
    var todosPromise = $http.get('http://localhost:8888/todos').then(function (resp) {
        todos = resp.data;

        return todos;
    });

    return {
        save: save,
        get: get,
        delete: deleteTodo,
        onCreate: onCreate
    };


    function save(todo) {
        if (todo._id === undefined) {
            return $http.post('http://localhost:8888/todo', todo).then(function (resp) {
                var todo = resp.data;
                todos.push(todo);

                onCreateCallbacks.forEach(function (cb) {
                    cb(todo);
                });

                return todo;
            });
        } else {
            return $http.post('http://localhost:8888/todo/' + todo._id, todo);
        }
    }

    function get() {
        return todosPromise;
    }

    function deleteTodo(todo) {
        return $http.delete('http://localhost:8888/todo/' + todo._id).then(function () {
            var index = todos.indexOf(todo);
            todos.splice(index, 1);
        });
    }

    function onCreate(cb) {
        onCreateCallbacks.push(cb);
    }
}
