const Validator = require('amenov.validator')

module.exports = (options) => (req, res, next) => {
  req.validation = async (rules, target = 'body') => {
    const validation = new Validator(req[target], rules, options)

    await validation.fails()

    return validation.failed ? validation.errors : null
  }

  next()
}
