import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Task = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    
    axios.get('http://127.0.0.1:8000/api/task/searchTaskByUsers')
      .then(response => setTasks(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      {tasks.map(task => (
        <div key={task.id}>{task.title}</div>
      ))}
    </div>
  );
};

export default Task;
