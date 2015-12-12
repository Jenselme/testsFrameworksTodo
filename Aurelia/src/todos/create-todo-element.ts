import { bindable, bindingMode, inject } from 'aurelia-framework';
import { Todo, Todos, statuses } from './Todos';


@inject(Todos)
export class CreateTodoCustomElement {
    backend;
    todo: Todo;

    constructor(backend: Todos) {
        this.backend = backend;
        this.resetTodo();
    }

    saveTodo() {
        this.backend.save(this.todo).then(() => this.resetTodo());
    }

    resetTodo() {
        this.todo = new Todo();
        this.todo.status = statuses[0];
    }
}


