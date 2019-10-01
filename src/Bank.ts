import Money from './Money';
import Expression from './Expression';

export default class Bank {

  reduce(source: Expression, to: string): Money {
    return source.reduce(to);
  }

}
