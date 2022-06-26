//what actions need to perform

export const addCartItem=(product)=>{
    return{
        type:"ADDITEM",
        payload:product
    }
}
export const delCartItem=(product)=>{
    return{
        type:"DELETEITEM",
        payload:product
    }
}
export const myOrderItem=(product)=>{
    return{
        type:"MYORDER",
        payload:product
    }
}