import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    cartItems:localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):{
        biryani:{
            quantity:0,
            price: 250,
        },
        pizza:{
            quantity:0,
            price: 200,
        },
        burger:{
            quantity:0,
            price: 100,
        },
        daalMakhni:{
            quantity:0,
            price: 150,
        },
        shahiPaneer:{
            quantity:0,
            price: 150,
        },
        butterNaan:{
            quantity:0,
            price: 25,
        },
    },
    subTotal:localStorage.getItem("cartPrices")?JSON.parse(localStorage.getItem("cartPrices")).subTotal:0,
    tax:localStorage.getItem("cartPrices")?JSON.parse(localStorage.getItem("cartPrices")).tax:0,
    deliveryCharges: localStorage.getItem("cartPrices")?JSON.parse(localStorage.getItem("cartPrices")).deliveryCharges:0,
    total:localStorage.getItem("cartPrices")?JSON.parse(localStorage.getItem("cartPrices")).total:0,
    shippingInfo:localStorage.getItem("shippingInfo")?JSON.parse(localStorage.getItem("shippingInfo")):{},
};

export const cartReducer = createReducer(initialState,{
    biryaniIncrement: (state)=>{
        state.cartItems.biryani.quantity += 1;
    },
    pizzaIncrement: (state)=>{
        state.cartItems.pizza.quantity += 1;
    },
    burgerIncrement: (state)=>{
        state.cartItems.burger.quantity += 1;
    },
    daalMakhniIncrement: (state)=>{
        state.cartItems.daalMakhni.quantity += 1;
    },
    shahiPaneerIncrement: (state)=>{
        state.cartItems.shahiPaneer.quantity += 1;
    },
    butterNaanIncrement: (state)=>{
        state.cartItems.butterNaan.quantity += 1;
    },

    biryaniDecrement: (state)=>{
        state.cartItems.biryani.quantity -= 1;
    },
    pizzaDecrement: (state)=>{
        state.cartItems.pizza.quantity -= 1;
    },
    burgerDecrement: (state)=>{
        state.cartItems.burger.quantity -= 1;
    },
    daalMakhniDecrement: (state)=>{
        state.cartItems.daalMakhni.quantity -= 1;
    },
    shahiPaneerDecrement: (state)=>{
        state.cartItems.shahiPaneer.quantity -= 1;
    },
    butterNaanDecrement: (state)=>{
        state.cartItems.butterNaan.quantity -= 1;
    },

    calculatePrice: (state)=>{
        state.subTotal = state.cartItems.biryani.price*state.cartItems.biryani.quantity + 
                            state.cartItems.pizza.price*state.cartItems.pizza.quantity + 
                            state.cartItems.burger.price*state.cartItems.burger.quantity + 
                            state.cartItems.daalMakhni.price*state.cartItems.daalMakhni.quantity + 
                            state.cartItems.shahiPaneer.price*state.cartItems.shahiPaneer.quantity + 
                            state.cartItems.butterNaan.price*state.cartItems.butterNaan.quantity;

        state.tax = Math.floor(state.subTotal * 0.18);
        state.deliveryCharges = (state.subTotal >= 200 || state.subTotal === 0) ? 0 : 30;
        state.total = state.subTotal + state.tax + state.deliveryCharges;
    },

    emptyState: (state)=>{
        state.cartItems = {
            biryani:{
                quantity:0,
                price: 250,
            },
            pizza:{
                quantity:0,
                price:200,
            },
            burger:{
                quantity:0,
                price:100,
            },
            daalMakhni:{
                quantity:0,
                price:150,
            },
            shahiPaneer:{
                quantity:0,
                price:150,
            },
            butterNaan:{
                quantity:0,
                price:25,
            },
        }
        state.subTotal = 0;
        state.deliveryCharges = 0;
        state.tax = 0;
        state.total = 0;
    },

    addShippingInfo: (state,action)=>{
        state.shippingInfo={
            hNo:action.payload.hNo,
            address:action.payload.address,
            pinCode:action.payload.pinCode,
            phoneNo:action.payload.phoneNo,
        }
    }
});
