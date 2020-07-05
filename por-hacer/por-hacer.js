const fs = require('fs');

let listadoPorHacer = [

];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    // console.log(data);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error("No se pudo grabar")
    });

}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data');
    } catch (error) {
        listadoPorHacer = [];
    }


}

const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado: false,
    };

    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;

}

const getListado = (completado) => {
    if (completado === undefined) {
        cargarDB();
        return listadoPorHacer
    } else if (completado == true) {
        cargarDB();
        let nuevoListado = listadoPorHacer.filter(tarea => tarea.completado === true)
        if (nuevoListado.length === 0) {
            console.log("No hay datos");
            return nuevoListado
        } else {
            return nuevoListado
        }
    } else if (completado == false) {
        cargarDB();
        let nuevoListado = listadoPorHacer.filter(tarea => tarea.completado === false)
        if (nuevoListado.length === 0) {
            console.log("No hay datos");
            return nuevoListado
        } else {
            return nuevoListado
        }
    }

}

const actualizar = (descripcion, completado) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion

    });

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true
    } else {
        return false
    }

}

const borrar = (descripcion) => {
    cargarDB();

    let nuevoListado = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion)

    if (listadoPorHacer.length === nuevoListado.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true
    }


}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}