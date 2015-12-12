import { inject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';


@inject(HttpClient)
export class Todos {
    todos;
    todosPromise;
    http: HttpClient;

    constructor(http: HttpClient) {
        http.configure(config => {
            config
                .useStandardConfiguration()
                .withBaseUrl('http://localhost:8888/');
        });

        this.http = http;

        this.todosPromise = this.http.fetch('todos')
            .then(resp => resp.json())
            .then(todos => this.todos = todos);
    }

    get() {
        return this.todosPromise;
    }
}

