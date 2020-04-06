const descripcion = {
    alias: 'd',
    demand: true,
    desc: 'Descripción de la tarea por hacer'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
    .command('listar', 'Lista todas las tareas por hacer', {completado})
    .command('crear', "Crea una tarea por hacer", { descripcion })
    .command('actualizar', "actualiza el estado de completado de una tarea", { descripcion, completado })
    .command('eliminar', "elimina la tarea", { descripcion })
    .help()
    .argv;

module.exports = {
    argv
}