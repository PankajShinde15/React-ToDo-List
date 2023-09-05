import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import { Task } from './Components/Task';
function App() {
  const [taskList, updateTaskList] = useState([]);
  const [task, setTask] = useState("");

  const handleChange = (event) => {
    setTask(event.target.value);
  }

  const addTask = () => {
    const newTask = {
      id: taskList.length === 0 ? 1 : taskList[taskList.length - 1].id + 1,
      taskName: task,
      completed: false
    }
    updateTaskList([...taskList, newTask]);
  }

  const deleteTask = (taskId) => {
    const newTaskList = taskList.filter((task) => task.id !== taskId)
    updateTaskList(newTaskList)
    console.log("task has been deleted", taskId)
  }

  const completeTask = (id) => {
    updateTaskList(
      taskList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true }
        }
        return task;
      })
    )
  }

  return (
    <div className="App">
      <div className="header">
        <input onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="taskList">
        {taskList.map((task) => {
          return <Task taskName={task.taskName} id={task.id} deleteTask={deleteTask} completed={task.completed} completeTask={completeTask} />
        })}
      </div>
    </div>
  );
}

export default App;
