import { DataObject } from '@mui/icons-material';
import axios from 'axios';

const baseURL = "http://localhost:4000/";

export const validateUser = async (token) =>{
    try {
        const res = await axios.get(`${baseURL}api/users/login`,{
            headers:{
                Authorization : "Bearer " + token,

            }
        })
        return res.data;
    } catch (error) {
        return null;
    }
}

export const createCollection = async (data) =>{
    try {
        const res = await axios.post(`${baseURL}api/collection/save`,{...data})
        return (await res).data.savedCollection;
    } catch (error) {
        return null;
    }
}

export const getAllCollection = async (user_id) =>{
    try {
        const res = await axios.get(`${baseURL}api/collection/getAll/${user_id}`)
        return res.data
    } catch (error) {
        return null;
    }
}

