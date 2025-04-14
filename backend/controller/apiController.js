
import User from "../models/User.js";



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