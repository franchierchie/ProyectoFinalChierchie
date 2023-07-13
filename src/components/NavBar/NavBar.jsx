import { CartWidget } from './';

import 'bulma/css/bulma.min.css';
import '../../index.css';

export const NavBar = () => {

    return (
    <header>
        <nav className="navbar is-link p-2" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item has-text-weight-bold is-size-4" href="./">
                    TechOasis
                </a>

                <div
                    role="button"
                    className="navbar-burger" // is-active
                    aria-label="menu"
                    aria-expanded="false"
                    data-target="navbarBasicExample"
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </div>
            </div>

            <div id="navbarBasicExample" className="navbar-menu"> {/* is-active */}
                <div className="navbar-start">
                    <a className="navbar-item">
                        Home
                    </a>

                    <a className="navbar-item">
                        Products
                    </a>
                </div>

                <div className="navbar-end">
                    <CartWidget amount={ 4 } />

                    <div className="navbar-item">
                        <div className="buttons">
                            <a className="button is-link">
                                <strong>Sign up</strong>
                            </a>
                            <a className="button is-light">
                                Log in
                            </a>
                        </div>
                    </div>
                </div>
                
            </div>
        </nav>
    </header>
    )
}
