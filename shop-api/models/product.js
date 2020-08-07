const mongoose = require('mongoose')
const categories = require('./category')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
      },
    price: {
        type: Number,
        default: 0.0,
        required: true
    },
    category: [
        {type: mongoose.Schema.Types.ObjectId, ref: categories}
    ],
    createdDate: {
    type: Date,
    required: true,
    default: Date.now
    }
})

module.exports = mongoose.model('Product', productSchema)
