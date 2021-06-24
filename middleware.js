const Validator = require('amenov.validator')

module.exports = (options) => (req, res, next) => {
  req.validator = async (rules) => {
    const validator = new Validator(req.body, rules, options)

    await validator.fails()

    return validator.failed ? validator.errors : null
  }

  next()
}
