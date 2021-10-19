const { response } = require('express');
const express = require('express');
const faker = require('faker');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('wuju asd')
})

app.get('/products', (req, res) => {
  const products = [];
  const { size } = req.query;
  
  const limit = size || 10;

  for (let index = 0; index < limit; index++) {
    products.push({
      id: index,
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl()
    })
  }

  res.json(products)
})

app.get('/products/:id', (req, res) => {
  const { id } = req.params;

  res.json({
    id,
    name: 'Dos',
    price: 2000
  })
})

app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;

  res.json({
    categoryId,
    productId,
    price: 2000
  })
})

// Recoger parámetros de tipo Query
app.get('/users', (req, res) => {
  const { limit, offset } = req.query;
  
  if (limit && offset) {
    res.json({
      limit, offset
    })
  } else {
    res.send('No hay parámetros')
  }
})

app.listen(port, () => console.log(`Open in http://localhost:${port}`))
