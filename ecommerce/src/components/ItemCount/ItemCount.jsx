import { useState } from "react"; 

const ItemCount = ({Initial=1,stock,onadd}) => {
    const [count, setCount] = useState(Initial)
    console.log ('render count')

    const decrement = () => {
        if (count > 1) 
        setCount(count => count - 1)
    } 

    const increment = () => {
        if (count < stock)
        setCount(count => count + 1) 
    }
return (
    <art>
        <h1>{count}</h1>
        <button onClick={decrement}>-</button>
        <button onClick={()=> onadd(count)}>Agregar a carrito</button>
        <button onClick={increment}>+</button>
    </art>
)    
}

export default ItemCount