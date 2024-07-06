import React, { useEffect, useState } from 'react'
import biryani1 from "../../assets/biryani.avif"
import pizza1 from "../../assets/pizza.avif"
import burger1 from "../../assets/burger.avif"
import daalMakhni1 from "../../assets/daalMakhni.avif"
import shahiPaneer1 from "../../assets/shahiPaneer.avif"
import butterNaan1 from "../../assets/butterNaan.avif"
import {motion} from "framer-motion"
import { Link } from 'react-router-dom'
import {FaChevronCircleDown} from "react-icons/fa"
import { useDispatch, useSelector } from 'react-redux'
import {PiMagnifyingGlassLight} from "react-icons/pi"

const CartItem = ({value,title,img,increment,decrement,price,options})=>(
    <motion.div {...options} className="cartItem">
        <div>
            <img src={img} alt="Item" />
            <h4>{title}</h4>
            <p>₹{price}</p>
        </div>

        <div>
            <button onClick={decrement}>-</button>
            <input type="number" readOnly value={value}/>
            <button onClick={increment}>+</button>
        </div>
    </motion.div>
)

const Cart = () => {

    const options = {initial:{opacity: 0,scale: 0.5 }, 
    animate:{ opacity: 1, scale: 1 }, 
    transition:{duration: 0.8,ease: [0, 0.71, 0.2, 1.01]}}

    const {cartItems:{
        biryani:{quantity:biryani},     // This is same as const biryani = cartItems.biryani.quantity
        pizza:{quantity:pizza},
        burger:{quantity:burger},
        daalMakhni:{quantity:daalMakhni},
        shahiPaneer:{quantity:shahiPaneer},
        butterNaan:{quantity:butterNaan},
    },subTotal,tax,deliveryCharges,total} = useSelector((state)=>state.cart);

    const {cartItems:orderItems} = useSelector((state)=>state.cart);

    const dispatch = useDispatch();

    const increment = (item)=>{
        switch (item) {
            case 1:
                dispatch({type:"biryaniIncrement"});
                dispatch({type:"calculatePrice"});
                break;
            case 2:
                dispatch({type:"pizzaIncrement"});
                dispatch({type:"calculatePrice"});
                break;
            case 3:
                dispatch({type:"burgerIncrement"});
                dispatch({type:"calculatePrice"});
                break;
            case 4:
                dispatch({type:"daalMakhniIncrement"});
                dispatch({type:"calculatePrice"});
                break;
            case 5:
                dispatch({type:"shahiPaneerIncrement"});
                dispatch({type:"calculatePrice"});
                break;
            case 6:
                dispatch({type:"butterNaanIncrement"});
                dispatch({type:"calculatePrice"});
                break;
        
            default:
                dispatch({type:"biryaniIncrement"});
                dispatch({type:"calculatePrice"});
                break;
        }
    }
    
    const decrement = (item)=>{
        switch (item) {
            case 1:
                if(biryani === 0) break;
                dispatch({type:"biryaniDecrement"});
                dispatch({type:"calculatePrice"});
                break;
            case 2:
                if(pizza === 0) break;
                dispatch({type:"pizzaDecrement"});
                dispatch({type:"calculatePrice"});
                break;
            case 3:
                if(burger === 0) break;
                dispatch({type:"burgerDecrement"});
                dispatch({type:"calculatePrice"});
                break;
            case 4:
                if(daalMakhni === 0) break;
                dispatch({type:"daalMakhniDecrement"});
                dispatch({type:"calculatePrice"});
                break;
            case 5:
                if(shahiPaneer === 0) break;
                dispatch({type:"shahiPaneerDecrement"});
                dispatch({type:"calculatePrice"});
                break;
            case 6:
                if(butterNaan === 0) break;
                dispatch({type:"butterNaanDecrement"});
                dispatch({type:"calculatePrice"});
                break;
        
            default:
                if(biryani === 0) break;
                dispatch({type:"biryaniDecrement"});
                dispatch({type:"calculatePrice"});
                break;
        }
    };

    useEffect(()=>{
        localStorage.setItem("cartItems", JSON.stringify(orderItems));
        localStorage.setItem("cartPrices", JSON.stringify({subTotal,tax,deliveryCharges,total}));
    },[orderItems, subTotal, tax, deliveryCharges, total]);

    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
        let lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };

    return (
        <section className="cart">
            <main>
                <div className="search">
                    <input type="text" placeholder="search menu" onChange={inputHandler}/><PiMagnifyingGlassLight/>
                </div>
                {(inputText===("biryani").slice(0,inputText.length) || inputText==="") && <CartItem title={"Biryani"} img={biryani1} value={biryani} increment={()=>increment(1)} decrement={()=>decrement(1)} price={orderItems.biryani.price} options={options}/>}
                {(inputText===("pizza").slice(0,inputText.length) || inputText==="") && <CartItem title={"Pizza"} img={pizza1} value={pizza} increment={()=>increment(2)} decrement={()=>decrement(2)} price={orderItems.pizza.price} options={options}/>}
                {(inputText===("burger").slice(0,inputText.length) || inputText==="") && <CartItem title={"Burger"} img={burger1} value={burger} increment={()=>increment(3)} decrement={()=>decrement(3)} price={orderItems.burger.price} options={options}/>}
                {(inputText===("daal makhni").slice(0,inputText.length) || inputText==="") && <CartItem title={"Daal Makhni"} img={daalMakhni1} value={daalMakhni} increment={()=>increment(4)} decrement={()=>decrement(4)} price={orderItems.daalMakhni.price} options={options}/>}
                {(inputText===("shahi paneer").slice(0,inputText.length) || inputText==="") && <CartItem title={"Shahi Paneer"} img={shahiPaneer1} value={shahiPaneer} increment={()=>increment(5)} decrement={()=>decrement(5)} price={orderItems.shahiPaneer.price} options={options}/>}
                {(inputText===("butter naan").slice(0,inputText.length) || inputText==="") && <CartItem title={"Butter Naan"} img={butterNaan1} value={butterNaan} increment={()=>increment(6)} decrement={()=>decrement(6)} price={orderItems.butterNaan.price} options={options}/>}
                {(inputText==="") && <div className='loadMore'><FaChevronCircleDown/></div>}
                <article>
                    <div>
                        <h4>Sub Total</h4>
                        <p>₹{subTotal}</p>
                    </div>
                    <div>
                        <h4>Tax</h4>
                        <p>₹{tax}</p>
                    </div>
                    <div>
                        <h4>Delievery Charges</h4>
                        <p>₹{deliveryCharges}</p>
                    </div>
                    <div>
                        <h4>Net Total</h4>
                        <p>₹{total}</p>
                    </div>
                    <Link to="/shipping">Check Out</Link>
                </article>
            </main>
        </section>
    )
}

export default Cart
