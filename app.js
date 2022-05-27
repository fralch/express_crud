require("dotenv").config(); 
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // sirve para dar permisos de acceso a la api a cualquier dominio
app.use(express.json()); // es para que se pueda leer el body de la petición POST
app.use(express.static("./storage/public")) // es para que se pueda acceder a la carpeta publica


const port = process.env.PORT || 5000;

const rutas = require('./routes');
app.use("/", rutas);

app.listen(port, () => console.log(`servidor - puerto: ${port}!`));