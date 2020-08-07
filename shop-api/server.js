require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.set('useCreateIndex', true);

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to database'))

const productRouter = require('./routes/products')
const categoryRouter = require('./routes/categories')

app.use(bodyParser.json())
app.use('/products', productRouter)
app.use('/category', categoryRouter)

app.listen(3000, () => console.log('server started'))

