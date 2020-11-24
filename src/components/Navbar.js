import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdFingerprint } from 'react-icons/md';
import { FaBars, FaTimes, FaCloud} from 'react-icons/fa';
import { Button } from './Button';
import './Navbar.css';
import { IconContext } from 'react-icons/lib'

function Navbar() {

    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)


    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton();
    }, []);


    window.addEventListener('resize', showButton)


    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className="navbar">
                    <div className="navbar-container container">
                        <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                            <FaCloud className='navbar-icon' />
                        Rayan Ahmedy
                   </Link>
                        <div className="menu-icon" onClick={handleClick} >
                            {click ? <FaTimes /> : <FaBars />}

                        </div>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className="nav-item">
                                <Link to="/" className='nav-links' onClick={closeMobileMenu}>
                                    Home
                            </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/work" className='nav-links' onClick={closeMobileMenu}>
                                    Work
                            </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className='nav-links' onClick={closeMobileMenu}>
                                    Contact
                            </Link>
                            </li>
                         
                        </ul>

                    </div>

                </div>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
