import { Router, RouterConfiguration } from 'aurelia-router';


export class App {
    public router: Router;

    configureRouter(config: RouterConfiguration, router: Router) {
        config.title = 'Todo App';
        config.map([
            { route: ['', 'activity'], name: 'activity', moduleId: 'activity', nav: true, title: 'Activity' },
        ]);

        this.router = router;
    }
}
