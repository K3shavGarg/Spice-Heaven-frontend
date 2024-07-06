import React from 'react'
import IndianCuisine from "../../assets/Indian_cuisines.avif"
import ChineseCuisine from "../../assets/Chinese_cuisine.avif"
import JapaneseCuisine from "../../assets/Japanese_cuisine.avif"
import KoreanCuisine from "../../assets/Korean_cuisine.avif"
import ItalianCuisine from "../../assets/Italian_cuisine.avif"
import {FaUtensils} from "react-icons/fa"
import {motion} from "framer-motion" 
import Menu from './Menu'

const Cuisine = () => {

  const options = {initial:{opacity: 0,scale: 0.5 }, 
  whileInView:{ opacity: 1, scale: 1 }, 
  transition:{duration: 0.8,ease: [0, 0.71, 0.2, 1.01]}}

  return (
    <>
      <section className='cuisine'>
        <h1>Try Various Cuisines <FaUtensils/></h1>
        {/* <p>Check out various cuisines</p> */}
        <div className='cuisineType'>
          <motion.div {...options}>
            <img src={IndianCuisine} alt="Indian cuisine"></img>
            <p>Indian</p>
          </motion.div>
          <motion.div {...options}>
            <img src={ChineseCuisine} alt="Chinese cuisine"></img>
            <p>Chinese</p>
          </motion.div>
          <motion.div {...options}>
            <img src={JapaneseCuisine} alt="Japanese cuisine"></img>
            <p>Japanese</p>
          </motion.div>
          <motion.div {...options}>
            <img src={KoreanCuisine} alt="Korean cuisine"></img>
            <p>Korean</p>
          </motion.div>
          <motion.div {...options}>
            <img src={ItalianCuisine} alt="Italian cuisine"></img>
            <p>Italian</p>
          </motion.div>
        </div>
      </section>
      <Menu/>
    </>
  )
}

export default Cuisine
