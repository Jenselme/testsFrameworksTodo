angular.module('activity').controller('ActivityController', Controller);

function Controller() {
    'use strict';

    var vm = this;
    vm.todos = [];

    vm.addTodo = addTodo;

    function addTodo(todo) {
        vm.todos.push(todo);
    }
}
