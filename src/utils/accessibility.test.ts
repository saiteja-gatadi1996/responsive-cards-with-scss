// src/utils/accessibility.test.ts

import { focusElement } from './accessibility';

describe('focusElement', () => {
  it('should focus the element if it is not null', () => {
    const element = document.createElement('div');
    jest.spyOn(element, 'focus');
    focusElement(element);
    expect(element.focus).toHaveBeenCalled();
  });

  it('should not throw an error if the element is null', () => {
    expect(() => focusElement(null)).not.toThrow();
  });
});
