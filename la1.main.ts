/// <amd-dependency path='la1/index'/>

import {element, bootstrap} from 'angular';

element(document).ready(() => {
  let $html = element(document.getElementById('la1'));
  bootstrap($html, ['la1']);
});