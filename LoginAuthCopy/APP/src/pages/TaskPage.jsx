import { useEffect } from "react"
import {useTasks} from '../contexts/taskContext'

function TaskPage() {

  const {tasks, getTasks} = useTasks();
  console.log(tasks);
  useEffect(()=>{
    getTasks();
  },[])

  return (

    
    <div className="flex justify-center items-center flex-col h-screen bg-black">
      <div className="container">
      
         
          <div className="bg-zinc-800 text-center text-2xl animate-pulse">
              <h1 className="mb-20">LISTADO DE TAREAS</h1>
              {
                tasks.map((task =>(
                  <div key={task._id}>
                      <h1>{task.title}</h1>
                      <p>{task.description}</p>
                      <br />
                  </div>
                )) )
              }
         
          
        </div>
      </div>
      
    </div>
  )
}

export default TaskPage
