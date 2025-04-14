import express from 'express'
const router=express.Router();
import { addUser,showUser } from '../controller/apiController.js';
router.route("/add").post(addUser)
router.route("/user").get(showUser)

export default router;
