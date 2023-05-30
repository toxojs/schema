const boolean = require('./boolean');
const float = require('./float');
const integer = require('./integer');
const string = require('./string');
const validateType = require('./validate-type');

module.exports = {
  ...boolean,
  ...float,
  ...integer,
  ...string,
  ...validateType,
};
