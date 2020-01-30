const argv = require("./config/yargs").argv;
const porHacer = require("./por-hacer/por-hacer");
const colors = require("colors");


/* console.log(porHacer);
 */

let comando = argv._[0];



switch (comando) {

    case "crear":
        let tareaCreada = porHacer.crearTarea(argv.descripcion);
        console.log(tareaCreada);
        break;
    case "consultar":
        let listado = porHacer.getListado();
        for (tarea of listado) {
            console.log("===========POR HACER=========".green);
            console.log(tarea.descripcion);
            console.log("Estado : " + tarea.complete);
            console.log("=============================".green);
            console.log("");
        }
        break;
    case "modificar":
        let mod = porHacer.completarTarea(argv.descripcion, argv.complete);
        break;
    case "eliminar":
        let del = porHacer.elimiarTarea(argv.descripcion);
        break;
    default:
        console.log("NO SE RECONOCE COMANDO");
}