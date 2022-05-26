const express = require('express');
const fs = require('fs');
const router = express.Router();

const PATH_ROUTES = __dirname; 

// Obtener todas los nombres de las rutas sin extension 
const quitarExtension = (nombreArchivo) => {
    return nombreArchivo.split('.').shift(); // separando el nombre de la extension y quedando solo el nombre
}
fs.readdirSync(PATH_ROUTES).filter(file => {
    const nombre = quitarExtension(file); // separando el nombre de la extension  por medio de la funcion quitarExtension
    if (nombre !== 'index') { // si el nombre no es index
        let ruta =  require('./' + file); // se importa la ruta 
        router.use('/' + nombre, ruta);  // seteando la ruta con el nombre de la ruta     
    }
})

// console.log(router);

module.exports = router;