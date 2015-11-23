angular.module('todos').directive('todo', CreateTodo);


function CreateTodo($timeout, todos) {
    return {
        scope: {
            todo: '=?',
            resetOnSave: '=?'
        },
        template: require('./partials/todo.html'),
        link: function (scope) {
            scope.defaultTodo = {
                id: undefined,
                title: '',
                status: 'new',
                description: null,
                creationDate: null,
                modificationDate: null,
                endDate: null
            };

            if (!scope.todo) {
                scope.todo = {};
                angular.copy(scope.defaultTodo, scope.todo);
            }

            scope.saveTodo = function () {
                todos.save(scope.todo).then(function() {
                    scope.correctlySaved = true;
                    $timeout(function() {
                        scope.correctlySaved = false;
                    }, 10000);
                });

                if (scope.resetOnSave) {
                    scope.todo = {};
                    angular.copy(scope.defaultTodo, scope.todo);
                }
            };
        }
    };
}
