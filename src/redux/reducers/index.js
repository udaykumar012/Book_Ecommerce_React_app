// how action items need to work

import addCartItem from "./addCartItem";
import myOrderItem from "./myOrderItem";
import { combineReducers } from "redux";
const rootReducers=combineReducers({
    addCartItem,
    myOrderItem,
})
export default rootReducers;