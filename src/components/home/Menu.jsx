import React from 'react'
import {FaScroll, FaChevronCircleDown} from "react-icons/fa"
import MenuCard from './MenuCard'
import biryani from "../../assets/biryani.avif"
import pizza from "../../assets/pizza.avif"
import burger from "../../assets/burger.avif"
import daalMakhni from "../../assets/daalMakhni.avif"
import shahiPaneer from "../../assets/shahiPaneer.avif"
import butterNaan from "../../assets/butterNaan.avif"
import { useDispatch } from 'react-redux'
import { toast } from 'react-hot-toast'

const Menu = () => {

  const dispatch = useDispatch();

  const addToCartHandler = (ItemNo)=>{
    switch (ItemNo) {
      case 1:
        dispatch({type:"biryaniIncrement"});
        dispatch({type:"calculatePrice"});
        toast.success("Added To Cart");
        break;
        case 2:
        dispatch({type:"pizzaIncrement"});
        dispatch({type:"calculatePrice"});
        toast.success("Added To Cart");
        break;
      case 3:
        dispatch({type:"burgerIncrement"});
        dispatch({type:"calculatePrice"});
        toast.success("Added To Cart");
        break;
      case 4:
        dispatch({type:"daalMakhniIncrement"});
        dispatch({type:"calculatePrice"});
        toast.success("Added To Cart");
        break;
      case 5:
        dispatch({type:"shahiPaneerIncrement"});
        dispatch({type:"calculatePrice"});
        toast.success("Added To Cart");
        break;
      case 6:
        dispatch({type:"butterNaanIncrement"});
        dispatch({type:"calculatePrice"});
        toast.success("Added To Cart");
        break;
    
      default:
        dispatch({type:"biryaniIncrement"});
        dispatch({type:"calculatePrice"});
        toast.success("Added To Cart");
        break;
    }
  }

  return (
    <section id="menu">
      <h1>Menu<FaScroll/></h1>
      <div className="menuItems">
        <div className="row1">
          <div className='item1'><MenuCard ItemImg={biryani} ItemNo={1} price={250} title={"Biryani"} handler={addToCartHandler}/></div>
          <div className='item2'><MenuCard ItemImg={pizza} ItemNo={2} price={200} title={"Pizza"} handler={addToCartHandler}/></div>
          <div className='item3'><MenuCard ItemImg={burger} ItemNo={3} price={100} title={"Burger"} handler={addToCartHandler}/></div>
        </div>
        <div className="row2">
          <div className='item4'><MenuCard ItemImg={daalMakhni} ItemNo={4} price={150} title={"Daal Makhni"} handler={addToCartHandler}/></div>
          <div className='item5'><MenuCard ItemImg={shahiPaneer} ItemNo={5} price={150} title={"Shahi Panner"} handler={addToCartHandler}/></div>
          <div className='item6'><MenuCard ItemImg={butterNaan} ItemNo={6} price={25} title={"Butter Naan"} handler={addToCartHandler}/></div>
        </div>
      </div>
      <div className='loadMore'><FaChevronCircleDown/></div>
    </section>
  )
}

export default Menu
