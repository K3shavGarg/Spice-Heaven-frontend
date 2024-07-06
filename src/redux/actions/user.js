import axios from "axios";
import { server } from "../store";

export const loadUser = ()=> async (dispatch)=>{
    try {
        dispatch({
            type:"loadingUserRequest",
        });

        const {data} = await axios.get(`${server}/me`
        ,{
            withCredentials: true,
        }
        );

        dispatch({
            type:"loadingUserSuccess",
            payload: data.user,
        });
        
    } catch (error) {
        dispatch({
            type:"loadingUserFail",
            payload: error.response.data.message,
        });
    }
}

export const logout = ()=> async (dispatch)=>{
    try {
        dispatch({
            type:"logoutRequest",
        });

        const {data} = await axios.get(`${server}/logout`
        ,{
            withCredentials: true,
        }
        );

        dispatch({
            type:"logoutSuccess",
            payload:data.message,
        });
        
    } catch (error) {
        dispatch({
            type:"logoutFail",
            payload: error.response.data.message,
        });
    }
}

export const userContact = (user,name,email,userMessage)=> async (dispatch)=>{
    try {
        dispatch({
            type:"userContactRequest",
        });

        const {data} = await axios.post(`${server}/contact`,
        {user,name,email,userMessage}
        ,{
            headers:{
                "Content-Type":"application/json",
            },
            withCredentials: true,
        }
        );

        dispatch({
            type:"userContactSuccess",
            payload: data.message,
        });
    } catch (error) {
        dispatch({
            type:"userContactFail",
            payload: error.response.data.message,
        });
    }
}