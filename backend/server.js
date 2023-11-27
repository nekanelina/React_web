

require('dotenv').config()
const express = require('express')
const userRoutes = require('./routes/user')
const cors = require('cors')
const customMiddleware = require("./middleware/customMiddleware");
const connectDB = require("./config/db");

// App
const app = express()
const port = process.env.PORT || 4000
connectDB();

// Middleware
app.use(cors())
app.use(express.json())
app.use(customMiddleware.requestLogger);

// Routes
app.use('/api/user', userRoutes);

app.use("/categories", require("./routes/categories"));

app.use(customMiddleware.unknownEndpoint);

app.use(customMiddleware.errorHandler);

app.listen(port, () =>
  console.log(`Server is running on http://localhost:${port}`)
);

