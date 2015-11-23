angular.module('todos').directive('selectStatus', SelectStatus);

function SelectStatus() {
    return {
        scope: {
            status: '=',
            allowSelectBlank: '='
        },
        template: require('./partials/selectStatus.html'),
        replace: true,
        link: function (scope) {
            scope.statuses = ['new', 'to do', 'started', 'in review', 'done'];

            if (scope.allowSelectBlank) {
                scope.statuses.unshift('');
            }
        }
    };
}
