import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Cart from './Components/Cart';
import Products from './Components/Products';
import { Routes, Route ,Navigate} from 'react-router-dom';
import ProductDetails from './Components/ProductDetails';
import Checkout from './Components/Checkout';
import OrderAccepted from './Components/OrdersAccepted';
import MyOrders from './Components/MyOrders';

function App() {
  return (
   <>
   <Header/>
   <div id="Main">
    <Routes>
      <Route path='/home'  element={<Home/>} />
      <Route path='/products/:title'  element={<ProductDetails/>} />
      <Route path='/checkout' element={<Checkout/>}/>
      <Route path='/checkout/:title'  element={<Checkout/>} />
      <Route path='/cart'  element={<Cart/>} />
      <Route path="/" element={<Home/>} />
      <Route path='/orderaccepted' element={<OrderAccepted/>} />
      <Route path='/myOrders' element={<MyOrders/>}/>
    </Routes>
    </div>
  
   </>
  );
}

export default App;
