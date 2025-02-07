import React from 'react';
import HeaderComponent from './HeaderComponent';

function CompletedTask({ completedTasks }) {
    
    return (
        <div>
            <HeaderComponent/>
            <h1>Completed Tasks</h1>
            <ul>
                {completedTasks.map((task, index) => (
                <li key={index}>{task.text}</li>
                ))}
            </ul>
        </div>
    )
}
export default CompletedTask;