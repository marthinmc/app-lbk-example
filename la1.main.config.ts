import {app} from './la1.main.module';
import {Routes} from './la1.main.routes';

export function LppConfig($stateProvider: ng.ui.IStateProvider): void {
  let routes: any[] = new Routes().routes;

  for (let i = routes.length - 1; i >= 0; i--) {
    $stateProvider.state(routes[i].name, routes[i]);
  }
}

LppConfig.$inject = ['$stateProvider'];

app.config(LppConfig);
