import Money from './Money';
import Expression from './Expression';
import Pair from './Pair';

export default class Bank {

  private rates = new Map<string, number>();

  reduce(source: Expression, to: string): Money {
    return source.reduce(this, to);
  }

  addRate(from: string, to: string, rate: number): void {
    const pair = new Pair(from, to);
    this.rates.set(pair.toString(), rate);
  }

  rate(from: string, to: string): number {
    if (from === to) {
      return 1;
    }
    const pair = new Pair(from, to);
    return <number>this.rates.get(pair.toString());
  }

}
