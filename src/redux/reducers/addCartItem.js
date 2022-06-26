const addCartItem=[];
const addCartItems=(state=addCartItem,action)=>{
    //console.log(state)
    switch(action.type){
        case "ADDITEM" : return [
            ...state,
            action.payload
        ] 
        break;

        case "DELETEITEM" : 
            return state=state.filter((x,index)=>{

                const ind=state.indexOf(action.payload)
                console.log(action.payload)
                if(ind===index){
                    return false;
                }
                return true;
            })

        break;

        default : return state;
        break;
    }
}
export default addCartItems;