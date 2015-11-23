angular.module('todos').directive('createTodo', CreateTodo);

function CreateTodo() {
    return {
        scope: {},
        template: require('./partials/createTodo.html')
    };
}
