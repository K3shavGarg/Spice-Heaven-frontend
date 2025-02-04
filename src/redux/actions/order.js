import axios from "axios";
import { server } from "../store";


export const createOrder = (shippingInfo,orderItems,paymentMethod,itemPrice,taxPrice,deliveryCharges,totalAmount,user)=> async (dispatch)=>{
    try {
        dispatch({
            type:"createOrderRequest",
        });

        const {data} = await axios.post(`${server}/createorder`,
        {shippingInfo,orderItems,paymentMethod,itemPrice,taxPrice,deliveryCharges,totalAmount,user}
        ,{
            headers:{
                "Content-Type":"application/json",
            },
            withCredentials: true,
        }
        );

        dispatch({
            type:"createOrderSuccess",
            payload: data.message,
        });
    } catch (error) {
        dispatch({
            type:"createOrderFail",
            payload: error.response.data.message,
        });
    }
}


export const paymentVerification = (razorpay_payment_id,
    razorpay_order_id,
    razorpay_signature,
    orderOptions)=> async (dispatch)=>{
    try {
        dispatch({
            type:"paymentVerificationRequest",
        });

        const {data} = await axios.post(`${server}/paymentVerification`,
        {razorpay_payment_id,
            razorpay_order_id,
            razorpay_signature,
            orderOptions}
        ,{
            headers:{
                "Content-Type":"application/json",
            },
            withCredentials: true,
        }
        );

        dispatch({
            type:"paymentVerificationSuccess",
            payload: data.message,
        });
    } catch (error) {
        dispatch({
            type:"paymentVerificationFail",
            payload: error.response.data.message,
        });
    }
};


export const getMyOrders = (user)=> async (dispatch)=>{
    try {
        dispatch({
            type:"getMyOrdersRequest",
        });

        const {data} = await axios.post(`${server}/myorders`,{user},{
            headers:{
                "Content-Type":"application/json",
            },
            withCredentials: true,
        });

        dispatch({
            type:"getMyOrdersSuccess",
            payload: data.orders,
        });

    } catch (error) {
        dispatch({
            type:"getMyOrdersFail",
            payload: error.response.data.message,
        });
    }
};


export const getOrderDetails = (id)=> async (dispatch)=>{
    try {
        dispatch({
            type:"getOrderDetailsRequest",
        });

        const {data} = await axios.post(`${server}/order/:${id}`,{id},{
            headers:{
                "Content-Type":"application/json",
            },
            withCredentials: true,
        });

        dispatch({
            type:"getOrderDetailsSuccess",
            payload: data.order,
        });

    } catch (error) {
        dispatch({
            type:"getOrderDetailsFail",
            payload: error.response.data.message,
        });
    }
};