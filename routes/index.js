const express = require('express');
const fs = require('fs');
const router = express.Router();

const PATH_ROUTES = __dirname; 

const quitarExtension = (nombreArchivo) => {
    return nombreArchivo.split('.').shift();
}
fs.readdirSync(PATH_ROUTES).filter(file => {
    const nombre = quitarExtension(file);
    if (nombre !== 'index') {
        router.use('/' + nombre, require('./' + file));        
    }
})


module.exports = router;