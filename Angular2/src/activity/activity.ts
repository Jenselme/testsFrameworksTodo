import { Component, CORE_DIRECTIVES } from 'angular2/angular2';
import { Todos, Todo } from '../todos/todos';


@Component({
    directives: [CORE_DIRECTIVES],
    selector: 'activity',
    template: `<h1>Activity</h1>

<!--<div create-todo></div>-->

<ul>
    <li *ng-for="#todo of todos"
        [ng-class]="{strikethrough: todo.status === 'done'}">{{ todo.title }}</li>
</ul>`,
//    providers: [Todos]
})
export class Activity {
    public todos: Todo[];

    constructor(public todoService: Todos) {
        this.todoService.get().then(todos => this.todos = todos);
    }
}
