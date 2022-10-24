import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/Items/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/Items/ItemDetailContainer';
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout';
import CartContextProvider from './context/CartContext';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
      <BrowserRouter basename='/ecommerceProject'>
        <CartContextProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={'Welcome to the Rugby Corner!'} />} />
            <Route path='/category/:categoryId' element={<ItemListContainer/>} />
            <Route path='/item/:id' element={<ItemDetailContainer/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/checkout' element={<Checkout/>} />
          </Routes>
          <Footer />
        </CartContextProvider>
      </BrowserRouter>
  );
}

export default App;
