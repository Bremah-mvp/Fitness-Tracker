//Require environment variables
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const morgan = require('morgan');


const PORT = process.env.PORT || 3000;

const app = express();

app.use(morgan('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


const apiRoutes = require("./routes/apiRoutes");
app.use("/api", apiRoutes);


const htmlRoutes = require("./routes/htmlRoutes");
app.use("", htmlRoutes);

mongoose.connect(process.env.MONGODB_URI || "", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
