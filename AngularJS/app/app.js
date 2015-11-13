require('./activity/activity');


angular.module('app', [
    'ngRoute',
    'activity'
]);


angular.module('app').config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.when('/', {
            template: require('./activity/partials/activity.html')
        }).when('/list', {
            templateUrl: '/list/partials/list.html'
        }).when('/kaban', {
            templateUrl: '/kaban/partials/kaban.html'
        }).otherwise({
            redirectTo: '/'
        });
    }
]);
