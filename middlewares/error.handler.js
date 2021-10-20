function logErrors(err, req, res, next) {
  // De aquí se pueden unir a sistemas de tracking como Sentry
  console.log(err);
  next(err)
}

// Aunque no se esté usando "next", se debe poner el parámetro
// para que Express lo detecte como un Middleware.
function errorHandler(err, req, res, next) {
  res.status(500).json({
    message: err.message,
    stack: err.stack
  })
}

function boomErrorHandler(err, req, res, next) {
  if(err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload)
  }
  next(err);
}

module.exports = { logErrors, errorHandler, boomErrorHandler };