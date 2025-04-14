
import User from "../models/User.js";
import Chat from "../models/conversation.js"


export const addUser = async (req, res) => {
  try {
    let exist = await User.findOne({ sub: req.body.sub });
    if (exist) {
      return res.status(400).json({ message: "User already exists" });
    }
    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    console.log(savedUser);
    res.status(200).json(savedUser);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

export const showUser=async(req,res)=>{
  try{
   const users=await User.find({});
   res.status(200).json(users);
  }catch(err){
    return res.status(500).json(err.message);
  }
}
export const AllConversation=async(req,res)=>{
try{
   const senderId=req.body.senderId;
   const reciverId=req.body.reciverId;
   const exist=await Chat.findOne({members:{$all:[reciverId,senderId]}});
   if(exist){
    return res.status(200).json('conversation exists');
   }
   const newChat=new Chat({
    members:[reciverId,senderId]
   })
   await newChat.save();
   return res.status(200).json('coversation saved successfully');
}catch(err){
  return res.status(500).json(err.message);
}
}

export const getConversation=async(req,res)=>{
  try{
    const senderId=req.body.senderId;
    const reciverId=req.body.reciverId;
     const chats =await Chat.findOne({members:{$all:[reciverId,senderId]}});
     return res.status(200).json(chats);
 }catch(err){
   return res.status(500).json(err.message);
 }
}

