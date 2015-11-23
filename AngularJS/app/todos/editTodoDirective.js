angular.module('todos').directive('editTodo', EditTodoDirective);

function EditTodoDirective() {
    return {
        scope: {
            editAction: '&',
            viewAction: '&',
            deleteAction: '&'
        },
        template: require('./partials/view_edit_delete.html')
    };
}
