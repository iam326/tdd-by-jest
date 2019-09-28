export default abstract class Money {
  protected amount: number;

  constructor() {
  }

  abstract times(multiplier: number): Money;

  public equals(object: Object): boolean {
    const money: Money = <Money>object;
    return this.amount === money.amount
      && this.constructor == money.constructor;
  }

  static dollar(amount: number): Money {
    return new Dollar(amount);
  }

  static franc(amount: number): Money {
    return new Franc(amount);
  }

}

class Dollar extends Money {

  constructor(amount: number) {
    super();
    this.amount = amount;
  }

  times(multiplier: number): Money {
    return new Dollar(this.amount * multiplier);
  }

}

class Franc extends Money {

  constructor(amount: number) {
    super();
    this.amount = amount;
  }

  times(multiplier: number): Money {
    return new Franc(this.amount * multiplier);
  }

}
