angular.module('todo').controller('MainController', Controller);

function Controller() {
    'use strict';

    var vm = this;
    vm.todos = [];
    vm.todo = {};

    vm.addTodo = addTodo;

    function addTodo() {
        vm.todos.push(vm.todo);
        vm.todo = {};
    }
}
