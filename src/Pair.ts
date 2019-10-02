export default class Pair {

  constructor(private from: string, private to: string) {
  }

  public toString(): string {
    return `${this.from}-${this.to}`;
  }

}
