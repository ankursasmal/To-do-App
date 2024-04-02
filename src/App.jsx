 import React from 'react'
import Addtodo from './component/Addtodo'
import Todo from './component/Todo'
import './App.css' 
 function App() {
   return (
    <div className='middel'>
    <div className='mainlayout'> 
     <div className='layout'>
<h1 style={{color:'#125bb6',fontFamily:'Open Sans,sans-serif'}}>TODO LIST</h1>
    <Addtodo/>
    <h1>ADD TODO LIST</h1>
    <Todo/>
     </div>
     </div>
     </div>
   )
 }
 
 export default App
 