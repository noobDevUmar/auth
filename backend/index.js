const express = require("express");
const { dbConnect } = require("./db/dbConnection");
const app = express();
require("dotenv").config()


app.listen(process.env.PORT)
dbConnect()
