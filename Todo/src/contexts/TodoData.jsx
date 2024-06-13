import { createContext, useState,React } from "react"


export const TodoData = createContext()


export function TodoDataProvider(props){
    const [task,setTask] = useState([])
    const addTask = (text)=>{
        setTask((prevVal)=>[...prevVal,text])
        console.log(task)
    }
        
    
    return(
        <TodoData.Provider value={{task,addTask}}>
        {props.children}
    </TodoData.Provider>
    )
}
