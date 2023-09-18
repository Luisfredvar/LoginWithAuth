import {useForm} from 'react-hook-form'
import { useTasks } from '../contexts/taskContext';

function NewFormPage() {

  const {register, handleSubmit} = useForm(); 
  const {createTask} = useTasks()

  const onSubmit = handleSubmit ((data)=> {
     createTask(data);
      // console.log(data)
  })
  return (
    <>
      <div className='flex h-[calc(100vh-100px)] items-center justify-center'>
    <div className="bg-zinc-800 max-w-md w-full p-10">
         <form onSubmit={onSubmit}>
            <input type="text" className="min-w-full bg-white text-gray-700  px-4 my-4 py-4 rounded-md" placeholder="Title" {...register("title")}/>
            <textarea  rows="3" className="min-w-full bg-white text-gray-700 px-4 my-4 py-4 mt-3 rounded-md" {...register("description")}></textarea>
            <button className=''>
              Guardar
            </button>
         </form>
         </div>
    </div> 
    </>
  )
}

export default NewFormPage
