export default function Navbar() {
    return (
      <nav className="navbar">
        <img src="/logo.png" alt="Studio Solmae Logo" className="logo-img" style={{height: '80px'}}/>
        <ul className="nav-list">
          <li><a href="#about">About</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    );
  }
  