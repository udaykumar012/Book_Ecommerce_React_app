const myOrderItem=[];
const myOrderItems=(state=myOrderItem,action)=>{
    switch(action.type){
        case "MYORDER": return [
            ...state,
            action.payload
        ]
        break;
        default : return state;
        break;
    }
}
export default myOrderItems;