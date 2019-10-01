import Money from '../src/Money';
import Expression from '../src/Expression';
import Bank from '../src/Bank';
import Sum from '../src/Sum';

describe('tdd by jest', () => {

  it('test multiplication', () => {
    const five: Money = Money.dollar(5);
    expect(five.times(2)).toEqual(Money.dollar(10));
    expect(five.times(3)).toEqual(Money.dollar(15));
  });

  it('test equality', () => {
    expect(Money.dollar(5).equals(Money.dollar(5))).toBe(true);
    expect(Money.dollar(5).equals(Money.dollar(6))).toBe(false);
    expect(Money.franc(5).equals(Money.dollar(5))).toBe(false);
  });

  it('test currency', () => {
    expect(Money.dollar(1).currency()).toBe('USD');
    expect(Money.franc(1).currency()).toBe('CHF');
  });

  it ('test simple addition', () => {
    const five: Money = Money.dollar(5);
    const sum: Expression = five.plus(five);
    const bank: Bank = new Bank();
    const reduced: Money = bank.reduce(sum, 'USD');
    expect(reduced).toEqual(Money.dollar(10));
  });

  it('test plus returns sum', () => {
    const five: Money = Money.dollar(5);
    const result: Expression = five.plus(five);
    const sum: Sum = <Sum>result;
    expect(sum.augend).toEqual(five);
    expect(sum.addend).toEqual(five);
  });

  it('test reduce sum', () => {
    const sum: Expression = new Sum(Money.dollar(3), Money.dollar(4));
    const bank: Bank = new Bank();
    const result: Money = bank.reduce(sum, 'USD');
    expect(result).toEqual(Money.dollar(7));
  });

  it('test reduce money', () => {
    const bank: Bank = new Bank();
    const result: Money = bank.reduce(Money.dollar(1), 'USD');
    expect(result).toEqual(Money.dollar(1));
  });

});
