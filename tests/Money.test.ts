import Money from '../src/Money';

describe('tdd by jest', () => {

  it('test multiplication', () => {
    const five: Money = Money.dollar(5);
    expect(five.times(2)).toStrictEqual(Money.dollar(10));
    expect(five.times(3)).toStrictEqual(Money.dollar(15));
  });

  it('test equality', () => {
    expect(Money.dollar(5).equals(Money.dollar(5))).toBe(true);
    expect(Money.dollar(5).equals(Money.dollar(6))).toBe(false);
    expect(Money.franc(5).equals(Money.franc(5))).toBe(true);
    expect(Money.franc(5).equals(Money.franc(6))).toBe(false);
    expect(Money.franc(5).equals(Money.dollar(5))).toBe(false);
  });

  it('test franc multiplication', () => {
    const five: Money = Money.franc(5);
    expect(five.times(2)).toStrictEqual(Money.franc(10));
    expect(five.times(3)).toStrictEqual(Money.franc(15));
  });

  it('test currency', () => {
    expect(Money.dollar(1).currency()).toBe('USD');
    expect(Money.franc(1).currency()).toBe('CHF');
  });

});
