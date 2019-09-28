export default class Money {

  constructor(protected amount: number, protected _currency: string) {
  }

  times(multiplier: number): Money { 
    return new Money(this.amount * multiplier, this.currency());
  };

  currency(): string {
    return this._currency;
  }

  public equals(object: Object): boolean {
    const money: Money = <Money>object;
    return this.amount === money.amount
      && this.currency() === money.currency();
  }

  public toString(): string {
    return `${this.amount} ${this.currency()}`;
  }

  static dollar(amount: number): Money {
    return new Money(amount, 'USD');
  }

  static franc(amount: number): Money {
    return new Money(amount, 'CHF');
  }

}
