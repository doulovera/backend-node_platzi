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