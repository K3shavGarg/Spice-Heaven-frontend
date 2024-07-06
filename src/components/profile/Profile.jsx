import React from 'react';
import {motion} from "framer-motion";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/actions/user';
// import me from "../../assets/me.png"

const Profile = () => {

    const options = {initial:{opacity: 0,scale: 0.5 }, 
    animate:{ opacity: 1, scale: 1 }, 
    transition:{duration: 0.8,ease: [0, 0.71, 0.2, 1.01]}};

    const dispatch = useDispatch();
    const {user} = useSelector((state)=>state.auth);

    const logoutHandler = ()=>{
        dispatch(logout());
    };


    return (
        <section className="profile">
            <motion.main {...options}>
                <img src={user.photo} alt="User"/>
                <h5>{user.name}</h5>
                {   user.role === "admin" && 
                    <>
                        <div>
                            <Link to="/admin/dashboard">Dashboard</Link>
                        </div>
                    </>
                }
                <div>
                    <Link to="/myorders">Orders</Link>
                </div>
                <button onClick={logoutHandler}>Logout</button>
            </motion.main>
        </section>
    )
}

export default Profile
