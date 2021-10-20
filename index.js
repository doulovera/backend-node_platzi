const express = require('express');
const routerApi = require('./routes');

const app = express();
const port = process.env.PORT || 3000;

// Este middleware nativo es necesario para enviar el body del POST
app.use(express.json())

app.get('/', (req, res) => {
  res.send('wuju asd')
})

routerApi(app);


app.listen(port, () => console.log(`Open in http://localhost:${port}`))
