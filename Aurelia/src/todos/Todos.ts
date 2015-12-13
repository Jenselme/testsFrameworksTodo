import { inject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-http-client';


@inject(HttpClient)
export class Todos {
    todos;
    todosPromise;
    http: HttpClient;

    constructor(http: HttpClient) {
        http.configure(config => {
            config
                .withBaseUrl('http://localhost:8888/');
        });

        this.http = http;

        this.todosPromise = this.http.get('todos')
            .then(resp => resp.content)
            .then(todos => this.todos = todos);
    }

    get() {
        return this.todosPromise;
    }

    save(todo) {
        if (todo._id === undefined) {
            return this.http.post('todo', todo)
                .then(resp => resp.content)
                .then(todo => {
                    this.todos.push(todo);
                    return todo;
                });
        } else {
            return this.http.post('todo/' + todo._id, todo);
        }
    }

    delete(todo) {
        return this.http.delete('todo/' + todo._id).then(() => {
            let index = this.todos.indexOf(todo);
            this.todos.splice(index, 1);
        });
    }
}


export class Todo {
    title;
    status;
    description;
    creationDate;
    modificationDate;
    endDate;
}


export const statuses = ['new', 'to do', 'started', 'in review', 'done'];
