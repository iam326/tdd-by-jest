export default class Dollar {

  constructor(private amount: number) {
  }

  times(multiplier: number): Dollar {
    return new Dollar(this.amount * multiplier);
  }

  public equals(object: Object): boolean {
    const dollar: Dollar = <Dollar>object;
    return this.amount === dollar.amount;
  }

}
