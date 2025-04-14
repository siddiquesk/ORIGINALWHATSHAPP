import axios from 'axios';

const url = "http://localhost:8000";

export const addUser = async (data) => {
  try {
    const response = await axios.post(`${url}/add`, data);
    console.log('response', response); // logging response instead of data
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