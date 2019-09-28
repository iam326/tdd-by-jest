import Dollar from '../src/Dollar';

describe('tdd by jest', () => {

  it('test multiplication', () => {
    const five: Dollar = new Dollar(5);
    five.times(2);
    expect(five.amount).toBe(10);
  });

});
