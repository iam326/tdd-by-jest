export default class Money {
  protected amount: number;

  constructor() {
  }

  public equals(object: Object): boolean {
    const money: Money = <Money>object;
    return this.amount === money.amount
      && this.constructor == money.constructor;
  }

}
