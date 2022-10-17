import Swal from "sweetalert2";
import { createContext, useContext, useState } from "react";

export const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])

    const addToCart = (newItem, quantity) => {
        const isInCart = cartList.some((item) => item.id === newItem.id);
        if (isInCart) {
            Swal.fire({
                title: 'Oops!',
                text: 'You have already added this product',
                icon: 'error',
                background: '#f5f5dc',
                confirmButtonColor: '#000000',
                confirmButtonText: 'Ok'
            })
            return;
        } else {
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
        }
    }

    const removeList = () => {
        setCartList([])
    }

    const deleteItem = (id) => {
        const deleteItem = cartList.filter((item) => item.id !== id)
        return setCartList(deleteItem)
    }

    const calculateItemsQuantity = () => {
        const initialValue = 0;

        const quantityInCart = cartList.reduce(
        (accumulator, currentValue) => accumulator + currentValue.quantity,
        initialValue
        );
        console.log(quantityInCart);
        return quantityInCart;
        
    }

    return (
        <CartContext.Provider value={{cartList, addToCart, removeList, deleteItem, calculateItemsQuantity}}>
            {children}
        </CartContext.Provider>
    )

}

export default CartContextProvider;