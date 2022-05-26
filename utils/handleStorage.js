const multer = require('multer'); // es la libreria para subir archivos
const storage = multer.diskStorage({ // es la configuracion del almacenamiento de los archivos
    destination: (req, file, cb) => {
        const pathStorage= `${__dirname}/../storage/public/`;
        cb(null, pathStorage);  // se indica la ruta donde guardar el archivo
    },
    filename: (req, file, cb) => {
        const fileExt = file.originalname.split('.').pop(); 
        const fileNameGenerated = `file-${Date.now()}.${fileExt}`;
        cb(null, fileNameGenerated); // se indica el nombre del archivo
        
    }
}); 
const uploadMiddleware = multer({storage}); // se setea la configuracion del almacenamiento de los archivos a multer

module.exports = uploadMiddleware;