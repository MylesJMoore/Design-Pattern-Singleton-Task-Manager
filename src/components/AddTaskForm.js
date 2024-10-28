// src/AddTaskForm.js
import React, { useState } from 'react';

const AddTaskForm = ({ onTaskAdded }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Adjust the URL as necessary for your setup
        const url = `http://localhost/task-manager/api/add-task.php?token=debug&title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`;
        
        const response = await fetch(url);
        if (response.ok) {
            setTitle('');
            setDescription('');
            onTaskAdded(); // Notify the App to refresh the task list
        } else {
            console.error('Failed to add task');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                placeholder="Task Title" 
                required 
            />
            <input 
                type="text" 
                value={description} 
                onChange={(e) => setDescription(e.target.value)} 
                placeholder="Task Description" 
                required 
            />
            <button type="submit">Add Task</button>
        </form>
    );
};

export default AddTaskForm;
