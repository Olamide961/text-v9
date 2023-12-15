import React, { useState, useEffect } from 'react'
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 900) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);


    
    return (
        <>
        <nav className="navbar">
            <div className="navbar-container container">
                <div className="menu-icon" onClick={handleClick}>
                    <FontAwesomeIcon icon={click ? faTimes : faBars} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-items">
                        <a href="/" className="nav-links" onclick={closeMobileMenu}>
                            Home
                        </a>  
                    </li>
                    <li className="nav-items">
                        <a href="./gallery" className="nav-links"  onclick={closeMobileMenu}>
                            gallery
                        </a>
                    </li>
                    <li className="nav-items">
                        <a href="./project" className="nav-links" onclick={closeMobileMenu}>
                            project
                        </a>
                    </li>
                    <li className="nav-items">
                        <a href="./certifiactions" className="nav-links" onclick={closeMobileMenu}>
                            certifiactions
                        </a>
                    </li>
                    <li className="nav-items">
                        <a href="./contacts" className="nav-links" onclick={closeMobileMenu}>
                            contacts
                        </a>
                    </li>
                </ul>    
            </div>
        </nav>
        </>
    );
}

export default Navbar;