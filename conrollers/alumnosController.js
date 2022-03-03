const respuesta = {
 messages: '',
status: true,
data:[],
};

const DB = [
    {id: 1, nombre:'Juan', apellido: 'Perez', edad:30, sexo:'M',},
    {id: 2, nombre:'Ana', apellido: 'Martinez', edad:26, sexo:'F',},
    {id: 3, nombre:'Gabriela', apellido: 'Garcia', edad:35, sexo:'F',},
    {id: 4, nombre:'Pedro', apellido: 'Valdez', edad:30, sexo:'M',},
];


const obtenerTodosLosAalumnos =(req,res) => {
    respuesta.messages = 'Este es un get';
    respuesta.data = DB;
     return res.json(respuesta);

};

const creaUnNuevoAlumno = (req,res) => {
    respuesta.messages = 'este es un post';
    return res.json(respuesta);
};

const actualizaAlumno = (req,res) => {
    respuesta.messages = 'Este es un put';
   return res.json(respuesta);
};

const eliminarAlumnos = (req,res) => {
    respuesta.messages = 'Este es un delete';
    return req.json(respuesta)
};

    module.exports = {
        obtenerTodosLosAalumnos, 
        creaUnNuevoAlumno, 
        actualizaAlumno,
        eliminarAlumnos,
    };