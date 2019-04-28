import { helper } from '@ember/component/helper';
import Component from '@ember/component';



export function counter(par) {
  return par[0] + par[1];
}

export default helper(counter);
