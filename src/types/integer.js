const { FloatType } = require('./float');

class IntegerType extends FloatType {
  validate(value) {
    const result = super.validate(value);
    if (result) {
      return result;
    }
    if (!Number.isInteger(value)) {
      return 'Value must be an integer';
    }
    return undefined;
  }
}

function Integer(options) {
  return new IntegerType(options);
}

module.exports = {
  IntegerType,
  Integer,
};
