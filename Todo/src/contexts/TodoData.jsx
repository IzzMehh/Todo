import { createContext, useState,React, useEffect } from "react"


export const TodoData = createContext()


export function TodoDataProvider(props){
    const [task,setTask] = useState(()=>{
        return JSON.parse(localStorage.getItem('Todo')) || []
    })

    useEffect(() => {
      localStorage.setItem('Todo',JSON.stringify(task))
    }, [task])

    const addTask = (text)=>{
        setTask((prevVal)=>[...prevVal,{
            todoText: text,
            key:task.length,
            completed:false,
            editing:false,
            important:false,
        }])
        console.log(task)
    }
        
    
    return(
        <TodoData.Provider value={{task,addTask,setTask}}>
        {props.children}
    </TodoData.Provider>
    )
}
