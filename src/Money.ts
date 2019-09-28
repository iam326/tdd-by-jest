import Dollar from "./Dollar";
import Franc from "./Franc";

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
