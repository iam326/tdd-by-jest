import greet from '../src/greet';

describe('greet', (): void => {
  it('should say hello to Ben.', (): void => {
    expect(greet('Ben')).toBe('Hello, Ben!');
  }); 
});

