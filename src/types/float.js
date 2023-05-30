const { ValidateType } = require('./validate-type');

class FloatType extends ValidateType {
  constructor(options = {}) {
    super(options);
    this.min = options.min;
    this.max = options.max;
  }

  validate(value) {
    const result = super.validate(value);
    if (result) {
      return result;
    }
    if (typeof value !== 'number') {
      return 'Value must be a number';
    }
    if (this.min && value < this.min) {
      return `Value must be at least ${this.min}`;
    }
    if (this.max && value > this.max) {
      return `Value must be at most ${this.max}`;
    }
    return undefined;
  }
}

function Float(options) {
  return new FloatType(options);
}

module.exports = {
  FloatType,
  Float,
};
