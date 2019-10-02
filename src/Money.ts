import Expression from './Expression';
import Sum from './Sum';
import Bank from './Bank';

export default class Money implements Expression {

  constructor(protected _amount: number, protected _currency: string) {
  }

  times(multiplier: number): Money { 
    return new Money(this.amount() * multiplier, this.currency());
  };

  plus(addend: Money): Expression {
    return new Sum(this, addend);
  }

  public reduce(bank: Bank, to: string): Money {
    const rate: number = bank.rate(this.currency(), to);
    return new Money(this.amount() / rate, to);
  }

  amount(): number {
    return this._amount;
  }

  currency(): string {
    return this._currency;
  }

  public equals(object: Object): boolean {
    const money: Money = <Money>object;
    return this.amount() === money.amount()
      && this.currency() === money.currency();
  }

  public toString(): string {
    return `${this.amount()} ${this.currency()}`;
  }

  static dollar(amount: number): Money {
    return new Money(amount, 'USD');
  }

  static franc(amount: number): Money {
    return new Money(amount, 'CHF');
  }

}
