const express = require('express');
const router = express.Router();
const { getAsistencias, setAsistencia } = require('../controllers/asistenciaController'); //importamos el controlador de asistencia con "Desestructuración JS"

router.post("/set",setAsistencia)
router.get("/get",getAsistencias)


module.exports = router;