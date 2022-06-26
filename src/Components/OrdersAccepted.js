import {useSelector} from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import "./OrderAccepted.css";
function OrderAccepted(){
    let Ord=useSelector((state)=>state.myOrderItem);
    console.log(Ord);
    return(
        <>
        <h1>Order Placed Sucessfully</h1>
        <FontAwesomeIcon icon={faCheckCircle} />
        </>
    )
}
export default OrderAccepted;