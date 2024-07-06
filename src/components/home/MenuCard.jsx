import React from 'react';
import {motion} from "framer-motion";

const MenuCard = ({ItemImg,ItemNo,price,title,handler}) => {

    const options = {initial:{opacity: 0,scale: 0.5 }, 
    whileInView:{ opacity: 1, scale: 1 }, 
    transition:{duration: 0.8,ease: [0, 0.71, 0.2, 1.01]}}

    return (
        <motion.div {...options} className='menuCard'>
            <div>{title}</div>
            <main>
                <img src={ItemImg} alt={ItemNo} />
                {/* <p>{title}</p> */}
                <div className="priceBuy">
                    <h5>₹{price}</h5>
                    <button onClick={()=>handler(ItemNo)}>Buy Now</button>
                </div>
            </main>
        </motion.div>
    )
}

export default MenuCard
