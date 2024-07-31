// lista de tareas//
let task = JSON.parse(localStorage.getItem('task')) || [];

//funcion para agregar tareas//
export const addTask = (task) => {
    const newTask ={
        id: Date.now,
        text: task,
        completed: false,
    };
    task.push (newTask);
    localStorage.setItem('task',JSON.stringify(task));
};

// funcion para poder traer la lista de tareas//
export const getTasks = () => task;
