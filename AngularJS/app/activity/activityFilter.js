angular.module('activity').filter('lastTen', lastTen);


function lastTen() {
    return function (todos) {
        todos = todos || [];

        todos.sort(function (todo1, todo2) {
            return  todo2.modificationDate - todo1.modificationDate;
        });

        return todos.slice(0, 10);
    };
}
