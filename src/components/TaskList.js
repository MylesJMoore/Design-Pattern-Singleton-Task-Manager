import React from 'react';

const TaskList = ({ tasks, onTaskDeleted }) => {
    const handleDelete = async (id) => {
        const url = `http://localhost/task-manager/api/delete-task.php?id=${id}`;
        
        // Send a request to delete the task
        const response = await fetch(url);
        const result = await response.json();

        if (result.success) {
            onTaskDeleted();  // Notify parent component to refresh the task list
        } else {
            console.error('Failed to delete task:', result.message);
        }
    };

    return (
        <div>
            <h2>Task List</h2>
            {tasks.length === 0 ? (
                <p>No tasks available.</p>
            ) : (
                <ul>
                    {tasks.map((task, index) => (
                        <li key={index}>
                            <strong>{task.title}</strong>: {task.description}
                            <button onClick={() => handleDelete(task.id)} style={{ marginLeft: '10px' }}>
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default TaskList;
