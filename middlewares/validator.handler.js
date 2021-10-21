const boom = require("@hapi/boom");

function validatorHandler(schema, property) {
  return (req, res, next) => {
    const data = req[property];
    const { error } = schema.validate(data, { abortEarly: false }); // el abortEarly es para que envíe todos los errores, y no uno por uno
    
    if (error) {
      next(boom.badRequest(error));
    }
    next();
  }
}

module.exports = validatorHandler;