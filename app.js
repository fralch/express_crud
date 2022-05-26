require("dotenv").config(); 
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
const port = process.env.PORT || 5000;

const rutas = require('./routes');
app.use("/", rutas);

app.listen(port, () => console.log(`servidor - puerto: ${port}!`));