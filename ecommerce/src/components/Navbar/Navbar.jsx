import CartWidget from '../CartWidget/CartWidget'
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px', backgroundColor: '#f8f9fa', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
      <h1>Mora Equipamientos</h1>
      <nav style={{ display: 'flex', gap: '20px' }}>
        <Link to='/category/Cocinas' style={{ textDecoration: 'none', color: '#333' }}>Cocinas</Link>
        <Link to='/category/Campanas' style={{ textDecoration: 'none', color: '#333' }}>Campanas</Link>
        <Link to='/category/Anafes' style={{ textDecoration: 'none', color: '#333' }}>Anafes</Link>
      </nav>
      <CartWidget/>
    </header>
  );
}

export default Navbar;