import React from "react";
import './Header.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  { faBars } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

import { useSelector } from "react-redux";

const CartBtn=()=>{
  const state=useSelector((state)=>state.addCartItem)
  return(
    <>
      <li class="nav-item">
          <NavLink className="btn btn-outline-success" to="/cart">Cart({state.length})</NavLink>
      </li>
    </>
  )
}
const Header =()=>{
    return (
       <>
        <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
  <NavLink id="title" to="/"><b>eCommerce Site</b></NavLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<div id="Toggler"><FontAwesomeIcon icon={faBars}/></div>
    </button>
    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <NavLink className="btn btn-outline-success" to="/">Home</NavLink>
        </li>
        <li class="nav-item">
          <NavLink className="btn btn-outline-success" to="/myOrders">My-Orders</NavLink>
        </li>
      <CartBtn/>
      </ul>
    </div>
    
  </div>
</nav>
       </>
    )
}

export default Header;