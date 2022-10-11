import Swal from "sweetalert2";
import { createContext, useContext, useState } from "react";

export const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])

    const addToCart = (newItem) => {
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
            setCartList([...cartList, newItem])
            Swal.fire({
                title: 'Added to cart!',
                text: `${newItem.title}`,
                imageUrl: `${newItem.pictureURL}`,
                imageWidth: 200,
                background: '#f5f5dc',
                imageAlt: 'Product image',
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

    return (
        <CartContext.Provider value={{cartList, addToCart, removeList, deleteItem}}>
            {children}
        </CartContext.Provider>
    )

}

export default CartContextProvider;