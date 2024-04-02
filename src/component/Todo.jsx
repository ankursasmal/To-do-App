import React, { useState } from 'react'
import {useSelector,useDispatch} from  'react-redux'
import {deletetodo} from '../ReduxFeature/todo/todoSlice'
import { AiOutlineDelete } from "react-icons/ai";

function Todo() {
  // for ascessing values
    let todos=useSelector(state=>state.todos)
    const dispatch=useDispatch()
    let d=new Date();
     
  return (
    <div className='flex-column '>
      {/* dynamicaly create todo lists */}
       <div className='my-2'>

        {todos.map((todo)=>{
            
            return( 
            <div className='items' key={todo.id}> <a style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding: '0 10px',color:'blue'}}>{todo.text}</a> 
            <div> 
             <a style={{marginRight:'10px'}}>{`${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}`}</a>
               <button disabled={false} onClick={()=>dispatch((deletetodo(todo.id)))} className='buttonproperty'><AiOutlineDelete style={{color:'red' }}/></button>
               
               </div>  </div> 
                ) })}
      </div>
    </div>
  )
}

export default Todo
