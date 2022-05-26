const express = require('express');
const router = express.Router();
const {setFile} = require('../controllers/storageController');
const uploadMiddleware = require('../utils/handleStorage'); // importando el middleware de almacenamiento de archivos

router.post("/",uploadMiddleware.single("archivo"), setFile ) // se pone el middleware antes del controllador,  em single se indica el nombre del campo en el body de la petición POST

module.exports = router;