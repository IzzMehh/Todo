import React, { useContext, useState } from "react"
import InputBox from "./components/InputBox"
import Task from "./components/Task"
import { TodoData } from "./contexts/TodoData"



function App() {
  const {task} = useContext(TodoData)

  return (
    <>
    <div className="max-w-[1000px] m-auto z-[1] ">
    <div className="grid grid-rows-[10vh,70vh,15vh] h-full w-[100%] m-auto">

    <div className="flex justify-center items-center mt-7">
      <img src="logo.svg" alt="" className=" w-[50px]  transition-all hover:scale-[1.2] hover:rotate-[180deg]" />
      <h1 className="text-black font-text-font font-semibold ml-3 text-[40px] lg:text-[50px]">Todo App</h1>
    </div>


    <div className="todo-container overflow-y-auto overflow-x-hidden">
      <div className="w-[90%] m-auto ">
        
        <div className="mb-5">
        <h2 className={`text-4xl max-lg:text-3xl font-text-font text-black font-semibold mb-3 ${task.some(val => val.important) ? 'block' : 'hidden'}`}>Important:</h2>
        <ul>
          {(task.filter((val)=>(val.important)).map((val, index)=><Task key={index} id={val.key} important={val.important} completed={val.completed} editing={val.editing}  text={val.todoText}/>))}
          {/* here all todo's will come */}
        </ul>
        </div>
        
        <div>  
        <h2 className="text-4xl max-lg:text-3xl font-text-font text-black font-semibold mb-3">Tasks:</h2>
        <ul>
          {(task.filter((val)=>(!val.important)).map((val, index)=><Task key={index} id={val.key} important={val.important} completed={val.completed}  editing={val.editing} text={val.todoText}/>))}
          {/* here all todo's will come */}
        </ul>
        </div>
      </div>
    </div>
    
    <div className="text-center  w-[90%] m-auto ">
      <InputBox />
    </div>
    </div>
    </div>
    </>
  )
}

export default App
