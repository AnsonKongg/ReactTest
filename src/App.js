import { useState, useEffect } from 'react'
import Header from './components/Header/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(()=> {
    const getTask = async () => {
      const tasksFromServer = await fetchData()
      setTasks(tasksFromServer)
    }

    getTask()
  }, [])

  const fetchData = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    return data
  }

  const addTask = async (task) => {
    const newTask = { id: tasks[tasks.length - 1].id + 1, ...task }
    const res = await fetch(`http://localhost:5000/tasks`,{ 
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(newTask),
    })
    const data = await res.json()
    setTasks([...tasks, data])
  }

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`,{ method: 'DELETE'})
    setTasks(tasks.filter(task => task.id !== id))
  }

  const toggleReminder = async (id) => {
    const taskToggle = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await taskToggle.json()
    const updateTask = {...data, reminder: !data.reminder }
    // console.log(updateTask)

    const res = await fetch(`http://localhost:5000/tasks/${id}`,{ 
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updateTask),
    })
    const result = await res.json()
    setTasks(tasks.map(task => task.id === id ? { ...task, reminder: result.reminder } : task))
  }

  return (
    <div className="container">
      <Header
        title="Hello"
        onAddClicked={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0
        ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
        : 'No Task To Show'}
      <Footer />
    </div>
  );
}

export default App;
