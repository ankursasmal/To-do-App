import React, { useReducer, useState } from 'react'
import {useDispatch} from 'react-redux'
import {addtodo} from '../ReduxFeature/todo/todoSlice'
function Addtodo() {
    let [task,settask]=useState('');
    let [value,setvalue]=useState();

    const dispatch=useDispatch()
    let todoaddHandler=(e)=>{
        e.preventDefault();
        dispatch((addtodo(task)));
        settask(' ')
    }
  return (
    <div style={{margin:'15px 0' }}>
      <div className='todoinput' >
<form onSubmit={todoaddHandler}>
    <input type='text'  className='rounded-pill p-2 ' placeholder='enter todos' style={{width:'40vw',color:'black'}} value={task} onChange={(e)=>{
         settask(e.target.value);
    }}/> 
   {task===' '? <button type='submit' disabled={true} className='rounded px-3 py-1 mx-4' style={{backgroundColor:'#9db8dc'}}  >Add</button>: <button type='submit' className='rounded px-3 py-1 mx-4' style={{backgroundColor:'#9db8dc'}}  >Add</button>}
    </form>
      </div>
    </div>
  )
}

export default Addtodo
