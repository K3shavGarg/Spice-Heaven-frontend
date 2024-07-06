import React from 'react';
import {motion} from "framer-motion";
import {FcGoogle} from "react-icons/fc"
import { server } from '../../redux/store';

const Login = () => {

    const options = {initial:{opacity: 0,scale: 0.5 }, 
    animate:{ opacity: 1, scale: 1 }, 
    transition:{duration: 0.8,ease: [0, 0.71, 0.2, 1.01]}};

    const loginHandler = ()=>{
        window.open(`${server}/googlelogin`, "_self");
    }

    return (
        <section className='login'>
            <motion.button {...options} onClick={loginHandler}>
                Login With Google <FcGoogle/>
            </motion.button>
        </section>
    )
}

export default Login
