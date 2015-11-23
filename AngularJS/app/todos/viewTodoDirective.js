angular.module('todos').directive('viewTodo', ViewTodo);

function ViewTodo() {
    return {
        scope: {
            todo: '=viewTodo'
        },
        template: require('./partials/viewTodo.html')
    };
}
