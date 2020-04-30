import { InputPropertyModule } from './input-property.module';

describe('InputPropertyModule', () => {
  let inputPropertyModule: InputPropertyModule;

  beforeEach(() => {
    inputPropertyModule = new InputPropertyModule();
  });

  it('should create an instance', () => {
    expect(inputPropertyModule).toBeTruthy();
  });
});
