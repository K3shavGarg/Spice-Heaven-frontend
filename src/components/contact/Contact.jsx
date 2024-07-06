import React, { useState } from 'react'
import {motion} from "framer-motion"
import { useDispatch, useSelector } from 'react-redux'
import { userContact } from '../../redux/actions/user'
import { toast } from 'react-hot-toast'
const Contact = () => {

    const options = {initial:{opacity: 0,scale: 0.5 }, 
  whileInView:{ opacity: 1, scale: 1 }, 
  transition:{duration: 0.8,ease: [0, 0.71, 0.2, 1.01]}}

    const dispatch = useDispatch();
    const {user} = useSelector((state)=>state.auth);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [userMessage, setUserMessage] = useState("");

    const {message, error} = useSelector((state)=>state.auth);

    const submitHandler = (e)=>{
        e.preventDefault();

        dispatch(userContact(user,name,email,userMessage));

        setName("");
        setEmail("");
        setUserMessage("");

        if(message){
            toast.success(message);
            dispatch({type:"clearMessage"});
        }
        if(error){
            toast.error(error);
            dispatch({type:"clearError"});
        }
    }

    return (
        <section className='contact'>
            <motion.form {...options} onSubmit={submitHandler}>
                <h2>Contact Us</h2>
                <input type="text" placeholder='Enter Your Name' value={name} required onChange={(e)=>setName(e.target.value)}/>
                <input type="email" placeholder='Enter Your Email' value={email} required onChange={(e)=>setEmail(e.target.value)}/>
                <textarea placeholder='Enter Your Message' id="" cols="30" rows="10" value={userMessage} required onChange={(e)=>setUserMessage(e.target.value)}></textarea>
                <button type="submit">Send</button>
            </motion.form>
        </section>
    )
}

export default Contact
