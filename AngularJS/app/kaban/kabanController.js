angular.module('kaban').controller('KabanController', KabanController);

function KabanController($timeout, statuses, todos) {
    var vm = this;

    vm.selected = null;
    vm.correctlySaved = false;
    vm.todos = {};

    statuses.forEach(function (status) {
        vm.todos[status] = [];
    });

    todos.get().forEach(function (todo) {
        var status = todo.status;

        vm.todos[status].push(todo);
    });

    todos.onCreate(function (todo) {
        vm.todos[todo.status].push(todo);
    });

    vm.move = move;

    function move(todo, status) {
        var originalStatusList = vm.todos[todo.status];
        var originalIndex = originalStatusList.indexOf(todo);
        originalStatusList.splice(originalIndex, 1);
        todo.status = status;
        todos.save(todo).then(function () {
            vm.correctlySaved = true;
            $timeout(function () {
                vm.correctlySaved = false;
            }, 10000);
        });
        ;
    }
}
