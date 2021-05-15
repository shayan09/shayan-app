const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

// Create express instnace
const app = express()

// Secure app by setting HTTP headers
app.use(helmet())
app.use(cors())

// Init body-parser options (inbuilt with express)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Require & Import API routes
const main = require('./routes/main')

// Use API Routes
app.use(main)

// Export the server middleware
module.exports = {
	path: '/api',
	handler: app
}
