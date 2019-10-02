import Money from './Money';
import Expression from './Expression';
import Bank from './Bank';

export default class Sum implements Expression {

  augend: Money;
  addend: Money;

  constructor(augend: Money, addend: Money) {
    this.augend = augend;
    this.addend = addend;
  }

  public reduce(bank: Bank, to: string): Money {
    const amount: number = this.augend.amount() + this.addend.amount();
    return new Money(amount, to);
  }

}
