import React, {useEffect, useState} from 'react';
import {Task} from '../Task/Task'
import './TaskList.css';

export const TaskList = (props) => {

        const active = props.tasks.filter(task => task.active);
        const done = props.tasks.filter(task => !task.active);

        if(done.length >= 2){
            done.sort((prev, curr) => {
                if(prev.finishDate < curr.finishDate){
                    return 1
                }
                if(prev.finishDate > curr.finishDate){
                    return -1
                }
                return 0
            })
        }

        if(active.length >= 2){
            active.sort((prev, curr) => {
                prev = prev.text.toLowerCase();
                curr = curr.text.toLowerCase();

                if(prev.text < curr.text) return -1;
                if(prev.text > curr.text) return 1;
                return 0;
            })
        }

        const activeTaskList = active.map((task) =>
                 <Task key={task.id} important={task.important} active={task.active} id={task.id} text={task.text} date={task.date} delete={props.delete} change={props.change} />
        )

        const doneTaskList = done.map((task) =>
                 <Task key={task.id} finishDate={task.finishDate} active={task.active} id={task.id} text={task.text} date={task.date} delete={props.delete} change={props.change}/>
        )

    return (
        <div className="section-taskList">
            <h2>Lista zadań do zrobienia </h2>
            <div className="list">
                {activeTaskList}
            </div>

            <hr className="line"/>

            <h2>Lista zadań zrobionych {doneTaskList.length}</h2>
            <div className="list">
                {doneTaskList}
            </div>
        </div>
    )
}
