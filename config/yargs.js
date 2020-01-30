const options = {
    base: {
        require: true,
        alias: "b"
    },
    limite: {
        defailt: 10,
        alias: "l"
    }
}

const descripcion = {
    demand: true,
    alias: "d",
    desc: "Descripcion de lo que se va a  MODIFICAR"
}

const complemento = {
    demand: true,
    alias: "c",
    default: true,
    desc: "Marca como completada la tarea"
}



const argv = require("yargs")
    .command("crear", "Creacion descripcion", descripcion)
    .command("modificar", "Modificacion de algo", { descripcion, complemento })
    .command("eliminar", "Borrar elementos", {
        descripcion: {
            demand: true,
            alias: "d",
            desc: "Eliminar tarea"
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}