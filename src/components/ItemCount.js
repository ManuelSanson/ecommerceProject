import { useState } from "react";
import "./ItemCount.css"

const ItemCount = (() => {
    const [count, setCount] = useState(1); 

    const Add = (() => {
        //agregar condicional stock
        // if (stock > count) {
        //     setCount(count + 1);    
        // }
        setCount(count + 1);
    })

    const Delete = (() => {
        if (count > 1) {
            setCount(count - 1);
        }
    })

    return (
        <div className="counter">
            <button onClick={Delete}>-</button>
            <h5>{count}</h5>
            <button onClick={Add}>+</button>
        </div>
    )
})

export default ItemCount;