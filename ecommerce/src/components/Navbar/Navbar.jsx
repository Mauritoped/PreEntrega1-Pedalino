import './Navbar.module.css'

const Navbar = () => {
  return (
    <header>
      <h4>Mora</h4>
      <a className='btn btn-primary' href="#">Cocinas</a>
      <button>Campanas</button>
      <button>Anafes</button>
    </header>
  );
}

export default Navbar;