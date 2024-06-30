import { Router } from "express";
const router = Router();
import { createTask, deleteTask, getTasks, markTaskAsDone } from "../controllers/tasks.js";

router.post("/", async (req, res, next) => {
  try {

    res.json(await createTask(req.body.title, req.body.user_id));
  } catch (e) {
    next(e);
  }
});

router.get("/", async (req, res, next) => {
  try {
    console.log(req.query.id)
    const tasks = await getTasks(req.query.id)
    res.json(tasks)
  } catch (e) {
    next(e);
  }
});

router.patch("/:id", async (req, res, next) => {
  try {
    res.json(await markTaskAsDone(req.params.id));
  } catch (e) {
    next(e);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    res.json(await deleteTask(req.params.id));
  } catch (e) {
    next(e);
  }
});

router.post("/add-image", (req, res, next) => { });

export default router;
