const fs = require("fs");

let listaPorHacer = [];

const guardarDB = () => {
    let tareaJson = JSON.stringify(listaPorHacer);
    fs.writeFile("./DB/tareas.json", tareaJson, (err) => {
        if (err) throw new Error("No se guardo tarea ni creo", err)
        else console.log("se guardo la terea");
    });
}

const getListado = () => {
    cargarDB();
    return listaPorHacer;
}

const cargarDB = () => {

    try {
        listaPorHacer = require("../DB/tareas.json");
    } catch (err) {
        listaPorHacer = [];
    }

    return listaPorHacer;
}

const crearTarea = (descripcion) => {
    cargarDB();

    let tarea = {
        descripcion,
        complete: false
    }
    listaPorHacer.push(tarea);
    guardarDB();
    return tarea;
}

const completarTarea = (desc, completar = true) => {
    cargarDB();
    let index = listaPorHacer.findIndex(tarea => tarea.descripcion === desc);
    if (index >= 0) {
        listaPorHacer[index].complete = completar;
        guardarDB();
    } else {
        return false;
    }
}

const elimiarTarea = (desc) => {
    cargarDB();
    let result = listaPorHacer.filter(tarea => tarea.descripcion != desc);
    console.log("result = " + result);
    listaPorHacer = result;
    guardarDB();
}

module.exports = {
    guardarDB,
    getListado,
    cargarDB,
    crearTarea,
    completarTarea,
    elimiarTarea
}