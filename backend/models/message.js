

import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  chatId:{
  type:String,
  },

  reciverId:{
    type:String,
  },
  senderId:{
    type:String,
  },
  text:{
    type:String,
  },
  type:{
    type:String,
  },
},
{
  timestamps:true,
}
);

export default mongoose.model("Message", messageSchema);
