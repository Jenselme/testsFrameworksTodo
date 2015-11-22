require('./activity/activity');
require('./list/list');


angular.module('app', [
    'ngRoute',
    'activity',
    'list'
]);


angular.module('app').config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.when('/', {
            template: require('./activity/partials/activity.html')
        }).when('/list', {
            template: require('./list/partials/list.html')
        }).when('/kaban', {
            templateUrl: '/kaban/partials/kaban.html'
        }).otherwise({
            redirectTo: '/'
        });
    }
]);
