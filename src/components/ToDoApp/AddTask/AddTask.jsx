import React, {useState} from 'react';
import './AddTask.css'

export const AddTask = (props) => {
    const [text, setText] = useState('');
    const [date, setDate] = useState('');
    const [checkbox, setCheckbox] = useState(false);

    let today = new Date();
    let currentDate = today.getFullYear()+'-0'+(today.getMonth()+1)+'-0'+today.getDate();

    const handleChange = (e) => {
        e.preventDefault();

        switch (e.target.name){
            case 'text':
                    setText(e.target.value)
                break;
            case 'startDate':
                    setDate(e.target.value)
                break;
            case 'checkbox':
                setCheckbox(!checkbox)
                console.log(checkbox)
                break;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(text.length < 5){
            throw new Error('Za kótka treść')
        }else if(date < currentDate){
            throw new Error('Nie można używać daty z przyszłości')
        }


        const nextIndex = props.taskListLength + 1;
        props.addTast(
            {
                id: {nextIndex},
                text: `${text}`,
                date: `${date}`,
                important: {checkbox},
                active: true,
                finishDate: null
            },
        )
        setDate('');
        setText('');
        setCheckbox(false);
    }

    return(
        <div className=" section form-section">
            <h2>Dodaj zadanie</h2>
            <form action="">
                <label htmlFor="">
                    Podaj treść zadania
                    <input type="text" name="text" onChange={handleChange} value={text}/>
                </label>
                <label htmlFor="">
                    Podaj date zakończenia
                    <input type="date" name="startDate" onChange={handleChange} value={date}/>
                </label>
                <label htmlFor="">
                    <input type="checkbox" name="checkbox" onChange={handleChange} checked={checkbox}/>
                    Wyróżnij zadanie
                </label>
                <button onClick={handleSubmit}>Dodaj</button>
            </form>
        </div>
    )
}
