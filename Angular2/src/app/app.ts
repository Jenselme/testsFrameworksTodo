import { bootstrap, Component, provide, CORE_DIRECTIVES } from 'angular2/angular2';
import {
    ROUTER_PROVIDERS,
    Location,
    Router,
    RouteConfig,
    ROUTER_DIRECTIVES,
    LocationStrategy,
    HashLocationStrategy } from 'angular2/router';
import { Activity } from '../activity/activity';
import { Todos } from '../todos/todos';
import { HTTP_PROVIDERS } from 'angular2/http';


@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES],
    templateUrl: 'app/app.html'
})
@RouteConfig([
    { path: '/', component: Activity, name: 'Activity' },
])
class AppComponent {
    router: Router;
    location: Location;

    constructor(router: Router, location: Location) {
        this.router = router;
        this.location = location;
    }
}

bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    CORE_DIRECTIVES,
    Todos,
    HTTP_PROVIDERS,
    provide(LocationStrategy,
    {useClass: HashLocationStrategy})
]);
