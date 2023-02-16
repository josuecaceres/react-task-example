import { createContext, useState, useEffect } from "react";
import { tasks as data } from "./../data/task";

export const TasksContext = createContext();

export function TasksContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  const createTask = (taskTitle, taskDescription) => {
    setTasks([
      ...tasks,
      {
        id: tasks.length,
        title: taskTitle,
        description: taskDescription,
      },
    ]);
  };

  const deleteTask = (idTask) => {
    setTasks(tasks.filter((task) => task.id !== idTask));
  };

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <TasksContext.Provider
      value={{
        tasks,
        createTask,
        deleteTask,
      }}
    >
      {props.children}
    </TasksContext.Provider>
  );
}
