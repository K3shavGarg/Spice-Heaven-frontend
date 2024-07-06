import React from 'react'
import {FaYoutube,FaInstagram,FaTwitter} from "react-icons/fa"

const Footer = () => {
  return (
    <footer>
        <div>
            <h2>SPICE HEAVEN</h2>
            <strong>All right reserved @spiceheaven</strong>
            <p>Follow Us</p>
            <div className='websites'>
                <FaYoutube  style={{color: "#fe0101",}} />
                <FaInstagram  style={{color: "#ae00ff",}} />
                <FaTwitter style={{color: "#0091ff",}} />
            </div>
        </div>
    </footer>
  )
}

export default Footer
