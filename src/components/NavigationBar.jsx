import "./navigation-bar.scss"
import { Link, NavLink } from "react-router-dom";
import logo1 from "../img/avon-logo-grad.png"
import logo2 from "../img/text.png"
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from  "@fortawesome/free-solid-svg-icons"
import { useLocation } from 'react-router-dom';

const NavigationBar = () => {
  const [activeMenu, setActiveMenu] = useState(false)
const location = useLocation()


useEffect(() => {
  setActiveMenu(false)
}, [location])

  return (
    <header className="header">
      <button onClick={() => setActiveMenu(!activeMenu)}>
      <FontAwesomeIcon icon={faBars}/>
      MENU
      </button>
        <Link className="logo" to="/"><img src={logo1} alt="avon-assoiciate-logo" /><img src={logo2} alt="avon-assoiciate-logo" className="associate"/></Link>
      <nav className={`${activeMenu ? "active-link-container link-container" : "link-container"}`}>
        <NavLink to="/" className={({isActive}) => {return isActive ? "active-link" : ""}}>Почетна</NavLink>
        <NavLink to="/about" className={({isActive}) => {return isActive ? "active-link" : ""}}>За Авон</NavLink>
        <NavLink to="/register" className={({isActive}) => {return isActive ? "active-link" : ""}}>Зачлени се</NavLink>
        <NavLink to="/brochure" className={({isActive}) => {return isActive ? "active-link" : ""}}>Брошура</NavLink>
        <NavLink to="/new-products" className={({isActive}) => {return isActive ? "active-link" : ""}}>Нови Производи</NavLink>
      </nav>
    </header>
  )
}

export default NavigationBar