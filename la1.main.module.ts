/// <amd-dependency path="financialTerminalApp/lqv.main.module"/>
/// <amd-dependency path="architectureService"/>

import {module} from 'angular';
import {ArchitectureService} from '../lqp/shared/';
import {CommonConfig} from './config/la1.common.cfg';
import {Config} from './config/config-env/la1.env.cfg';

export let app: ng.IModule = module('la1', [
  'ui.router',
  'ui.bootstrap',
  'ngAnimate',
  'lqv'])
  .run((architectureService: ArchitectureService) => {
    let envConfig: Config = new Config();
    let commonConfig: CommonConfig = new CommonConfig();
    architectureService.loadProperties(commonConfig, envConfig);
  });