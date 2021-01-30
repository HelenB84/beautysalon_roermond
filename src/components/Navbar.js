import React, {useState} from 'react';
import { Link} from "react-router-dom";
import './Navbar.css';
import NavbarDropdown from './NavbarDropdown';
import logo from '../assets/logo.jpg'
import AppointButton from "./AppointButton";

export default function Navbar(){
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = ()=> setClick(!click)
    const closeMobileMenu =()=> setClick(false);

    const onMouseEnter =()=>{
        if(window.innerWidth < 960) {
            setDropdown(false)
        } else{
            setDropdown(true)
        }
    }

    const onMouseLeave =()=>{
        if(window.innerWidth < 960) {
            setDropdown(false)
        } else{
            setDropdown(false)
        }
    }

    return(
        <>
            <nav className='navbar'>
                <Link to='/'>
                    <img src={logo} alt='Logo' className='navbar-logo'/>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times':'fas fa-bars'}/>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                    >
                        <Link to='/behandelingen' className='nav-links' onClick={closeMobileMenu}>
                            Behandelingen <i className='fas fa-caret-down'/>
                        </Link>
                        {dropdown && <NavbarDropdown/>}
                    </li>
                    <li className='nav-item'>
                        <Link to='/over_mij' className='nav-links' onClick={closeMobileMenu}>
                            Over Mij
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                            Contact
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/cadeaubon' className='nav-links' onClick={closeMobileMenu}>
                            Cadeaubon
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/contact' className='nav-links-mobile' onClick={closeMobileMenu}>
                            Maak een afspraak
                        </Link>
                    </li>
                </ul>
                <AppointButton/>
            </nav>
        </>
    )
}

