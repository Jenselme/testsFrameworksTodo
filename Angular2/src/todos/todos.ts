import { Component, Injectable, CORE_DIRECTIVES, FormBuilder, FORM_DIRECTIVES, Validators } from 'angular2/angular2';
import { Headers, Http } from 'angular2/http';


@Injectable()
export class Todos {
    public statuses = ['new', 'to do', 'started', 'in review', 'done'];
    todos: Todo[];

    constructor(public http: Http) {
    }

    public get() {
        return this.http.get('http://localhost:8888/todos').toPromise().then(
            data => this.todos = data.json(),
            err => console.error(err)
        );
    }

    public save(todo) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:8888/todo', JSON.stringify(todo), {headers: headers}).toPromise().then(
            data => {
                this.todos.push(data.json());
                console.log(this.todos);
            },
            err => console.error(err)
        );
    }
}


export class Todo {
    constructor(
        public title: string,
        public status: string,
        public _id: string,
        public modificationDate: number,
        public creationDate: number,
        public description: string) {
    }
}


@Component({
    selector: 'create-todo',
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
    template: `<h4 class="ui header">Enter a TODO</h4>

<form class="ui fluid form"
      [ng-form-model]="todoForm"
      (submit)="saveTodo($event)">
    <div class="inline field">
        <div class="ui right pointing label">
            Title
        </div>
        <input name="title"
               type="text"
               ng-control="title"
               [(ng-model)]="todo.title"
               required />
        <select class="ui fluid dropdown"
            name="status"
            ng-control="status"
            [(ng-model)]="todo.status"
            required>
                    <option *ng-for="#status of todos.statuses" [value]="status">{{status}}</option>
        </select>
    </div>
    <div class="field">
        <label>Description</label>
        <textarea
            name="description"
            rows="2"
            ng-control="description"
            [(ng-model)]="todo.description"></textarea>
    </div>
    <button class="ui primary button"
            type="submit">Save</button>
</form>`
})
export class CreateTodo {
    public correctlySaved = false;
    public todoForm;
    public todo: Todo;
    public todos;

    constructor(fb: FormBuilder, todos: Todos) {
        this.todos = todos;
        this.resetTodo();
        this.todoForm = fb.group({
            title: ['', Validators.required],
            status: ['', Validators.required],
            description: ['']
        });
    }

    saveTodo(event) {
        event.preventDefault();
        if (this.todoForm.valid) {
            this.todos.save(this.todo).then(() => this.resetTodo());
        }
    }

    private resetTodo() {
        this.todo = new Todo();
        this.todo.status = this.todos.statuses[0];
    }
}
