const express = require('express');
const ProductsService = require('../services/products.service')

const router = express.Router();
const service = new ProductsService();

router.get('/', (req, res) => {
  const products = service.find();  

  res.json(products)
})

router.get('/filter', (req, res) => {
  res.send('Soy un filtro falso :)')
})

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const product = service.findOne(id);

  res.json(product)
})

router.post('/', (req, res) => {
  const body = req.body;

  res.status(201).json({
    message: 'Created',
    data: body
  })
})

router.patch('/:id', (req, res) => {
  const body = req.body;
  const { id } = req.params;

  res.json({
    message: 'Updated',
    data: body,
    id
  })
})

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  res.json({
    message: 'Deleted',
    id
  })
})


module.exports = router