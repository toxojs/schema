class ValidateType {
  constructor(options = {}) {
    this.mandatory = options.mandatory !== undefined ? options.mandatory : true;
  }

  validate(value) {
    if (this.mandatory && value === undefined) {
      return 'Value is mandatory';
    }
    return undefined;
  }
}

module.exports = {
  ValidateType,
};
