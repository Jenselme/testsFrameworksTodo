require('../todos/todos');

angular.module('activity', [
    'todos'
]);

require('./ActivityController');
require('./activityFilter');
