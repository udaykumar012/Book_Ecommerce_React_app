import React from "react";
import { useParams } from "react-router";
import DATA from "../DATA/data";
import "./ProductDetails.css"
import { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { NavLink } from "react-router-dom";
import { addCartItem , delCartItem} from '../redux/actions/index';

const ProductDetails =()=>{
    const booktitle=useParams();
    //console.log(booktitle)
    const prod=DATA.filter(x=>{
       if(x.title===booktitle.title){
            //console.log(booktitle)
            return true;
       }
    })
    //console.log(prod[0]);

    //storing usedispatch as variable 
    const dispatch=useDispatch();
    const [cartBtn,setCartBtn]=useState("Add to Cart");
    const cartHandler=(item)=>{

        console.log(cartBtn)
        
        if(cartBtn==="Add to Cart"){
            dispatch(addCartItem(item))
            setCartBtn("Remove from Cart")
        }
        else{
            dispatch(delCartItem(item))
            setCartBtn("Add to Cart");
        }
    }

    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col-md-6 d-flex justify-content-center">
                    <img src={prod[0].img} alt={prod[0].title} style={{width:'80%' , height:'300px'}}></img>
                </div>
                <div className="col-md-6 ">
                    <h4 style={{color:"green"}}>{prod[0].title}</h4>
                    <h6><u>Book Price :</u> ₹ {prod[0].price}</h6>
                    <h6><u>Author Name:</u> {prod[0].author}</h6>
                    <h6><u>Page Count :</u> {prod[0].pagecount}</h6>
                    <h6><u>ISBN :</u>  {prod[0].isbn}</h6> 
                    <button onClick={()=>cartHandler(prod[0])} className="btn btn-primary">{cartBtn}</button>
                    <NavLink to={`/checkout/${prod[0].title}`} className="btn btn-primary">Buy Now</NavLink>
                    <h6><u>Book Description:</u> {prod[0].desc}</h6>
                </div>
            </div>
            
        </div>
        </>
    )
}

export default ProductDetails;