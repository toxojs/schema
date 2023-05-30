const { ValidateType } = require('./validate-type');

class BooleanType extends ValidateType {
  validate(value) {
    const result = super.validate(value);
    if (result) {
      return result;
    }
    if (typeof value !== 'boolean') {
      return 'Value must be a boolean';
    }
    return undefined;
  }
}

function Boolean(options) {
  return new BooleanType(options);
}

module.exports = {
  BooleanType,
  Boolean,
};
