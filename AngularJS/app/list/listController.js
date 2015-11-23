angular.module('list').controller('ListController', ListController);

function ListController($scope, todos) {
    var vm = this;

    vm.todos = todos.get();
    vm.filters = {
        status: '',
        title: ''
    };
}
