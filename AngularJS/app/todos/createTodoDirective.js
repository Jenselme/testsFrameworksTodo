angular.module('todos').directive('createTodo', CreateTodo);


function CreateTodo(todos) {
    return {
        scope: {},
        template: require('./partials/createTodo.html'),
        link: function (scope) {
            scope.statuses = ['new', 'to do', 'started', 'in review', 'done'];
            scope.defaultTodo = {
                id: undefined,
                title: '',
                status: 'new',
                description: null,
                creationDate: null,
                modificationDate: null,
                endDate: null
            };
            scope.todo = {};
            angular.copy(scope.defaultTodo, scope.todo);

            scope.addTodo = function () {
                todos.save(scope.todo);

                scope.todo = {};
                angular.copy(scope.defaultTodo, scope.todo);
            };
        }
    };
}
