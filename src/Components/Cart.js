import React from "react";

import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux/es/exports";
import {  delCartItem} from '../redux/actions/index'
import { NavLink } from "react-router-dom";

const Cart =()=>{
    const state=useSelector((state)=>state.addCartItem);
    const dispatch=useDispatch();
    const removeHandler=(item)=>{
        dispatch(delCartItem(item))
    }
    if(state.length===0){
        return(
            <>
            <h3>Your Cart is Empty!!!</h3>
            </>
        )
    }
    const cartItems=(item)=>{
        return(
            <>
                <div className="container" style={{margin :"13px"}}>
            <div className="row">
                <div className="col-md-6 d-flex justify-content-center">
                    <img src={item.img} alt={item.title} style={{width:'150px' , height:'200px'}}></img>
                </div>
                <div className="col-md-6 ">
                    <h5 style={{color:"green"}}>{item.title}</h5>
                    <h6><u>Author Name:</u> {item.author}</h6>
                    <h6><u>Book Price :</u> ₹ {item.price}</h6>
                   
                    <h6><u>ISBN :</u>  {item.isbn}</h6>
                    <button onClick={()=>removeHandler(item)} className="btn btn-primary" style={{width:"100px"}}>Remove</button>
                    <NavLink to={`/checkout/${item.title}`}  className="btn btn-primary" >Buy Now</NavLink>
                   
                </div>
                <hr style={{margin:"5px"}} />
            </div>
            
        </div>
            </>
        )
    }

    const checkout=()=>{
        return(
            <>
             <div className="container"  style={{margin :"13px"}}>
            <div className="row">
            <div className="col-md-6 "></div>
            <div className="col-md-6 ">
            <NavLink to="/checkout"  className="btn btn-primary" style={{width:"75%"}} >Proceed To Checkout</NavLink> 
            </div>
            </div>
            </div>
        </>
        );
    }
    return (
        <>
            <hr style={{margin:"5px"}} />
            {state.length!==0 && state.map(cartItems) }
            {state.length!==0 && checkout()}
        </>
    )
}

export default Cart;