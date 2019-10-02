import Money from './Money';
import Expression from './Expression';
import Bank from './Bank';

export default class Sum implements Expression {

  augend: Expression;
  addend: Expression;

  constructor(augend: Expression, addend: Expression) {
    this.augend = augend;
    this.addend = addend;
  }

  public plus(addend: Expression): Expression {
    return addend;
  }

  public reduce(bank: Bank, to: string): Money {
    const amount: number = this.augend.reduce(bank, to).amount() + 
                           this.addend.reduce(bank, to).amount();
    return new Money(amount, to);
  }

}
