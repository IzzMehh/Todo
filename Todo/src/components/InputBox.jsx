import React, { useContext, useState } from 'react'
import Task from './Task'
import { TodoData } from '../contexts/TodoData'

function InputBox() {
  const {addTask} = useContext(TodoData)
  const [useTodoTitle,setTodoTitle] = useState('')
  return (
    <div className='flex justify-center'>
        <div className='w-[100%] flex'>
            <input 
            onChange={(e)=>{
              setTodoTitle(e.target.value)
            }}
            type="text" value={useTodoTitle}  name="" id="" placeholder='What do you need to do?' className='bg-[#FDD2D2] input-outline h-[62px] w-[85%] transition-all  font-text-font text-xl rounded-l-[15px] px-4 text-black' />
            <div 
            onClick={
              ()=>{
                if(useTodoTitle !== ''){
                  addTask(useTodoTitle)
                  setTodoTitle('')
                }
              }
            }
            className='bg-[#1E212F] w-[15%] h-full rounded-r-[15px] text-xl font-text-font font-semibold cursor-pointer select-none'><span className='text-4xl relative top-3'><ion-icon name="add-outline"></ion-icon></span> Add </div>
        </div>
    </div>
  )
}

export default InputBox