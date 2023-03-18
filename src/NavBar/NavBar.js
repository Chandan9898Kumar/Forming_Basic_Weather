import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbarStyle.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="menu-icon" onClick={handleShowNavbar}></div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <NavLink to="/normalWeather">Normal Weather</NavLink>
            </li>
            <li>
              <NavLink to="/newWeather">New Weather</NavLink>
            </li>
            <li>
              <NavLink to="/finalWeather">Styled WeatherApp</NavLink>
            </li>
            <li>
              <NavLink to="/" className='HomeClass'>Home</NavLink>
            </li> 
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
