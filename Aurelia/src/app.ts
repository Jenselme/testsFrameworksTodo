import { Router, RouterConfiguration } from 'aurelia-router';


export class App {
    router;

    configureRouter(config, router) {
        config.title = 'Todo App';
        config.map([
            { route: ['', 'activity'], name: 'activity', moduleId: 'activity', nav: true, title: 'Activity' },
        ]);

        this.router = router;
    }
}
