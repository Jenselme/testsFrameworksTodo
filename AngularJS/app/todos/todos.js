angular.module('todos', [])
        .value('statuses', ['new', 'to do', 'started', 'in review', 'done']);

require('./selectStatusDirective');
require('./todoDirective');
require('./createTodoDirective');
require('./viewTodoDirective');
require('./editTodoDirective');
require('./todosService');
require('./todosFilter');
