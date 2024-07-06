import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderDetails } from '../../redux/actions/order';
import { useParams } from 'react-router-dom';

const OrderDetails = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const {order} = useSelector((state)=>state.orders);
    // const {user} = useSelector((state)=>state.auth);
    
    useEffect(()=>{
        dispatch(getOrderDetails(params.id));
    },[dispatch,params.id]);

  return (
    <section className='orderDetails'>
        <main>
            <h1>Order Details</h1>
            <div>
                <h1>Order</h1>
                <p><b>Address</b>{`${order && order.shippingInfo.address}, House no: ${order && order.shippingInfo.hNo}, Pincode: ${order && order.shippingInfo.pinCode}`}</p>
            </div>
            <div>
                <h1>Contact</h1>
                <p><b>Name</b>{`${order && order.user.name}`}</p>
                <p><b>Phone No.</b>{`${order && order.shippingInfo.phoneNo}`}</p>
            </div>
            <div>
                <h1>Status</h1>
                <p><b>Order Status</b>{`${order && order.orderStatus}`}</p>
                <p><b>Ordering Time</b>{`${order && order.paidAt}`}</p>
                <p><b>Delievering Time</b>{`${order && order.deliveredAt?order.deliveredAt:"NA"}`}</p>
            </div>
            <div>
                <h1>Payment</h1>
                <p><b>Payment Method</b>{`${order && order.paymentMethod}`}</p>
                <p><b>Payment Reference</b>{order && order.paymentMethod==="Online"?`#${order && order.paymentInfo}`:"NA"}</p>
            </div>
            <div>
                <h1>Amount</h1>
                <p><b>Items Amount</b>₹{`${order && order.itemPrice}`}</p>
                <p><b>Delivering Charges</b>₹{`${order && order.deliveryCharges}`}</p>
                <p><b>Tax Charges</b>₹{`${order && order.taxPrice}`}</p>
                <p><b>Total Amount</b>₹{`${order && order.totalAmount}`}</p>
            </div>
            <article>
                <h1>Ordered Items</h1>
                {order && order.orderItems.biryani.quantity?<div>
                    <h4>Biryani</h4>
                    <div>
                        <span>Qunatity {`${order && order.orderItems.biryani.quantity}`}</span>
                    </div>
                </div>:""}
                {order && order.orderItems.pizza.quantity?<div>
                    <h4>Pizza</h4>
                    <div>
                        <span>Qunatity {`${order && order.orderItems.pizza.quantity}`}</span>
                    </div>
                </div>:""}
                {order && order.orderItems.burger.quantity?<div>
                    <h4>Burger</h4>
                    <div>
                        <span>Qunatity {`${order && order.orderItems.burger.quantity}`}</span>
                    </div>
                </div>:""}
                {order && order.orderItems.daalMakhni.quantity?<div>
                    <h4>Daal Makhni</h4>
                    <div>
                        <span>Qunatity {`${order && order.orderItems.daalMakhni.quantity}`}</span>
                    </div>
                </div>:""}
                {order && order.orderItems.shahiPaneer.quantity?<div>
                    <h4>Shahi Paneer</h4>
                    <div>
                        <span>Qunatity {`${order && order.orderItems.shahiPaneer.quantity}`}</span>
                    </div>
                </div>:""}
                {order && order.orderItems.butterNaan.quantity?<div>
                    <h4>Butter Naan</h4>
                    <div>
                        <span>Qunatity {`${order && order.orderItems.butterNaan.quantity}`}</span>
                    </div>
                </div>:""}
            </article>
        </main>
    </section>
  )
}

export default OrderDetails
