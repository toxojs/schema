const { ValidateType } = require('./validate-type');

class StringType extends ValidateType {
  constructor(options = {}) {
    super(options);
    this.minLength = options.minLength;
    this.maxLength = options.maxLength;
  }

  validate(value) {
    const result = super.validate(value);
    if (result) {
      return result;
    }
    if (typeof value !== 'string') {
      return 'Value must be a string';
    }
    if (this.minLength && value.length < this.minLength) {
      return `Value must be at least ${this.minLength} characters long`;
    }
    if (this.maxLength && value.length > this.maxLength) {
      return `Value must be at most ${this.maxLength} characters long`;
    }
    return undefined;
  }
}

function String(options) {
  return new StringType(options);
}

module.exports = {
  StringType,
  String,
};
