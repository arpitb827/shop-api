const express = require('express')
const router = express.Router()

const Category = require('../models/category')

// Get all category
router.get('/', async (req, res) => {
    try {
        const productCategory = await Category.find()
        res.json(productCategory)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Get one category
router.get('/:id', async(req, res) => {
    try {
        productCategory = await Category.findById(req.params.id)
        if (productCategory == null) {
          return res.status(404).json({ message: 'Cant find Category'})
        }
      } catch(err){
        return res.status(500).json({ message: err.message })
      }
    
      res.json(productCategory)
    //   next()
})

// Create one category
router.post('/', async (req, res) => {

    const productCategory = new Category(req.body)
    
      try {
        const newCategory = await productCategory.save()
        // console.log("========",newCategory._id)
        res.status(201).json(newCategory)
      } catch (err) {
        res.status(400).json({ message: err.message })
      }
})

// Update one category
router.patch('/', async (req, res) => {
    const updateCategory = await Category.findOne({name: req.body.name})
    updateCategory.childCategories = req.body.childCategories
    try {
        const updated = await updateCategory.save()
        res.status(201).json(updated)
    }
    catch (err) {
        res.status(400).json({ message: err.message })
      }
})

module.exports = router