import { Router } from "express";
const router = Router();
import {dirname, join} from 'path';
import { fileURLToPath} from 'url';


router.post('/', (req, res, next) => {
    next(new Error('This is a bad request'));
})

router.all("/", (req, res, next) => {
  console.log("/ was called");
  next();
});

router.get("/", (req, res, next) => {
  console.log("Incoming to /");
  res.send("Server is up and running");
});


export default router;