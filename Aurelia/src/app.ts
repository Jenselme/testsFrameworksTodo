import { Router, RouterConfiguration } from 'aurelia-router';


export class App {
    router;

    configureRouter(config, router) {
        config.title = 'Todo App';
        config.map([
            {
                route: ['', 'activity'],
                name: 'activity',
                moduleId: 'activity',
                nav: true,
                title: 'Activity'
            }, {
                route: 'list',
                name: 'list',
                moduleId: 'list',
                nav: true,
                title: 'List'
            }, {
                route: 'kaban',
                name: 'kaban',
                moduleId: 'kaban',
                nav: true,
                title: 'Kaban'
            }
        ]);

        this.router = router;
    }
}
