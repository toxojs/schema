class Schema {
  constructor(schema = {}, options = {}) {
    this.schema = schema;
    this.options = options;
  }

  validate(obj) {
    const schemaKeys = Object.keys(this.schema);
    const errors = [];
    for (let i = 0; i < schemaKeys.length; i += 1) {
      const key = schemaKeys[i];
      const type = this.schema[key];
      const error = type.validate(obj[key]);
      if (error) {
        errors.push(error);
      }
    }
    if (!this.options.open) {
      const objKeys = Object.keys(obj);
      for (let i = 0; i < objKeys.length; i += 1) {
        const key = objKeys[i];
        if (!schemaKeys.includes(key)) {
          errors.push(`Unexpected key: ${key}`);
        }
      }
    }
    return errors;
  }
}

module.exports = {
  Schema,
};
