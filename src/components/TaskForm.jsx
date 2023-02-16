import { useState, useContext } from "react";
import { TasksContext } from "../context/TasksContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TasksContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white text-center">
          Crea tu tarea
        </h1>
        <input
          className="bg-slate-300 p-3 w-full mb-2"
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Escribe tu tarea"
          value={title}
          autoFocus
        />
        <textarea
          className="bg-slate-300 p-3 w-full mb-2"
          cols="30"
          rows="5"
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          placeholder="Escribe la descripción"
          value={description}
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
