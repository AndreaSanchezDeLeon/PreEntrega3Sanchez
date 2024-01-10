import htmlElements from "./elements/html.elements";
import tareasManager from "./managers/tareas.manager";

export const app = () => {
       console.log("Ejecutando aplicación");
       htmlElements.formTarea.onsubmit = (event) => {
              event.preventDefault();
              tareasManager.agregarTarea();
       }

       tareasManager.mostrarTareas();
}