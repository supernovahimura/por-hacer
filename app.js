// const argv = require('yargs').argv;
// const argv = require('./config/yargs').argv
const { argv } = require('./config/yargs')
const colors = require('colors');

// console.log(argv);
const porHacer = require('./por-hacer/por-hacer')

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        console.log("Mostrar todas las tareas por hacer");
        // porHacer.getListado();
        let listado = porHacer.getListado(argv.completado);

        for (let tarea of listado) {
            console.log('======== Por Hacer ========'.green);
            console.log(tarea.descripcion);
            console.log('Estado:', tarea.completado);
            console.log('============================'.green);
        }
        break;

    case 'actualizar':
        console.log("Tareas por actualizar");
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado)
        console.log(actualizado);
        break;

    case 'borrar':
        console.log("===== Borrar tareas=====".green);
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        console.log("========================".green);
        break;

    default:
        console.log("Comando no es reconocido");
}