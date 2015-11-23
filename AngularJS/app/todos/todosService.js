angular.module('todos').factory('todos', TodosService);


function TodosService($q) {
    var todos = [{
        id: 0,
        title: 'Sample TODO',
        status: 'new',
        description: null,
        creationDate: null,
        modificationDate: null,
        endDate: null
    }];

    return {
        save: save,
        get: get
    };


    function save(todo) {
        var deferred = $q.defer();
        var now = Date.now();

        todo.modificationDate = now;

        if (todo.id === undefined) {
            todo.id = todos.length;
            todo.creationDate = now;
            todos.push(todo);
        }

        deferred.resolve(todo);

        return deferred.promise;
    }

    function get() {
        return todos;
    }
}
