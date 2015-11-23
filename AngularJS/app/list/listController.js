angular.module('list').controller('ListController', ListController);

function ListController($scope, todos) {
    var vm = this;

    vm.todos = todos.get();
    vm.filters = {
        status: '',
        title: ''
    };
    vm.edit = editAction;
    vm.view = viewAction;
    vm.delete = deleteAction;
    vm.editing = undefined;
    vm.deleting = undefined;
    vm.view = undefined;

    function editAction(todoId) {
        if (vm.editing === undefined) {
            console.log(todoId);
            vm.editing = todoId;
        } else {
            vm.editing = undefined
        }
    }


    function viewAction() {
        console.log('view');
    }


    function deleteAction() {
        console.log('delete');
    }
}
