import ClassesNav from '../Utils/navbar.module.css';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import {FaTimes, FaBars} from 'react-icons/fa';


const Navbar = () => {
    const [clicked, setClicked] = useState(false)
    const handlerClick = () => {
        setClicked(!clicked);
    }
    
    return (
        <div className = {ClassesNav.container}>
            <div className={ClassesNav.logo}>
               <NavLink to = "/" activeStyle = {{textDecoration: "none"}}> <h1>GreenVille<span>.com</span></h1></NavLink>
            </div>
            <div className = {ClassesNav.menu_icon} onClick = {handlerClick}>
                <i>{clicked? <FaTimes className = {ClassesNav.fas_times}/> : <FaBars className = {ClassesNav.fas_bars}/>}</i>
            </div>
            <ul className={clicked ? ClassesNav.menu_list: [ClassesNav.menu_list, ClassesNav.close].join(' ')}>
                <li><NavLink exact activeClassName = "active" to = "/" activeStyle = {{color: 'red'}} >Home</NavLink></li>
                <li><NavLink activeClassName = "active" to = "/signup" activeStyle = {{color: 'red'}}>Register</NavLink></li>
                <li><NavLink activeClassName = "active" to = "/login" activeStyle = {{color: 'red'}}>Login</NavLink></li>
            </ul>
        </div>
    );
}
 
export default Navbar;