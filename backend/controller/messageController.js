
import Message from "../models/message.js"
import Chat from "../models/conversation.js";

export const createMessage=async(req,res)=>{
  try{
       const newMessage= new Message(req.body);
       await newMessage.save();
       await Chat.findByIdAndUpdate(req.body.chatId,{message:req.body.text});
       return res.status(200).json(newMessage);
 }catch(err){
   return res.status(500).json(err.message);
 }
}

export const getMessageData=async(req,res)=>{
  try{
    const {id}=req.params;
     const messages=await Message.find({chatId:id});
     console.log(messages);
   return res.status(200).json(messages);
 }catch(err){
   return res.status(500).json(err.message);
 }
}