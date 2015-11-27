require('./activity/activity');
require('./list/list');
require('./kaban/kaban');


angular.module('app', [
    'ngRoute',
    'activity',
    'list',
    'kaban'
]);


angular.module('app').config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.when('/', {
            template: require('./activity/partials/activity.html')
        }).when('/list', {
            template: require('./list/partials/list.html')
        }).when('/kaban', {
            template: require('./kaban/partials/kaban.html')
        }).otherwise({
            redirectTo: '/'
        });
    }
]);
