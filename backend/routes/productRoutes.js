const express = require('express')
const router = express.Router()
const { getAllProduct, getProductbyId } = require('../controller/productControllers')



// Display All prroducts
router.get('/', getAllProduct)

// Display a single product
router.get('/:id', getProductbyId)

module.exports = router;