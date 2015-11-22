angular.module('activity').controller('ActivityController', Controller);

function Controller(todos) {
    'use strict';

    var vm = this;
    vm.todos = [];

    vm.addTodo = addTodo;

    function addTodo(todo) {
        todos.save(todo).then(function (todo) {
          vm.todos.push(todo);
        });
    }
}
