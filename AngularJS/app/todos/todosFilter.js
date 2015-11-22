angular.module('todos').filter('lastTen', lastTen);


function lastTen() {
    return function (todos) {
        var orderedTodos = todos.slice(0) || [];

        orderedTodos.sort(function (todo1, todo2) {
            return  todo2.modificationDate - todo1.modificationDate;
        });

        return orderedTodos.slice(0, 10);
    };
}
