export default abstract class Money {

  constructor(protected amount: number, protected _currency: string) {
  }

  abstract times(multiplier: number): Money;

  currency(): string {
    return this._currency;
  }

  public equals(object: Object): boolean {
    const money: Money = <Money>object;
    return this.amount === money.amount
      && this.constructor == money.constructor;
  }

  static dollar(amount: number): Money {
    return new Dollar(amount, 'USD');
  }

  static franc(amount: number): Money {
    return new Franc(amount, 'CHF');
  }

}

class Dollar extends Money {

  constructor(amount: number, currency: string) {
    super(amount, currency);
  }

  times(multiplier: number): Money {
    return Money.dollar(this.amount * multiplier);
  }

}

class Franc extends Money {

  constructor(amount: number, currency: string) {
    super(amount, currency);
  }

  times(multiplier: number): Money {
    return Money.franc(this.amount * multiplier);
  }

}
