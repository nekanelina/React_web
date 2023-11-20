require('dotenv').config()
const express = require('express')
const cors = require('cors')
const customMiddleware = require("./middleware/customMiddleware");

// App
const app = express()
const port = process.env.PORT || 4000

// Middleware
app.use(cors())
app.use(express.json())

// Routes


app.listen(port, () =>
  console.log(`Server is running on http://localhost:${port}`)
);