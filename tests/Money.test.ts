import Dollar from '../src/Dollar';

describe('tdd by jest', () => {

  it('test multiplication', () => {
    const five: Dollar = new Dollar(5);
    expect(five.times(2)).toStrictEqual(new Dollar(10));
    expect(five.times(3)).toStrictEqual(new Dollar(15));
  });

  it('test equality', () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBe(true);
    expect(new Dollar(5).equals(new Dollar(6))).toBe(false);
  });

});
