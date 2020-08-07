const express = require('express')
const router = express.Router()

const Product = require('../models/product')

// Get all products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find()
        res.json(products)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Get one products
router.get('/:id', async (req, res) => {
    try {
        product = await Product.findById(req.params.id)
        if (product == null) {
          return res.status(404).json({ message: 'Cant find product'})
        }
      } catch(err){
        return res.status(500).json({ message: err.message })
      }
      res.json(products)
})

// Create one products
router.post('/', async (req, res) => {
    console.log("========",req.body)
    const product = new Product(req.body)
    
      try {
        const newProduct = await product.save()
        res.status(201).json(newProduct)
      } catch (err) {
        res.status(400).json({ message: err.message })
      }
})

// // Update one products
router.patch('/:id', async(req, res) => {
    const product = await Product.findById(req.params.id)
    product.name = req.body.name
    product.price = req.body.price
    try {
        const updated = await product.save()
        res.status(201).json(updated)
    }
    catch (err) {
        res.status(400).json({ message: err.message })
      }
})


module.exports = router