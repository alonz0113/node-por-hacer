const opts = [{
    descripcion: {
        alias: 'd',
        demand: true,
        desc: 'Descripcion de la tarea por hacer'
    }
}, {
    completado: {
        alias: 'c',
        default: true
    },
    descripcion: {
        alias: 'd',
        demand: true,
        desc: 'Marca como completado o pendiente la tarea'
    }
}];



const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', opts[0])
    .command('actualizar', 'Actualizar el estado completado de una tarea', opts[1])
    .command('borrar', 'Borrar tareas de la lista', opts[0])
    .help()
    .argv;

module.exports = {
    argv
}






/* comando crear 'Crear un elemento por hacer'
        --descripcion -d 

comando actualizar 'Actualizar el estado completado de una tarea'
        --descripcion -d 
        --completado -c true default



        --help */