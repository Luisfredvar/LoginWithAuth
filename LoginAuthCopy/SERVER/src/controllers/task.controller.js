import Task from '../models/task.models.js';

// NOTA: Get all Tasks
export const getTasks = async(req, res)=>{
const tasks = await Task.find({
    user: req.user.id
}).populate('user')
res.json(tasks);
};

// NOTA: Get Task by Id
export const getTaskById = async(req, res)=>{
const task = await Task.findById(req.params.id);
if(!task) return res.status(404).json({message :'Task not found'})
res.status(201).json(task)
};

// NOTA: Create New Task
export const createTask = async(req, res)=>{
const {title, description, date} = req.body;

const newTask = new Task({
    title,
    description,
    date,
    user:req.user.id
});

const saveTask = await newTask.save();
if(!saveTask) res.status(404).json({message:'Something gone wrong'})
res.status(200).json(saveTask)
};

// NOTA: Update Task By Id
export const UpdateTask = async(req, res)=>{

const task = await Task.findByIdAndUpdate(req.params.id, req.body,{
    new: true
});
if(!task) res.status(404).json({message:'Task not Found'})
res.status(201).json(task)
};

// NOTA: Delete Task
export const DeleteTask = async(req, res)=>{

    const task = await Task.findByIdAndDelete(req.params.id)
    if(!task) return res.status(404).json({message:'Id Task not Found'})
     return res.status(204);
};