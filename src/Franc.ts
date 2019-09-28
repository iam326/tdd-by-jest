export default class Franc {

  constructor(private amount: number) {
  }

  times(multiplier: number): Franc {
    return new Franc(this.amount * multiplier);
  }

  public equals(object: Object): boolean {
    const franc: Franc = <Franc>object;
    return this.amount === franc.amount;
  }

}
