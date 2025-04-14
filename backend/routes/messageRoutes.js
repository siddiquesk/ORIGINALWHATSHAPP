
import express from 'express'
const router=express.Router();
import { createMessage,getMessageData } from '../controller/messageController.js';
router.route("/chat/message").post(createMessage);
router.route("/chat/message/:id").get(getMessageData);
export default router;