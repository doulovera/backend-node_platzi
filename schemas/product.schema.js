const Joi = require('joi');

// Declaramos primero los valores que vamos a recibir
const id = Joi.string().uuid();
const name = Joi.string().min(3).max(20);
const price = Joi.number().integer().min(10);
const image = Joi.string().uri();

const createProductSchema = Joi.object({
  id,
  name: name.required(),
  price: price.required(),
  image: image.required(),
})

const updateProductSchema = Joi.object({
  id,
  name,
  price,
  image,
})

const getProductSchema = Joi.object({
  id: id.required(),
})

module.exports = {
  createProductSchema,
  updateProductSchema,
  getProductSchema
}