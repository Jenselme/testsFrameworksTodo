angular.module('todos').factory('todos', TodosService);


function TodosService($q) {
    var todos = [{
        id: 0,
        title: 'Sample TODO',
        status: 'new',
        description: null,
        creationDate: Date.now(),
        modificationDate: Date.now(),
        endDate: null
    }];
    var onCreateCallbacks = [];

    return {
        save: save,
        get: get,
        delete: deleteTodo,
        onCreate: onCreate
    };


    function save(todo) {
        var deferred = $q.defer();
        var now = Date.now();

        todo.modificationDate = now;

        if (todo.id === undefined) {
            todo.id = todos.length;
            todo.creationDate = now;
            todos.push(todo);

            onCreateCallbacks.forEach(function (cb) {
               cb(todo);
            });
        }

        deferred.resolve(todo);

        return deferred.promise;
    }

    function get() {
        return todos;
    }

    function deleteTodo(todo) {
        var deferred = $q.defer();
        var index = todos.indexOf(todo);
        todos.splice(index, 1);

        deferred.resolve();

        return deferred.promise;
    }

    function onCreate(func) {
        onCreateCallbacks.push(func);
    }
}
