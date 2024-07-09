import React from 'react'
import me from "../../assets/me.png"
import {motion} from "framer-motion"

const About = () => {

  const options = {initial:{opacity: 0,scale: 0.5 }, 
  animate:{ opacity: 1, scale: 1 }, 
  transition:{duration: 0.8,ease: [0, 0.71, 0.2, 1.01]}}

  return (
    <section className='about'>
      <motion.main {...options}>
        <h1>About Us</h1>
        <article>
          <h4>Spice Heaven</h4>
          <p>Welcome to Spice Heaven, where culinary passion meets a symphony of flavors! Our journey began with a desire to bring the essence of global spices to your plate, creating a haven for those who appreciate the magic of bold and tantalizing tastes. Inspired by the rich tapestry of traditional and modern cuisines, we have meticulously crafted a menu that showcases the vibrant character of spices from around the world. Every dish at Spice Heaven is a tribute to the art of spice blending, elevating ingredients to new heights of gastronomic delight. Whether you're a seasoned spice enthusiast or a curious palate explorer, our commitment to exceptional taste, warm hospitality, and an inviting ambiance ensures that each visit to Spice Heaven is a memorable and savory experience. Join us on this flavorful expedition and immerse yourself in a culinary journey like no other.</p>
        </article>
        <div>
          <h2>Founder</h2>
          <article>
            <div>
              <img src={me} alt="" />
              <h3>Keshav Garg</h3>
            </div>
            <p>I am Keshav Garg founder of Spice Heaven. Indulge in the Flavorful Paradise of Spice Heaven!</p>
          </article>
        </div>
      </motion.main>
    </section>
  )
}

export default About
