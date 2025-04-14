import axios from 'axios';

const url = "http://localhost:8000";

export const addUser = async (data) => {
  try {
    const response = await axios.post(`${url}/add`, data); 
  } catch (err) {
    console.log(err.message);
  }
};

export const showUser=async()=>{
  try{
    const response=await axios.get(`${url}/user`);
    return response.data;
  }catch(err){
    console.log(err.message);
  }
}

export const setConversation = async ({ senderId, reciverId }) => {
  try {
    const response = await axios.post(`${url}/chat/add`, {
      senderId: senderId,
      reciverId: reciverId,
    });
    return response.data;
  } catch (err) {
    console.log("Error in setConversation:", err.message);
  }
};
