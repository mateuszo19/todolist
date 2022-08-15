import React, {useState} from 'react';
import './ToDoApp.css';
import {AddTask} from './AddTask/AddTask'
import {TaskList} from "./TaskList/TaskList";


export const ToDoApp = (props) => {
    const [tasks, setTasks] = useState(
         [
            {
                id: 0,
                text: "Zagrać wreszcie w Wiedźmina 3",
                date: '2020-02-15',
                important: true,
                active: true,
                finishDate: null
            },
            {
                id: 1,
                text: "Posprzątać mieszkanie",
                date: '2020-10-15',
                important: true,
                active: false,
                finishDate: '2020-10-15'
            },
            {
                id: 2,
                text: "Kupić mleko",
                date: '2020-06-01',
                important: true,
                active: true,
                finishDate: null
            },
            {
                id: 3,
                text: "Mycie podłóg",
                date: '2020-02-15',
                important: false,
                active: true,
                finishDate: null
            },
            {
                id: 4,
                text: "Posprzątać garażu",
                date: '2020-10-15',
                important: true,
                active: false,
                finishDate: '2020-10-15'
            },
            {
                id: 5,
                text: "Kręgle",
                date: '2020-06-01',
                important: false,
                active: true,
                finishDate: null
            },
        ]
    )

    let today = new Date();
    let currentDate = today.getFullYear()+'-0'+(today.getMonth()+1)+'-0'+today.getDate();


    const addTask = (task) => {
        const tasksCopy = [...tasks];
        tasksCopy.push(task);
        setTasks(tasksCopy);
    }

    const deleteTask = (id) => {
        const tasksCopy = [...tasks];
        const index = tasksCopy.findIndex(task => task.id === id);
        tasksCopy.splice(index, 1);
        setTasks(tasksCopy);
    }

    const changeTaskStatus = (id) => {
        const tasksCopy = [...tasks];
        const index = tasksCopy.findIndex(task => task.id === id);
        tasksCopy[index].active = false;
        tasksCopy[index].finishDate = currentDate;
        setTasks(tasksCopy);
    }

    return(
        <>
            <div className="container">
                <AddTask addTast={addTask} taskListLength={tasks.length}/>
                <TaskList tasks={tasks} delete={deleteTask} change={changeTaskStatus}/>
            </div>
        </>
    )
}
