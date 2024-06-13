import React from "react"
import InputBox from "./components/InputBox"

function App() {

  return (
    <>
    <div className="grid grid-rows-[10vh_80vh_10vh] h-full">
    <div className="flex justify-center items-center mt-4">
      <img src="../public/logo.svg" alt="" className=" w-[50px]  transition-all hover:scale-[1.2] hover:rotate-[180deg]" />
      <h1 className="text-black font-text-font font-semibold ml-3">Todo App</h1>
    </div>
    <div>
      <div className=" h-full">
        Todos.
      </div>
    </div>
    <div className="text-center self-center">
      <InputBox/>
    </div>
    </div>
    </>
  )
}

export default App
