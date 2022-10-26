import Swal from "sweetalert2";
import { createContext, useContext, useState } from "react";

export const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])

    const isInCart = (id) => cartList.some((item) => item.id === id);
    
    const addToCart = (newItem, quantity) => {
        if (!isInCart(newItem.id)) {
            setCartList([...cartList, {...newItem, quantity}])
            Swal.fire({
                title: 'Added to cart!',
                text: `${newItem.title}`,
                imageUrl: `${newItem.pictureURL}`,
                imageWidth: 200,
                background: '#f5f5dc',
                imageAlt: 'Product image',
                confirmButtonColor: '#000000',
            })            
            sessionStorage.setItem('storedCartList', JSON.stringify([...cartList, {...newItem, quantity}]))
        } else {
            const itemIndex = cartList.findIndex((item) => item.id === newItem.id);
            const itemDraft = {...cartList[itemIndex]};
            itemDraft.quantity = itemDraft.quantity + quantity;

            const cartDraft = [...cartList];
            cartDraft[itemIndex] = itemDraft;
            setCartList(cartDraft);
            Swal.fire({
                title: 'You updated the quantity!',
                text: `${newItem.title}`,
                imageUrl: `${newItem.pictureURL}`,
                imageWidth: 200,
                background: '#f5f5dc',
                imageAlt: 'Product image',
                confirmButtonColor: '#000000',
            })
            sessionStorage.setItem('storedCartList', JSON.stringify(cartDraft)) 
        }
    }

    const storedCartList = JSON.parse(sessionStorage.getItem('storedCartList'))

    const clearList = () => {
        setCartList([])
        sessionStorage.clear();
    }

    const removeItem = (id) => {
        const removeItem = storedCartList.filter((item) => item.id !== id);
        sessionStorage.setItem('storedCartList', JSON.stringify(removeItem))
        
        return setCartList(removeItem);
    }

    const itemsQuantity = () => {
        if (storedCartList) {
            return storedCartList.reduce((accumulator, currentValue) => accumulator + currentValue.quantity, 0);
        }
    }
    
    const totalPrice = () => {
        if (storedCartList) {
            return storedCartList.reduce((accumulator, item) => accumulator + (item.price * item.quantity), 0); 
        }
    }

    return (
        <CartContext.Provider value={{cartList, isInCart, addToCart, clearList, removeItem, itemsQuantity, totalPrice}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;