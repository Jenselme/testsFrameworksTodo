angular.module('activity').controller('ActivityController', Controller);

function Controller(todos) {
    'use strict';

    var vm = this;
    vm.todos = [];
    todos.get().then(function (resp) {
        vm.todos = resp;
    });
}
