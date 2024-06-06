import { focusElement } from './accessibility';

describe('focusElement', () => {
  test('sets tabindex to -1 and focuses the element', () => {
    // Create a mock element with necessary methods
    const element = document.createElement('div');
    element.focus = jest.fn();

    // Call the function
    focusElement(element);

    // Assert that the tabindex is set to -1
    expect(element.getAttribute('tabindex')).toBe('-1');

    // Assert that the focus method was called
    expect(element.focus).toHaveBeenCalled();
  });

  test('throws an error when no element is passed', () => {
    expect(() => focusElement(null)).toThrow();
    expect(() => focusElement(undefined)).toThrow();
  });

  test('does not throw an error when a valid element is passed', () => {
    const element = document.createElement('div');
    expect(() => focusElement(element)).not.toThrow();
  });
});
