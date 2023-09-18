import {createContext, useContext, useState} from 'react'
import { createTasksRequest, getTasksRequest} from '../api/tasks.js';

const taskContext = createContext();

export const useTasks = ()=>{
    const context = useContext(taskContext)

    if(!context){
      throw new Error('useTasks shoulb be used within a TasksProvider');
    }
   
return context;
}

export function TaskProvider({children}){
  const [tasks, setTasks] = useState([]);

  const getTasks = async()=>{
   try {
    const res = await getTasksRequest();
    setTasks(res.data);
   console.log(res)
   } catch (error) {
    console.log(error)
   }

  }


  const createTask = async(task)=>{
    console.log('task')
    const res = await createTasksRequest(task)
    console.log(res)
  }
  
  return (
    <taskContext.Provider value={{
        tasks,
        createTask,
        getTasks
       
        }}>
       {children}
    </taskContext.Provider>
  )
}