angular.module('todos').directive('selectStatus', SelectStatus);

function SelectStatus(statuses) {
    return {
        scope: {
            status: '=',
            allowSelectBlank: '='
        },
        template: require('./partials/selectStatus.html'),
        replace: true,
        link: function (scope) {
            scope.statuses = statuses;

            if (scope.allowSelectBlank) {
                scope.statuses.unshift('');
            }
        }
    };
}
