import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CartWidget } from './';

import 'bulma/css/bulma.min.css';
import '../../index.css';

export const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(prev => !prev);
    }

    return (
    <header>
        <nav className="navbar is-link p-2" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <NavLink className="navbar-item has-text-weight-bold is-size-4" to="/">
                    TechOasis
                </NavLink>

                <div
                    role="button"
                    className={`navbar-burger ${ isOpen ? 'is-active' : '' }`}
                    aria-label="menu"
                    aria-expanded="false"
                    data-target="navbarBasicExample"
                    onClick={ handleClick }
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </div>
            </div>

            <div id="navbarBasicExample" className={`navbar-menu ${ isOpen ? 'is-active' : '' }`}>
                <div className="navbar-start">
                    <NavLink className="navbar-item" to="/">
                        Home
                    </NavLink>
                </div>

                <div className="navbar-end">
                    <CartWidget />

                    <div className="navbar-item pt-0">
                        <div className="buttons">
                            <NavLink
                                className="button is-link is-fullwidth-mobile mb-2-mobile mr-0-mobile"
                                to="/register"
                            >
                                <strong>Sign up</strong>
                            </NavLink>

                            <NavLink
                                className="button is-light is-fullwidth-mobile"
                                to="/login"
                            >
                                Log in
                            </NavLink>
                        </div>
                    </div>
                </div>
                
            </div>
        </nav>
    </header>
    )
}
