/** Importaciones */

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const rutasAlumnos = require('./routes/alumnosRoutes');
 
/**Configuraciones */
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

/** Declarar Rutas */
app.use('/api/alumnos',rutasAlumnos);

app.listen(9000, () => {
    console.log('corriendo el servidor');
});


