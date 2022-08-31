import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState } from 'react'

function App() {
  // Defining state in App.js in order to make it global
  const [tasks, setTasks] = useState([
      {
        id: 1,
        task: "Task 1",
        completionDate: Date("12-01-2022"),
        completed: false
      },
      {
        id: 2,
        task: "Task 2",
        completionDate: Date("21-01-2022"),
        completed: false
      }
    ])
  function DeleteTask(id)
  {
    setTasks(tasks.filter((task) => (task.id !== id)))
  }
  function ToggleReminder(id)
  {
    setTasks(tasks.map((task) => (task.id === id ? {id: task.id, task: task.task, completionDate: task.completionDate, completed: !task.completed} : task)))
  }
  function onAdd(task)
  {
    setTasks([...tasks, task])
  }
  return (
    // It is possible to not have any parent tag here as well although it is a JSX requirement to have one, instead a fragment can be used i.e. <></>
    <div className="App container">
      {/* External components can be imported into the main App.js file and then added to the main component in the following way */}
      <Header className="header"/> {/* Passing props with components is done in a similar way to settings the attributes of an HTML tag */}
      <AddTask onAdd={onAdd}/>
      {tasks.length === 0 ? ("You have no upcoming tasks") : <Tasks tasks = {tasks} onDelete = {DeleteTask} onToggle = {ToggleReminder}/>}
      {/* Vanilla JS expressions can also be added to the markup written in JSX using curly braces */}
    </div>
  );
}

// JS Object containing all style components
let HeadingStyle = {
  fontFamily: "sans-serif",
  font: "15 px"
}

export default App;
