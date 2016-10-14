import {Component, Inject} from '../../../lqp/decorators';

import {app} from '../../la1.main.module';

@Service(app, 'mainService')
@Inject('$http')
export class MainService {

  constructor() { }

}
