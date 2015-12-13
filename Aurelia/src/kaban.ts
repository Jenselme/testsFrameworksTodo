import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { Todos, statuses } from './todos/Todos';

import sortable from 'sortable';

@inject(EventAggregator, Todos, statuses)
export class Kaban {
    eventAggregator;
    statuses;
    backend;
    todosByStatus = {};

    constructor(eventAggregator: EventAggregator, backend: Todos, statuses) {
        this.eventAggregator = eventAggregator;
        this.backend = backend;
        this.statuses = statuses;

        this.backend.get().then(todos => {
           for (let status of this.statuses) {
               this.todosByStatus[status] = [];
           }

           for (let todo of todos) {
               this.todosByStatus[todo.status].push(todo);
           }

           console.log(this.todosByStatus)
        });
    }
}

