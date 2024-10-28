import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
      const url = 'http://localhost/task-manager/api/get-tasks.php'; // Fetch tasks from API
      const response = await fetch(url);
      const data = await response.json();
      setTasks(data.tasks);
  };

  useEffect(() => {
      fetchTasks(); // Fetch tasks on component mount
  }, []);

  const handleTaskAdded = () => {
      fetchTasks(); // Refresh the task list when a new task is added
  };

  const handleTaskDeleted = () => {
      fetchTasks(); // Refresh the task list when a task is deleted
  };

  return (
      <div>
          <h1>Task Manager</h1>
          <AddTaskForm onTaskAdded={handleTaskAdded} />
          <TaskList tasks={tasks} onTaskDeleted={handleTaskDeleted} /> {/* Pass the delete handler */}
      </div>
  );
};

export default App;
