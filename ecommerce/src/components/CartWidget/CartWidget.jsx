import cart from './assets/Carrito1.png';

const CartWidget = () => {
    return (
        <button>
          <img src={cart} alt="Imagen de carrito" style={{ width: '25px', height: '25px' }} />
          0
        </button>
    )
}

export default CartWidget;