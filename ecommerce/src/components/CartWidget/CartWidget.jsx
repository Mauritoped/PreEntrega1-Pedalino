import cart from './assets/Carrito1.png'

const CartWidget = () => {
    return (
        <button>
          <img src={cart} alt="Imagen de carrito" />
          0
        </button>
    )
}

export default CartWidget;
