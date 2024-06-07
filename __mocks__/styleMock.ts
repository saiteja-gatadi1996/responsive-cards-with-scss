module.exports = new Proxy(
  {},
  {
    get: function getter(key) {
      if (key === '__esModule') {
        return false;
      }
      return key;
    },
  }
);
