import { useState } from "react"; 

const ItemCount = (props) => {
    const [count, setCount] = useState(0)
    console.log ('render count')

    const decrement = () => {
        if (count > 0) 
        setCount(count => count - 1)
    } 

    const increment = () => {
        if (count < 10)
        setCount(count => count + 1) 
    }
return (
    <div>
        <h1>{count}</h1>
        <button onClick={decrement}>Decrementar</button>
        <button onClick={increment}>Incrementar</button>
    </div>
)    
}

export default ItemCount;