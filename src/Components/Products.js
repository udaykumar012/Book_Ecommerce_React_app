import React from "react";
import './Products.css'
import DATA from "../DATA/data";
import {NavLink} from 'react-router-dom'
const Products =()=>{
    const  book=(item)=>{
        return (
            <div class="card"  key={item.title} style={{width: "18rem"} }>
            <img src={item.img} style={{width: "90%" ,height: "250px"}} class="card-img-top" alt={item.title}/>
            <div class="card-body">
                <h5 class="card-title">{item.title}</h5>
                <p class="card-text">Author Name: {item.author}</p>
                <NavLink to={`/products/${item.title}`} className="btn btn-primary">Buy Book</NavLink>
            </div>
            </div>
        )
    }
    return (
        <>
            <h3 align="center">Products</h3>
            <hr/>
            <div className="container">
                <div className="row">
                   {DATA.map(book)}
                </div>
            </div>
        </>
    )
}

export default Products;