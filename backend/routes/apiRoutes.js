import express from 'express'
const router=express.Router();
import { addUser,showUser,AllConversation } from '../controller/apiController.js';
router.route("/add").post(addUser)
router.route("/user").get(showUser)
router.route("/chat/add").post(AllConversation)
export default router;
