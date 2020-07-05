const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}

const completado = {
    // default: true,
    type: 'boolean',
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
}
const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', {
        descripcion
    })
    .command('borrar', 'Borra una tarea', {
        descripcion
    })
    .command('actualizar', 'Actuliza un elemento por hacer', {
        descripcion,
        completado
    })
    .command('listar', 'Listar elementos', {
        completado
    })
    .help()
    .argv;

module.exports = {
    argv
}