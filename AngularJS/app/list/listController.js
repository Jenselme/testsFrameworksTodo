angular.module('list').controller('ListController', ListController);

function ListController(todos) {
    var vm = this;

    vm.todos = [];
    todos.get().then(function (todos) {
        vm.todos = todos;
    });
    vm.filters = {
        status: '',
        title: ''
    };
    vm.edit = editAction;
    vm.view = viewAction;
    vm.delete = deleteAction;
    vm.editing = undefined;
    vm.deleting = undefined;
    vm.viewing = undefined;

    function editAction(todoId) {
        vm.viewing = undefined;
        if (vm.editing === undefined) {
            vm.editing = todoId;
        } else {
            vm.editing = undefined;
        }
    }


    function viewAction(todoId) {
        vm.editing = undefined;
        if (vm.viewing === undefined) {
            vm.viewing = todoId;
        } else {
            vm.viewing = undefined;
        }
    }


    function deleteAction(todoIndex) {
        todos.delete(todoIndex);
    }
}
