import React from 'react';
import {useState} from 'react'
import {BiErrorAlt} from 'react-icons/bi'

function AddTask({onAdd}) {
    let [newTaskDesc, setDesc] = useState('')
    let [newTaskDate, setDate] = useState('')
    let [invalid, setInvalid] = useState(false)
    function AddNewTask(e)
    {
        e.preventDefault()
        if (newTaskDesc === '' || newTaskDate === '')
        {
            setInvalid(true)
            let error = document.getElementById('error')
            error.style.display = 'block'
            setTimeout(() => {error.style.display = 'none'}, 4000);
        }
        else
        {
            onAdd({id: Math.floor(Math.random() * 10000) + 1, task: newTaskDesc, completionDate: Date(newTaskDate), completed: false})
            setInvalid(false)
        }
        setDate('')
        setDesc('')
    }
  return (
      <form className='add-form' onSubmit={(e) => (AddNewTask(e))}>
            <div className='error' id='error'>{invalid ? (<p><BiErrorAlt/> The Task and Completion Date are required fields</p>) : ''}</div>
            <div className='form-control'>
                <label className='label'>Task</label>
                <input className='input' type="text" placeholder="Enter task details here..."  onChange={(e) => (setDesc(e.target.value))} value={newTaskDesc}/>
            </div>
            <div className='form-control'>
                <label className='label'>Completion Date</label>
                <input className='input' type="date" onChange={(e) => (setDate(e.target.value))} value={newTaskDate}/>
            </div>
            <button className='btn btn-block' type="submit">Add</button>
      </form>
  );
}

export default AddTask;
