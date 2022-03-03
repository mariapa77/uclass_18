const {Router} = require('express');
const router = Router();
const { 
    obtenerTodosLosAlumnos,
    creaUnNuevoAlumno,
    actualizaAlumno,
    eliminarAlumnos,
 } = require('../conrollers/alumnosController');


//Obtiene todos los alumnos
router.get('/',obtenerTodosLosAlumnos);
// Crea un nuevo alumno
router.post('/',creaUnNuevoAlumno );
//Actualiza un alumno
router.put('/',actualizaAlumno );
// Elimina un alumno
router.delete('/', eliminarAlumnos);






module.exports = router;