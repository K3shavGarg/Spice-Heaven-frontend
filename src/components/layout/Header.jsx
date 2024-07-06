import React from 'react'
import { Link } from 'react-router-dom'
import {FiLogIn} from "react-icons/fi"
import {FaPepperHot} from "react-icons/fa"
import {FaUser} from "react-icons/fa"
import {motion} from "framer-motion" 


const Header = ({isAuthenticated = false}) => {
  return (
    <nav>
        <motion.div initial={{x:"-100%"}} whileInView={{x:0}}>
          <p>Spice Heaven <FaPepperHot/></p>
        </motion.div>

        <div>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
            <div>
              <Link to="/cart">Order</Link>
            </div>
            <Link to={isAuthenticated?"/me":"/login"}>
                {isAuthenticated?<FaUser/>:<FiLogIn/>}
            </Link>
        </div>
    </nav>
  )
}

export default Header
