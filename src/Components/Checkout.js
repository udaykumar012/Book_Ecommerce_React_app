import React from "react";
import './Checkout.css'
import {useSelector} from 'react-redux';
import { useDispatch } from "react-redux/es/exports";
import { myOrderItem} from '../redux/actions/index';
import { delCartItem } from "../redux/actions/index";
import { useState } from "react";
import {NavLink} from 'react-router-dom';
import { useParams } from "react-router";
import DATA from "../DATA/data";

function Checkout(){
    const booktitle=useParams();
   /// .log(booktitle.title===undefined);
    let [flag,setFlag]=useState(0);
    let [address,setAddress]=useState("");
    let state=[];
    var temp=useSelector((state)=>state.addCartItem);
    state=temp.map(val=>{
        return Object.assign({}, val);
        //state.push(ob);
    })
    //.log(state)
    if(booktitle.title!==undefined){
        const prod=DATA.filter(x=>{
            if(x.title===booktitle.title){
                 //.log(booktitle)
                 return true;
            }
         })
         temp= Object.assign({}, prod[0]);
         //.log(temp)
        state=[temp];
       // .log(state)
    }
    let cost=0;
   const ItemList=(item,ind)=>{
        cost+=item.price;
        return(
            <>
                
                <tr>
                    <th scope="row" style={{padding:"6px"}}>{ind+1}</th>
                    <td >{item.title}</td>
                    <td> ₹{item.price}</td>
                   
                    </tr>
            </>
        )
   }
   const current = new Date();
   const dispatch=useDispatch();
    const checkoutHandler=(items)=>{      
        if(!flag){
          alert("please save your address");
          return false;
        }
        else{
            items.map((item)=>{
                let time = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
                const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()} at ${time}`;
                item['orderdate']=date;
                dispatch(myOrderItem(item))
            })  
            if(booktitle.title===undefined){
                for(let i=0;i<temp.length;i++){
                    dispatch(delCartItem(temp[i]))
                }
            }
        }  
       
    }
    function getAddress(){

        var deliv=document.Billing.name.value.trim()+"\n"+document.Billing.email.value.trim()+"\n";
        deliv+=document.Billing.phn.value.trim()+"\n"+document.Billing.address.value.trim()+"\n";
        deliv+=document.Billing.country.value.trim()+"\n"+document.Billing.state.value.trim()+"\n";
        deliv+=document.Billing.Zip.value.trim();
        if(document.Billing.name.value.trim()&&document.Billing.email.value.trim()&&
        document.Billing.phn.value.trim()&&document.Billing.address.value.trim()&&
            document.Billing.country.value.trim()&&document.Billing.state.value.trim()&&
        document.Billing.Zip.value.trim()){
            setFlag(1);
            setAddress(deliv) 
            return true;
        }
        else{
            setFlag(0);
            alert("please complete address field!!!");
            setAddress("");
            return false;
        }
    }
    
    
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-md-6 ">
                    <h3 align="center">Billing Address</h3><br/>
                    <form name="Billing">
                    <div className="container" >
                        <div className="row" >
                            <div className="col-md-12" >
                            <h6>Name</h6>
                            <input type="text" name="name"required/>
                            </div>
                            <div className="col-md-12">
                            <h6>Email (optional) </h6>
                            <input type="email"  name="email" placeholder="you@example.com" />
                            </div>
                            <div className="col-md-12" >
                            <h6>Phone Number</h6>
                            <input type="text" name="phn" placeholder="+91 9x37xxxxxx" required/>
                            </div>
                            <div className="col-md-12" >
                            <h6>Address</h6>
                            <input type="text" name="address"required/>
                            </div>
                            <div className="col-md-12" >
                            <h6>Country</h6>
                            <input type="text" name="country"  required/>
                            </div>
                            <div className="col-md-12" >
                            <h6>State</h6>
                            <input type="text" name="state"required/>
                            </div>
                            <div className="col-md-12" >
                            <h6>Zip</h6>
                            <input type="text" name="Zip"required/>
                            </div>
                          <button type="button" className="btn btn-primary" onClick={()=>getAddress()}> Save Address</button>
                          <NavLink to={flag ? "/orderaccepted" : "/checkout"} onClick={()=>checkoutHandler(state)} className="btn btn-primary">Checkout</NavLink>
                          <NavLink to="/home"  className="btn btn-primary"  >Cancel</NavLink>
                        </div>
                    </div>
                    </form>
                </div>
                <div className="col-md-6 ">
                <h3 align="center">Your Items</h3><br/>
                <table class="table table-active" >
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name of Book</th>
                        <th scope="col">Price</th>
                        
                        </tr>
                    </thead>
                    {state.map(ItemList)}
                    <tr>
                        <th colspan="2">Total Cost</th>
                        <th scope="col">₹{cost}</th>
                    </tr>
                </table>
                <hr/>
                <h5>Delivery Address </h5><br/>
                   <textarea id="SavedAddress" name="Address" rows="8" cols="40" value={address} disabled></textarea>
                </div>
                
            </div>
            
        </div>
        
        </>
    )
}

export default Checkout;