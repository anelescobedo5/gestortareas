import { renderTask } from "./ui";
import { addTask, deleteTask, updateTask } from "./task";
import confetti from "canvas-confetti";
document.addEventListener("DOMContentLoaded", () =>{
  //Hacemos visible la lista de tareas
    renderTask ();

    // Agregar el evento para la funcion para agregar tareas
    document.getElementById("task-form").addEventListener("submit", (e) => {
        e.preventDefault();
        const taskInput = document.getElementById("task-input");
        if(taskInput.value !== "") {
            //agregamos la tarea
             addTask(taskInput.value);

             //volvemos a cargar la lista de tareas
             renderTask();

             //limpiar el input
             document.getElementById("task-input").value = "";
        }

        
    
    });
    //agregar el evento para los botones//
    document.getElementById("task-list").addEventListener("click", (e) =>{
         if(e.target.classList.contains("delete")){
          const taskId = e.target.parentElement.getAttribute("data-id");
          deleteTask (taskId);
          renderTask();
         }
        

         if (e.target.classList.contains("toggle")) {
          const taskId = e.target.parentElement.getAttribute("data-id");
          updateTask(taskId);
          renderTask();
            confetti(
              {
              particleCount: 100,
              spread: 70,
              origin:{ y: 0.6}
            }
            )
          }
          if (e.target.classList.contains("undo")) {
            const taskId = e.target.parentElement.getAttribute("data-id");
            updateTask(taskId);
            renderTask();
            }
         }

        )
});

