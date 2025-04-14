import express from 'express'
const router=express.Router();
import { addUser,showUser,AllConversation,getConversation } from '../controller/apiController.js';
router.route("/add").post(addUser)
router.route("/user").get(showUser)
router.route("/chat/add").post(AllConversation)
router.route("/chat/get/data").post(getConversation)
export default router;
