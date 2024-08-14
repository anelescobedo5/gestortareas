// lista de tareas//
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

//f uncion para agregar tareas//
export const addTask = (task) => {
    const newTask = {
        id: Date.now(),
        text: task,
        completed: false,
    };
    tasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(tasks));
};

// funcion para poder traer la lista de tareas//
export const getTasks = () => tasks;

// funcion para eliminar una tareas de la lista//
export const deleteTask = (id) => {
tasks = tasks.filter((task) => task.id !== parseInt(id));
localStorage.setItem ('tasks', JSON.stringify(tasks));

};
 //funcion para actualizar una tareas//
 export const updateTask = (id) => {
    tasks = tasks.map((task) => {
        if(task.id === parseInt (id)){
            task.completed = !task.completed;

        }
        return task;
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));

 };