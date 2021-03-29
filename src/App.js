import { useState } from 'react'
import Header from './components/Header/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Food Shopping",
      day: "Feb 14th at 2:30 am",
      reminder: false,
    },
    {
      id: 2,
      text: "Doctor Appointment",
      day: "Feb 6th at 12:30 pm",
      reminder: true,
    },
  ])

  const addTask = task => {
    const newTask = { id: tasks[tasks.length - 1].id + 1, ...task }
    setTasks([...tasks, newTask])
  }

  const deleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const toggleReminder = id => {
    setTasks(tasks.map(task => task.id === id ? { ...task, reminder: !task.reminder } : task))
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
    </div>
  );
}

export default App;
