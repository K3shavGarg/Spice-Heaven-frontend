import React from 'react'
import { Link } from 'react-router-dom'
import {motion} from "framer-motion"

const PaymentSuccess = () => {
  const options = {initial:{opacity: 0,scale: 0.5 }, 
    animate:{ opacity: 1, scale: 1 }, 
    transition:{duration: 0.8,ease: [0, 0.71, 0.2, 1.01]}}
  return (
    <section className="paymentsuccess">
        <motion.main {...options}>
            <h1>Order Confirmed</h1>
            <p>Order Placed Successfully, You can check order status below.</p>
            <Link to='/myorders'>Check Status</Link>
        </motion.main>
    </section>
  )
}

export default PaymentSuccess
