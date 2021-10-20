const express = require('express');
const routerApi = require('./routes');

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler')

const app = express();
const port = process.env.PORT || 3000;

// Este middleware nativo es necesario para enviar el body del POST
app.use(express.json())

app.get('/', (req, res) => {
  res.send('wuju asd')
})

routerApi(app);

app.use(logErrors); // Este primero porque se tiene que ejecutar primero.
app.use(boomErrorHandler)
app.use(errorHandler); // y este no utiliza el "next"

app.listen(port, () => console.log(`Open in http://localhost:${port}`))
