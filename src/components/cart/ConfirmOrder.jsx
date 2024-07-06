import React, { useEffect, useState } from 'react'
import {motion} from "framer-motion"
import { useDispatch, useSelector } from 'react-redux'
import { createOrder, paymentVerification } from '../../redux/actions/order'
import { toast } from 'react-hot-toast'
import {useNavigate} from "react-router-dom"
import axios from 'axios'
import { server } from '../../redux/store'

const ConfirmOrder = () => {

    const options = {initial:{opacity: 0,scale: 0.5 }, 
    animate:{ opacity: 1, scale: 1 }, 
    transition:{duration: 0.8,ease: [0, 0.71, 0.2, 1.01]}}

    const dispatch = useDispatch();

    const [paymentMethod, setPaymentMethod] = useState("");
    const [disableBtn, setDisableBtn] = useState(false);

    const {cartItems, subTotal, tax, deliveryCharges, total, shippingInfo} = useSelector((state)=>state.cart);
    const {message,error} = useSelector((state)=>state.order);
    const {user} = useSelector((state)=>state.auth);

    const submitHandler = async (e)=>{
        e.preventDefault();
        setDisableBtn(true);

        if(paymentMethod === "Cash On Delivery"){
            dispatch(createOrder(shippingInfo,cartItems,paymentMethod,subTotal,tax,deliveryCharges,total,user));
            // console.log(
            //     {cartItems,
            //     subTotal,
            //     tax,
            //     deliveryCharges,
            //     total,
            //     shippingInfo});
        }
        else{

            const {data:{order,orderOptions}} = await axios.post(`${server}/createorderonline`,
            {
                shippingInfo,
                orderItems:cartItems,
                paymentMethod,
                itemPrice:subTotal,
                taxPrice:tax,
                deliveryCharges,
                totalAmount:total,
                user,
            }
            ,{
                headers:{
                    "Content-Type":"application/json",
                },
                withCredentials: true,
            });

            const options = {
                key:"rzp_test_bHWdP0aGIYcHwm", // Enter the Key ID generated from the Dashboard
                amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                currency: "INR",
                name: "Spice Heaven", //your business name
                description: "Food App",
                order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
                handler: function (response){
    
                    const {razorpay_payment_id,razorpay_order_id,razorpay_signature} = response;

                    dispatch(paymentVerification(razorpay_payment_id,razorpay_order_id,razorpay_signature,orderOptions))
                },
                theme: {
                    color: "#08ee08",
                }
            };
            const razorpay = new window.Razorpay(options);
            razorpay.open();
        }
    }

    const navigate = useNavigate();

    useEffect(()=>{
        if(message){
            toast.success(message);
            dispatch({
                type:"clearMessage",
            });
            dispatch({
                type:"emptyState",
            });
            navigate("/paymentsuccess");
        }

        if(error){
            toast.error(error);
            dispatch({
                type:"clearError",
            });
            setDisableBtn(false);
        }

    },[dispatch,message,error,navigate]);

    return (
        <section className="confirmOrder">
            <motion.main {...options}>
                <h1>Confirm Order</h1>
                <p>Choose an option to pay:</p>
                <form onSubmit={submitHandler}>
                    <div>
                        <label>Cash On Delievery</label>
                        <input type="radio" name="payment" onChange={()=>setPaymentMethod("Cash On Delivery")} required/>
                    </div>
                    <div>
                        <label>Online</label>
                        <input type="radio" name="payment" onChange={()=>setPaymentMethod("Online")}/>
                    </div>
                    <button disabled={disableBtn} type='submit'>Place Order</button>
                </form>
            </motion.main>
        </section>
    )
}

export default ConfirmOrder
