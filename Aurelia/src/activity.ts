import { inject } from 'aurelia-framework';
import { Todos } from './todos/Todos';


@inject(Todos)
export class Activity {
  todos = [];
  backend: Todos;

  constructor(backend: Todos) {
      this.backend = backend;
      this.backend.get()
        .then(todos => this.todos = todos);
  }
}
