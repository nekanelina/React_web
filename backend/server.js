require("dotenv").config();
const connectDB = require("./config/db");
const express = require("express");
const cors = require("cors");

const error = require("./middleware/errorMiddleware");
const found = require("./middleware/notFoundMiddleware");

const app = express();

// Body Parser Middleware
app.use(express.json());

// Init middleware
app.use(error);

app.use("/categories", require("./routes/categories"));

// Body Parser Middleware
app.use(express.json());

app.use(found);

const port = process.env.PORT;

connectDB();

app.listen(port, () =>
  console.log(`Server is running on http://localhost:${port}`)
);

//run the server node server.js
