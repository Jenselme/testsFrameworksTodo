import { Injectable } from 'angular2/angular2';
import { Http } from 'angular2/http';


@Injectable()
export class Todos {
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
        this.todos.push(todo);
    }
}


export class Todo {
    public title: string;
    public status: string;
    public _id: string;
    public modificationDate: number;
    public creationDate: number;
    public description: string;
}
