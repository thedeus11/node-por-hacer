const { argv } = require('./config/yargs');
const colors = require('colors');
const { crear, getListado, actualizar, eliminar } = require('./por-hacer/por-hacer');

const comando = argv._[0];

switch (comando) {
    case 'crear':
        console.log(crear(argv.descripcion));
        break;
    case 'listar':
        let listado = getListado();
        for (let tarea of listado) {
            console.log('====== Por Hacer ======'.green);
            console.log(`Tarea: ${tarea.descripcion}`);
            console.log(`Estado: ${tarea.completado}`);
            console.log('========================'.green);
        }
        break;
    case 'actualizar':
        if (actualizar(argv.descripcion, argv.completado)) {
            console.log('Se actualizo correctamente');
        }
        else {
            console.log('No se pudo actualizar');
        }
        break;
    case 'eliminar':
        if (eliminar(argv.descripcion)) {
            console.log('Se elimino la tarea correctamente');
        }
        else {
            console.log('Hubo un error al eliminar la tarea');
        }
        break;
    default:
        console.log('El comando no se reconoce');
        break;
}