import axios from 'axios';

const URL= 'http://localhost:8000';

export const signlolup = async (data)=>{
    try{
        return await axios.post(`${URL}/signup`,data);
    }
    catch(error){
        console.log(error)
    }
}


export const loglolup = async (data)=>{
    try{
        const res= await axios.post(`${URL}/login`,data);
        return res.data;
    }
    catch(error){
        console.log(error)
    }
}