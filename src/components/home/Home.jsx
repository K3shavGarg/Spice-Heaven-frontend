import React from 'react'
import {motion} from "framer-motion" 
import Cuisine from './Cuisine';
import {FaPepperHot} from "react-icons/fa"

const Home = () => {
    const options = {
        initial:{
            x:"-100%",
            opacity: 0,
        },
        whileInView: {
            x:0,
            opacity:1,
        },
    };
    return (
        <>
            <section className='home'>
                <div>
                    <motion.h1 {...options}>Spice Heaven <FaPepperHot/></motion.h1>
                    <motion.p {...options} transition={{delay:0.2}}>Indulge in the Flavorful Paradise of Spice Heaven!</motion.p>
                </div>
                <motion.a href="#menu" initial={{y:"-100%",opacity:0}} whileInView={{y:0,opacity:1}} transition={{delay:0.4}}>Explore Menu</motion.a>
            </section>
            <Cuisine/>
        </>
    )
}

export default Home
