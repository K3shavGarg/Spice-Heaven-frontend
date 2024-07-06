import React, { useEffect } from 'react'
import {motion} from "framer-motion"
// import me from "../../assets/me.png";
import { useDispatch, useSelector } from 'react-redux';
import { getAdminUsers } from '../../redux/actions/admin';

const Users = () => {
    const options = {initial:{opacity: 0,scale: 0.5 }, 
    animate:{ opacity: 1, scale: 1 }, 
    transition:{duration: 0.8,ease: [0, 0.71, 0.2, 1.01]}}

    const dispatch = useDispatch();
    const {users} = useSelector((state)=>state.admin);

    useEffect(()=>{
        dispatch(getAdminUsers());
    },[dispatch]);

    return (
        <section className="tableClass">
                <motion.main {...options}>
                    <table>
                        <thead>
                            <tr>
                                <th>User ID</th>
                                <th>Name</th>
                                <th>Photo</th>
                                <th>Role</th>
                                <th>Since</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users && users.map(i=>(
                                    <tr key={i._id}>
                                        <td>#{i._id}</td>
                                        <td>{i.name}</td>
                                        <td>
                                            <img src={i.photo} alt="User" />
                                        </td>
                                        <td>{i.role}</td>
                                        <td>{i.createdAt.split("T")[0]}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </motion.main>
            </section>
    )
}

export default Users
