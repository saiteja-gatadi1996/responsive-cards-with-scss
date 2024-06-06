export const focusElement = (element) => {
  element.setAttribute('tabindex', '-1');
  element.focus();
};
