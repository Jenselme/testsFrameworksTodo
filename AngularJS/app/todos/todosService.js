angular.module('todos').factory('todos', TodosService);


function TodosService($q) {
    var todos = [];

    return {
        save: save,
        get: get
    };


    function save(todo) {
        var deferred = $q.defer();

        todo.creationDate = Date.now();
        todo.modificationDate = Date.now();

        todos.push(todo);

        deferred.resolve(todo);

        return deferred.promise;
    }

    function get() {
        return todos;
    }
}
