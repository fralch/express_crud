require("dotenv").config(); 
const express = require('express');
const cors = require('cors');
const {dbConnectMysql} = require('./config/mysql'); // import sequelize 
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

app.use(cors()); // sirve para dar permisos de acceso a la api a cualquier dominio
app.use(express.json()); // es para que se pueda leer el body de la petición POST
app.use(express.static("./storage/public")) // es para que se pueda acceder a la carpeta publica

app.use(bodyParser.urlencoded({ extended: false })); 
app.use(express.json({ limit: '500MB' }));

const port = process.env.PORT || 5000;

const rutas = require('./routes');
app.use("/", rutas);

app.post("/subiendo_imagen", (req, res)=>{
    console.log('conexion realizada ');
    res.send(req); 
});

app.get("/probando", (req, res)=>{
    console.log('conexion realizada ');
    res.send('probando'); 
});

app.listen(port, () => console.log(`http://localhost:${port}`));

// dbConnectMysql(); // conecta a la base de datos


// const express = require('express')
// const app = express()
// const port =3000
// const bodyParser = require('body-parser');
// const fs = require('fs');
// const base64 = require('node-base64-image');


// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }));
 
// // parse application/json
// // app.use(bodyParser.json());
// // app.use(bodyParser.json({limit: '50mb'}));
// app.use(express.json({ limit: '50MB' }));

// const uploadImage = async (req, res, next) => {
//     console.log('conexion realizada ');
//     try {

//         console.log(req); 
//         // to declare some path to store your converted image
//         const path = './images/'+Date.now()+'.jpg'

//         const imgdata = req.body.img64;
//         // to convert base64 format into random filename
//         // const base64Data = imgdata.replace(/^data:([A-Za-z-+/]+);base64,/, '');
//         const base64Data =await base64.decode(imgdata, { fname: 'example', ext: 'jpg' });
        
//         fs.writeFileSync(path, base64Data);

//         return res.send(path);

//     } catch (e) {
//         next(e);
//     }
// }

// app.post('/subiendo_imagen', uploadImage); 
// app.listen(port, () => console.log(`http://localhost:${port}`));