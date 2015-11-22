angular.module('todos').factory('todos', TodosService);


function TodosService($q) {
    return {
        save: save
    };


    function save(todo) {
        var deferred = $q.defer();

        todo.creationDate = Date.now();
        todo.modificationDate = Date.now();

        deferred.resolve(todo);

        return deferred.promise;
    }
}
