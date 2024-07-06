import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {motion} from "framer-motion"
import { useDispatch, useSelector } from 'react-redux'
import { getAdminStats } from '../../redux/actions/admin'

const Box = ({title,value})=>(
    <div>
        <h3>{title}</h3>
        <p>
            {title==="Income" && "₹"}
            {value}
        </p>
    </div>
)

const Dashboard = () => {

    const options = {initial:{opacity: 0,scale: 0.5 }, 
    animate:{ opacity: 1, scale: 1 }, 
    transition:{duration: 0.8,ease: [0, 0.71, 0.2, 1.01]}}

    const dispatch = useDispatch();
    const {usersCount, ordersCount, totalIncome} = useSelector((state)=>state.admin);

    useEffect(()=>{
        dispatch(getAdminStats());
    },[dispatch]);

    return (
        <section className="dashboard">
            <motion.main {...options}>
                <article>
                    <Box title="Users" value={usersCount}/>
                    <Box title="Orders" value={ordersCount}/>
                    <Box title="Income" value={totalIncome}/>
                </article>
                <section>
                    <div>
                        <Link to="/admin/orders">View Orders</Link>
                        <Link to="/admin/users">View Users</Link>
                    </div>
                </section>
            </motion.main>
        </section>
    )
}

export default Dashboard
