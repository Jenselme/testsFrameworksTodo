import { inject, bindable, bindingMode } from 'aurelia-framework';
import { Todo, Todos, statuses } from './Todos';


@inject(Todos)
@bindable({
    name: 'todo',
    attribute: 'todo',
    defaultBindingMode: bindingMode.twoWay
})
export class CreateTodoCustomElement {
    backend;
    resetAfterSave;

    constructor(backend: Todos) {
        this.backend = backend;
        this.resetTodo();
    }

    saveTodo() {
        if (this.todo._id) {
            this.resetAfterSave = false;
        } else {
            this.resetAfterSave = true;
        }
        this.backend.save(this.todo).then(() => this.resetTodo());
    }

    resetTodo() {
        if (this.resetAfterSave) {
            this.todo = new Todo();
            this.todo.status = statuses[0];
        }
    }
}


