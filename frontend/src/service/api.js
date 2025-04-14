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

export const getConversation = async (data) => {
  try {
    const response = await axios.post(`${url}/chat/get/data`,data);
    return response.data;
  } catch (err) {
    console.log("Error in setConversation:", err.message);
  }
};

export const newMessage = async (data) => {
  try {
    const response = await axios.post(`${url}/chat/message`,data);
    return response.data;
  } catch (err) {
    console.log("Error in setConversation:", err.message);
  }
};

export const getMessage = async (id) => {
  try {
    const response = await axios.get(`${url}/chat/message/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error in getMessage API:", error.message);
    return [];
  }
};
