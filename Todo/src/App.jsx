import React, { useContext, useState } from "react"
import InputBox from "./components/InputBox"
import Task from "./components/Task"
import { TodoData } from "./contexts/TodoData"

function App() {
  const {task} = useContext(TodoData)
  console.log(task)


  return (
    <>
    <div className="max-w-[1000px] m-auto z-[1]">
    <div className="grid grid-rows-[20vh_65vh_15vh] h-full w-[90%] m-auto">
    <div className="flex justify-center items-center mt-7">
      <img src="../public/logo.svg" alt="" className=" w-[50px]  transition-all hover:scale-[1.2] hover:rotate-[180deg]" />
      <h1 className="text-black font-text-font font-semibold ml-3">Todo App</h1>
    </div>
    <div>
      <div className=" h-full">
        <h2 className="text-4xl font-text-font text-black font-semibold">Tasks</h2>
        <ul>
          {
          task.map((title, index)=><Task key={index} text={title}/>)}
          {/* here all todo's will come */}
        </ul>

      </div>
    </div>
    <div className="text-center self-center">
    <InputBox />
    </div>
    </div>
    </div>
    </>
  )
}

export default App
