const express = require('express');
const router = express.Router();
const { getAsistencias, setAsistencia } = require('../controllers/asistenciaController'); //importamos el controlador de asistencia con "Desestructuración JS"
const uploadMiddleware = require('../utils/handleStorage');

router.post("/set",uploadMiddleware.single("archivo"), setAsistencia)
router.get("/get",getAsistencias)


module.exports = router;