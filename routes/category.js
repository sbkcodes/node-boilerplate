const express = require('express')
const { getCategories } = require('../controllers/categoryController')
const router = express.Router()

// Add user to database
router.post('/', getCategories)

module.exports = {
  router,
}
