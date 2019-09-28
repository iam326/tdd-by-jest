export default class Dollar {
  amount: number

  constructor(amount: number) {
    this.amount = amount;
  }

  times(multiplier: number): Dollar {
    return new Dollar(this.amount * multiplier);
  }

  public equals(object: Object): boolean {
    const dollar: Dollar = <Dollar>object;
    return this.amount === dollar.amount;
  }

}
