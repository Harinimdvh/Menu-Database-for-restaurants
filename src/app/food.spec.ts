import { Food } from './food';

describe('Food', () => {
  it('should create an instance', () => {
    const food = new Food("",0);
    expect(food).toBeTruthy();
  });
});
