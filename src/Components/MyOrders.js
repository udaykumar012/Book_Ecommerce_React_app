import React from "react";
import { useSelector } from "react-redux/es/exports";
import {  myOrderItem} from '../redux/actions/index'
function MyOrders(){
    const state=useSelector((state)=>state.myOrderItem);
    if(state.length===0){
        return(
            <>
                <h1>You haven't Order any Items!!!</h1>
            </>
        )
    }
    const orderItems=(items)=>{
        //console.log(items);
        return(
            <>
                <div class="order">
                    <nav class="py-2 bg-light border-bottom">
                        <div class="container d-flex flex-wrap">
                            <ul class="nav me-auto">
                                <li>Order placed: {items.orderdate}</li>
                            </ul>
                            <ul class="nav">
                                <li>Status: Delivered</li>
                            </ul>
                        </div>
                    </nav>
                    <header class="py-3 mb-4 border-bottom">
                    <div className="container">
            <div className="row">
                <div className="col-md-6 d-flex justify-content-center">
                    <img src={items.img} alt={items.title} style={{width:'150px' , height:'150px'}}></img>
                </div>
                <div className="col-md-6 ">
                    <h5 style={{color:"green"}}>{items.title}</h5>
                    <h6><u>Author Name:</u> {items.author}</h6>
                    <h6><u>Book Price :</u> ₹ {items.price}</h6>
                    
                   
                </div>
            </div>
            
        </div>
                    </header>
                </div>
            </>
        )
    }
    return(
        <>
          {state.map(orderItems)} 
        </>
    )
}
export default MyOrders;