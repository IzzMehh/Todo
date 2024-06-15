import React, { useContext, useEffect, useRef, useState } from 'react'
import { TodoData } from '../contexts/TodoData';

// todo-completed


function Task({text,completed,important,id,editing}) {
    const {task,setTask} = useContext(TodoData)
    
    const editRef = useRef(null)

    const deleteTodo = (id)=>{
    setTask(task.filter((val)=>val.key !== id))
  }

  const completeToggle = (id) =>{
    setTask(prevTask => prevTask.map((val)=>val.key===id ? {...val,completed:!val.completed} : val))
  }

  const importantToggle = (id) =>{
    setTask(prevTask => prevTask.map((val)=>val.key===id ? {...val,important:!val.important} : val ))
  }

  const editMode = (id) =>{
    setTask(prevTask => prevTask.map((val)=>val.key===id ? {...val,editing:true} : val ))
  }
  
  const editTask = (id,text) => {
    setTask(prevTask => prevTask.map((val)=> val.key===id ? {...val, todoText:text,editing:false} : val))
  }
  
  const hideOptions = () =>{
    document.querySelectorAll('.options').forEach(e=>e.classList.remove('options'))
  }

  return (
    <li className={`bg-[#ffffff6d] ${completed?'todo-completed':'incomplete'}  ${editing?'border-2 border-black':''} p-4 ${important?'border-l-8 border-red-600 ':'border-l-8 border-gray-700'}  rounded-xl flex items-center mb-2`}>
        <div className='w-[44px]'>
            <button 
            onClick={(e)=>{
                (e.target.classList.contains('complete')?e.target.classList.remove('complete'):e.target.classList.add('complete') )
                completeToggle(id)
            }}
            className={` ${completed?'complete':'not-complete'} w-[30px] h-[30px]  outline-none rounded-full border-[#827EA3] border-2 flex justify-center items-center`}>
            <svg className='style' width="12" height="12" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" ></path></svg>
            </button>
        </div>
        {editing===true ? (
            
            <div className='w-full flex items-center'>
                <textarea  ref={editRef} defaultValue={text}  autoComplete='off' className='w-[90%] max-[450px]:w-[90%] text-sm sm:text-xl text-black outline-none font-text-font font-semibold self-cente bg-transparent'></textarea>
                <button 
                onClick={()=>editTask(id,(editRef.current.value))}
                className=' w-[10%] max-[450px]:w-[20%] text-sm sm:text-xl text-[#837a7f] outline-none hover:bg-[#0000000f] py-1 px-2 rounded-md'><ion-icon name="checkmark-outline"></ion-icon></button>
            </div>
        ) : <div className='max-[380px]:w-[65%] w-[90%] text-sm  sm:text-lg lg:text-xl font-text-font font-semibold break-words text-black '>{text}</div>}
        <div className='flex ' >
            <div className='star-wrapper'>
                <button 
                onClick={()=>{
                    importantToggle(id)
                    hideOptions()
                }}
                onMouseOver={(e)=>{
                    let labelDiv = e.target.closest('div').querySelector('span');

                   labelDiv.classList.add('label')
                }}
                onMouseLeave={(e)=>{
                    let labelDiv = e.target.closest('div').querySelector('span');

                        labelDiv.classList.remove('label')
                 }}
                className={` text-sm sm:text-xl text-[#837a7f] outline-none hover:bg-[#0000000f] py-1 px-2 rounded-md ${important?'text-yellow-400':''}`}><ion-icon name={important?'star':'star-outline'}></ion-icon></button>
                <div className='relative '>
                    <span className='bg-black p-3 lg:p-4 text-center font-text-font font-semibold lg:text-lg text-md rounded-xl w-[200px] absolute lg:left-[-70px] right-0 z-[-3] opacity-0 transition-all'>{important?'Remove importance':'Mark as important'}</span>
                </div>
            </div>

            <div>
            <div className='option-wrapper'>
                <button
                onMouseOver={(e)=>{
                    let labelDiv = e.target.closest('div').querySelector('span');
                   labelDiv.classList.add('label')
                }}
                onMouseLeave={(e)=>{
                    let labelDiv = e.target.closest('div').querySelector('span');
                        labelDiv.classList.remove('label')
                 }}
                 onClick={(e)=>{
                    let target = ((e.target.parentElement).parentElement.querySelector('.optionDiv'))
                    target.classList.contains('options') ? target.classList.remove('options') : target.classList.add('options')
                 }}
                className= ' text-sm sm:text-xl text-[#837a7f] outline-none hover:bg-[#0000000f] py-1 px-2 rounded-md'><ion-icon name="ellipsis-horizontal-outline"></ion-icon></button>
                <div className='relative '>
                <span className='bg-black py-4 text-center font-text-font font-semibold text-md lg:text-lg rounded-xl w-[130px] lg:w-[150px] absolute right-0 lg:left-[-70px] z-[-3]  opacity-0 transition-all'>More Options</span>
                </div>
                <div className='relative'>
                <div className='optionDiv w-[200px] lg:w-[250px]  text-[#000000d8] font-semibold p-2 bg-[white] font-text-font text-sm lg:text-lg  rounded-2xl  absolute right-0  opacity-0 z-[-3] transition-all'>
                    <button 
                    onClick={()=>{
                        editMode(id)
                        hideOptions()
                    }
                    
                    }
                    className='p-4 rounded-2xl hover:text-black  hover:bg-[#00000019] cursor-pointer  w-full text-left'><span className='relative top-[2px] right-1'><ion-icon name="pencil-outline"></ion-icon></span> Edit task </button>
                    <button 
                    onClick={()=>{
                        completeToggle(id)
                        hideOptions()
                    }}
                    className='p-4 rounded-2xl hover:text-black hover:bg-[#00000019] cursor-pointer w-full text-left'><span className='relative top-[2px] right-1'><ion-icon name={completed?'ellipse-outline':'checkmark-circle-outline'}></ion-icon></span> {completed?'Mark as uncompleted':'Mark as completed'}</button>
                    <button
                    onClick={()=>{
                        importantToggle(id)
                        hideOptions()
                    }}
                     className='p-4 rounded-2xl hover:text-black hover:bg-[#00000019] cursor-pointer w-full text-left'><span className='relative top-[2px] right-1'><ion-icon name={important?'star':'star-outline'}></ion-icon></span> {important?'Remove importance':'Mark as important'}</button>
                    <button
                    onClick={()=>{
                        deleteTodo(id)
                        hideOptions()
                    }}
                     className='p-4 rounded-2xl  hover:bg-[#ff52526b] text-red-600 cursor-pointer w-full text-left'><span className='relative top-[2px] right-1'><ion-icon name="trash-outline"></ion-icon></span> Delete task</button>

                </div>
            </div>
            </div>
            </div>
        </div>
    </li>
  )
}

export default Task