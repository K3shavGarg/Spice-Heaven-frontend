import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineEye} from "react-icons/ai"
import {motion} from "framer-motion"
import { useDispatch, useSelector } from 'react-redux'
import { getMyOrders } from '../../redux/actions/order'
import { toast } from 'react-hot-toast'

const Myorders = () => {

    const options = {initial:{opacity: 0,scale: 0.5 }, 
    animate:{ opacity: 1, scale: 1 }, 
    transition:{duration: 0.8,ease: [0, 0.71, 0.2, 1.01]}}

    const dispatch = useDispatch();

    const {user} = useSelector((state)=>state.auth);
    
    const {orders,error}  = useSelector((state)=>state.orders);
    
    useEffect(()=>{

        if(error){
            toast.error(error);
            dispatch({type:"clearError"});
        }

        dispatch(getMyOrders(user));
    },[dispatch,user,error]);


    return (
        <section className="tableClass">
            <motion.main {...options}>
                <table>
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Status</th>
                            <th>Amount</th>
                            <th>Payment Methods</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders && orders.map(i=>(
                                <tr key={i._id}>
                                    <td>#{i._id}</td>
                                    <td>{i.orderStatus}</td>
                                    <td>₹{i.totalAmount}</td>
                                    <td>{i.paymentMethod}</td>
                                    <td><Link to={`/order/${i._id}`}><AiOutlineEye/></Link></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </motion.main>
        </section>
    )
}

export default Myorders
