import { Router } from "express";
import { createUser } from "../controllers/users.js";
const router = Router();


router.post('/update-profile', (req, res, next) => {

});


router.post('/create', async (req, res, next) => {
    try{
        let user = await createUser(req.body);
        res.send(user);
    }catch(e){
        next(e);
    }
});



router.delete('/', (req, res, next) => {

});

export default router;