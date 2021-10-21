const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler')

const app = express();
const port = process.env.PORT || 3000;

// Este middleware nativo es necesario para enviar el body del POST
app.use(express.json())
// CORS
const ALLOW_LIST = ['http://localhost:3000/', 'http://localhost:8080/'];
const CORS_OPTIONS = {
  origin: (origin, callback) => {
    if (ALLOW_LIST.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Acceso no Permitido'), false)
    }
  }
}
app.use(cors(CORS_OPTIONS))

app.get('/', (req, res) => {
  res.send('wuju asd')
})

routerApi(app);

app.use(logErrors); // Este primero porque se tiene que ejecutar primero.
app.use(boomErrorHandler)
app.use(errorHandler); // y este no utiliza el "next"

app.listen(port, () => console.log(`Open in http://localhost:${port}`))
