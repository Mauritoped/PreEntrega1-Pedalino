import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import cart from './assets/Carrito1.png'
import { Link } from 'react-router-dom'
import classes from './CartWidget.module.css' // Importa tus estilos CSS desde un archivo externo

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)

    return (
        <Link to={'/cart'} className={classes.cartContainer}> {/* Usa una clase CSS para el contenedor del carrito */}
            <img src={cart} alt="Imagen de carrito" className={classes.cartIcon} /> {/* Usa una clase CSS para el icono del carrito */}
            <span className={classes.quantity}>{totalQuantity}</span> {/* Usa una clase CSS para el número de artículos */}
        </Link>
    )
}

export default CartWidget
