import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { Todos } from './todos/Todos';


@inject(Todos, EventAggregator)
export class List {
    todos = [];
    backend: Todos;
    viewing = undefined;
    editing = undefined;

    constructor(backend: Todos, eventAggregator: EventAggregator) {
        this.backend = backend;
        this.backend.get()
            .then(todos => this.todos = todos);

        eventAggregator.subscribe('viewtodo', id => this.view(id));
        eventAggregator.subscribe('edittodo', id => this.edit(id));
    }

    view(id) {
        this.editing = undefined;
        if (this.viewing === undefined || this.viewing !== id) {
            this.viewing = id;
        } else {
            this.viewing = undefined;
        }
    }

    edit(id) {
        this.viewing = undefined;
        if (this.editing === undefined || this.editing !== id) {
            this.editing = id;
        } else {
            this.editing = undefined;
        }
    }
}


