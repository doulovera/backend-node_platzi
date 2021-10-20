const express = require('express');

const router = express.Router();

// Recoger parámetros de tipo Query
router.get('/', (req, res) => {
  const { limit, offset } = req.query;
  
  if (limit && offset) {
    res.json({
      limit, offset
    })
  } else {
    res.send('No hay parámetros')
  }
})

module.exports = router