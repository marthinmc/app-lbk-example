import {Component, Inject} from '../lqp/decorators';

import {app} from './la1.main.module';

@Component(app, {
  selector: 'la1Main',
  templateUrl: '/la1/la1.main.index.html',
})

@Inject()
export class MainController {

  constructor() {}
}

