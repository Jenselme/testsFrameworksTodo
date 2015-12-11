import { Component, CORE_DIRECTIVES } from 'angular2/angular2';
import { Todos, Todo, CreateTodo } from '../todos/todos';


@Component({
    directives: [CORE_DIRECTIVES, CreateTodo],
    selector: 'activity',
    template: `<h1>Activity</h1>

<create-todo></create-todo>

<ul>
    <li *ng-for="#todo of todos"
        [ng-class]="{strikethrough: todo.status === 'done'}">{{ todo.title }}</li>
</ul>`
})
export class Activity {
    public todos: Todo[];

    constructor(public todoService: Todos) {
        this.todoService.get().then(todos => this.todos = todos);
    }
}
