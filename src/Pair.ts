export default class Pair {

  constructor(private from: string, private to: string) {
  }

  public equals(object: Object): boolean {
    const pair: Pair = <Pair>object;
    return (this.from === pair.from) && (this.to === pair.to); 
  }

  public hashCode() {
    return 0;
  }

}
