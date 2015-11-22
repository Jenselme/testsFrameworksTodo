angular.module('list').controller('ListController', ListController);

function ListController(todos) {
    var vm = this;

    vm.todos = todos.get();
}
