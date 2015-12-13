import { bindable, inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { Todos } from './Todos';


@inject(EventAggregator, Todos)
export class ModifyTodoCustomElement {
    @bindable todo;
    todos;
    eventAggregator;

    constructor(eventAggregator: EventAggregator, todos: Todos) {
        this.eventAggregator = eventAggregator;
        this.todos = todos;
    }

    view() {
        this.eventAggregator.publish('viewtodo', this.todo._id);
    }

    edit() {
        this.eventAggregator.publish('edittodo', this.todo._id);
    }

    delete() {
        this.todos.delete(this.todo);
    }
}
