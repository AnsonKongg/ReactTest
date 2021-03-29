import { useState } from 'react'
import Header from './components/Header/Header';
import Tasks from './components/Tasks';

function App() {
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

  return (
    <div className="container">
      <Header title="Hello" />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
