# ¿Qué es una RESTful API?
Representational State Transfer (REST). Es una convección que se refiere a servicios web por protocolo HTTP.
### Métodos
- **GET**: Obtener o solicitar información.
- **PUT**: Modificar/actualizar la información.
- **PATCH**: Modificar/actualizar (partes parciales).
- **POST**: Crear datos.
- **DELETE**: Eliminar datos.

## Recibir parámetros de tipo query
```js
app.get('/users', (req, res) => {
  // Recibe los parámetros query
  const { limit, offset } = req.query;
  
  // Se hace el condicional
  if (limit && offset) {
    res.json({
      limit, 
      offset
    })
  } else {
    res.send('No hay parámetros')
  }
})
```

### ¡Importante!
Como regla, se deben poner los endpoints específicos por encima de los dinámicos, para así evitar problemas de colisión.

# Middlewares
Request -> **Middleware** -> Response

Están en la mitad porque ahí es donde nos permite procesar la lógica.
Pueden ser utilizados de forma global, por ejemplo, para capturar los errores, o puede ser única para cada endpoint.
Se pueden ejecutar Middleware tras Middleware.

```js
function (req, res, next) {
  if (something) {
    res.send('end')
  } else {
    // Este es el que nos permite ejecutar y llevar al
    // siguiente middleware en caso de que lo necesitemos.
    next()
  }
}
```

Un ejemplo de Middleware, es uno para capturar los errores en toda la aplicación:
```js
function (error, req, res, next) {
  if (error) {
    res.status(500).json({ error })
  } else {
    next()
  }
}
```

### Casos de uso:
- Funcionar como Pipes
- Validar datos
- Validar permisos
- Capturar errores
- Controlar accesos

Los Middlewares de tipo error se deben declarar DESPUÉS de definir el routing.

# Servicios
Su función principal es la de encapsular todos los casos de uso para la lógica de negocio.
```js
// products.service.js
class ProductsService {
  
  constructor() {
    this.products = [];
  }

  async create({ name, price, image }) {
    const newProduct = {
      id: randomId,
      name,
      price,
      image
    }

    this.products.push(newProduct);
    return newProduct;
  }

  async find() {
    return new Promise((resolve, reject) => {
      if (noHayError) {
        resolve(this.products)
      } else {
        reject('Ha ocurrido un error')
      }
    })
  }

  async findOne(id) {
    const findProduct = this.products.find(item => item.id === id);

    if (!findProduct) throw new Error('No se encuentra este item');

    return findProduct;
  }

}
```

# Recomendaciones para producción
- Cors
- Https
- Procesos de Build
- Remover logs
- Seguridad (Helmet)
- Testing