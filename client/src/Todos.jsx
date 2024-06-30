import { useContext, useEffect, useState } from "react";
import Task from "./Task";
import NewTask from "./NewTask";
import Title from "./Title";
import AuthContext from "./auth";



export default function Todos({ userId }) {
  const [tasks, setTasks] = useState([]);
  const user = useContext(AuthContext);
console.log(user)
  function updateTasks(task) {
    setTasks((tasks) => [...tasks, task]);
  }
  async function markTaskDone(id) {
    console.log(id)
    await fetch(`http://localHost:3000/tasks/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    loadTasks()
  }
  async function Delete(id) {
    await fetch(`http://localHost:3000/tasks/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    await loadTasks()
  }

  async function loadTasks() {
    let response = await fetch(`http://localhost:3000/tasks?id=${user}`);
    const result = await response.json();

    setTasks(result);
  }

  useEffect(() => {
    loadTasks();

  }, []);
  return (
    <>
      <div className="todo-container">
        <Title title={"Todos App"} />
        <NewTask updateTasks={loadTasks} />
        <section className="task-list" id="todo-list">
          <h2 className="task-header">Active tasks</h2>
          {tasks
            .filter((task) => !task.done)
            .map((task) => (
              <Task task={task} key={task.id} Done={() => markTaskDone(task.id)} Delete={() => Delete(task.id)} />
            ))}
        </section>
        <section className="task-list completed" id="done-list">
          <h2 className="task-header">Completed Tasks</h2>
          {tasks
            .filter((task) => task.done)
            .map((task) => (
              <Task task={task} key={task.id} Delete={() => Delete(task.id)} />
            ))}
        </section>
      </div>
    </>
  );
}
