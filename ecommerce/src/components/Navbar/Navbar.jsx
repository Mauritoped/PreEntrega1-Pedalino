import './Navbar.module.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <header style={{display:'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h1>Mora Equipamientos</h1>
      <nav>
        <Link to='/category/cocinas'>Cocinas</Link>
        <Link to='/category/campanas'>Campanas</Link>
        <Link to='/category/anafes'>Anafes</Link>
      </nav>
      <CartWidget/>
    </header>
  );
}

export default Navbar;