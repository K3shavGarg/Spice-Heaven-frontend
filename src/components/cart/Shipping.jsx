import React, { useState } from 'react'
import {motion} from "framer-motion"
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate} from "react-router-dom";

const Shipping = () => {

    const options = {initial:{opacity: 0,scale: 0.5 }, 
    animate:{ opacity: 1, scale: 1 }, 
    transition:{duration: 0.8,ease: [0, 0.71, 0.2, 1.01]}}

    const {shippingInfo} = useSelector((state)=>state.cart);

    const [hNo,setHNo] = useState(shippingInfo.hNo);
    const [address,setAddress] = useState(shippingInfo.address);
    const [phoneNo,setPhoneNo] = useState(shippingInfo.phoneNo);
    const [pinCode,setPinCode] = useState(shippingInfo.pinCode);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submitHandler = (e)=>{
        e.preventDefault();
        // console.log(hNo,address,phoneNo,pinCode);

        dispatch({
            type:"addShippingInfo",
            payload:{
                hNo,address,phoneNo,pinCode,
            },
        });

        localStorage.setItem("shippingInfo",JSON.stringify({hNo,address,phoneNo,pinCode}));

        navigate("/confirmorder");
    };

    return (
        <section className='shipping'>
            <motion.main {...options}>
                <h1>Order Details</h1>
                <form onSubmit={submitHandler}>
                    <div>
                        <label>Address</label>
                        <input type="text" placeholder="Enter Your Address" value={address} 
                        onChange={(e)=>setAddress(e.target.value)}  required/>
                    </div>
                    <div>
                        <label>House No.</label>
                        <input type="text" placeholder="Enter Your House No." value={hNo} 
                        onChange={(e)=>setHNo(e.target.value)} required/>
                    </div>
                    <div>
                        <label>Pincode</label>
                        <input type="number" placeholder="Enter Your Pincode" value={pinCode} 
                        onChange={(e)=>setPinCode(e.target.value)} required/>
                    </div>
                    <div>
                        <label>Phone No.</label>
                        <input type="number" placeholder="Enter Your Phone No." value={phoneNo} 
                        onChange={(e)=>setPhoneNo(e.target.value)} required/>
                    </div>
                    <div>
                        <label>Message</label>
                        <textarea placeholder='Enter Your Message if any' id="" cols="30" rows="10"></textarea>
                    </div>
                    <button type='submit'>Confirm Order</button>
                </form>
            </motion.main>
        </section>
    )
}

export default Shipping
