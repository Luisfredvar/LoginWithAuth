import { Router } from "express";
import { DeleteTask, UpdateTask, createTask, getTasks, getTaskById } from "../controllers/task.controller.js";
import { requiredAuth } from "../midlewares/tokenValidation.js";
import { createSchema } from "../schemas/task.schema.js";
import { validatorSchema } from "../midlewares/validator.meddleware.js";

const router = Router();

router.get('/tasks', requiredAuth, getTasks)
router.get('/task/:id', requiredAuth, getTaskById)
router.post('/task', requiredAuth, validatorSchema(createSchema) ,createTask)
router.put('/task/:id', requiredAuth, UpdateTask)
router.delete('/task/:id', requiredAuth, DeleteTask)

export default router;