import { renderTask } from "./ui";
import { addTask } from "./task";

document.addEventListener("DOMContentLoaded", () =>{
  //Hacemos visible la lista de tareas
    renderTask ();

    // Agregar el evento para la funcion para agregar tareas
    document.getElementById("task-form").addEventListener("submit", (e) => {
        e.preventDefault();
        const taskInput = document.getElementById("taskinput");
        if(taskInput.value!==""){
            //agregamos la tarea
             addTask(taskInput.value);

             //volvemos a cargar la lista de tareas
             renderTask();

             //limpiar el input
             document.getElementById("task-input").value = "";

        }
    
    });

});