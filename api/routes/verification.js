const express = require('express')
const router = express.Router()

router.get('/profile', (req,res) => {
  console.log(req)
  res.json(req)
})

module.exports = router
