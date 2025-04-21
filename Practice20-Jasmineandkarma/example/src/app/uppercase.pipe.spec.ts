import { UppercasePipe } from './uppercase.pipe';

describe('UppercasePipe', () => {
  let pipe: UppercasePipe;

  beforeEach(() => {
    pipe = new UppercasePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform "hello world" to "HELLO WORLD"', () => {
    const result = pipe.transform('hello world');
    expect(result).toBe('HELLO WORLD');
  });

  it('should return an empty string if input is empty', () => {
    const result = pipe.transform('');
    expect(result).toBe('');
  });

  it('should not modify already uppercase strings', () => {
    const result = pipe.transform('HELLO');
    expect(result).toBe('HELLO');
  });
});
