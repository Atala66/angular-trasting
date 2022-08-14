import { TestDecoratorDirective } from './test-decorator.directive';

describe('TestDecoratorDirective', () => {
  it('should create an instance', () => {
    const directive = new TestDecoratorDirective();
    expect(directive).toBeTruthy();
  });
});
