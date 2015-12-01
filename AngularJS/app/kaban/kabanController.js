angular.module('kaban').controller('KabanController', KabanController);

function KabanController($timeout, statuses, todos) {
    var vm = this;

    vm.selected = null;
    vm.correctlySaved = false;
    vm.todos = {};

    statuses.forEach(function (status) {
        vm.todos[status] = [];
    });

    todos.get().then(function (todos) {
        todos.forEach(function (todo) {
            var status = todo.status;

            vm.todos[status].push(todo);
        });
    });

    todos.onCreate(function (todo) {
        vm.todos[todo.status].push(todo);
    });

    vm.save = save;

    function save(todo, status) {
        var originalStatusList = vm.todos[todo.status];
        for (var i = 0; i < originalStatusList.length; i++) {
            if (originalStatusList[i]._id === todo._id) {
                originalStatusList.splice(i, 1);
                break;
            }
        }

        todo.status = status;

        todos.save(todo).then(function () {
            vm.correctlySaved = true;
            $timeout(function () {
                vm.correctlySaved = false;
            }, 10000);
        });
    }
}
