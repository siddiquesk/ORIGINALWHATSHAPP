
import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
  members:{
    type:Array,
  },
  message:{
    type:String,
  },
  
},
{
  timestamps:true,
}
);

export default mongoose.model("Chat", chatSchema);