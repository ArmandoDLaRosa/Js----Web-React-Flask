import {useState, useEffect} from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import About from './components/About';
import TaskDetails from './components/TaskDetails';

function App() {
  const [showAddTask, SetShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])
  const name = "Armando"
  const x = false
 
  useEffect(() => {
    const getTasks = async () => {
        const tasksFromServer = await fetchTasks()
        setTasks(tasksFromServer)
    }

    getTasks()
  }, [])

  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks') // changeable for any backend
    const data = await res.json()

    return data
  }

   // Fetch Task
   const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`) // changeable for any backend
    const data = await res.json()

    return data
  }

  // Add Task
  const addTask = async (task) => {
    /*
    const id = Math.floor(Math.random() * 10000)+1
    const newTask = {id, ...task}
    console.log(newTask)
    setTasks([...tasks, newTask])
    */
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })

    const data = await res.json()
    setTasks([...tasks, data])
  }

  // Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {method: 'DELETE'})
    console.log('delete', id)
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = async (id, reminder) => {
    const taskToToggle = await fetchTask(id)
    const updTask = {...taskToToggle, reminder: !taskToToggle.reminder}

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
    body: JSON.stringify(updTask)
    })

    const data = await res.json()

    console.log('reminder', id, reminder, data)
    setTasks(tasks.map((task) => 
      task.id === id ? {...task, reminder: data.reminder} : task))
  }

  // "&&" is an alternative way to do a ternary
  return (
    <Router>
      <div className="container">
        <Header User = {name} 
                onPush = {() => SetShowAddTask(!showAddTask)}
                showAdd = {showAddTask}/>
          <Routes>
            <Route path ='/' element = {
              <>
              {showAddTask && <AddTask onAdd  = {addTask}/>}
              <h2>Conditionals: {x ? 'True': 'False'}</h2>
              {tasks.length > 0 ? 
                <Tasks tasks = {tasks} 
                      onDelete = {deleteTask}
                      onToggle = {toggleReminder} /> 
                : 'No Tasks'}
              </>
            }/>
            <Route path = '/about' element = {<About/>}/>
            <Route path = '/task/:id' element = {<TaskDetails/>}/>
          </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
