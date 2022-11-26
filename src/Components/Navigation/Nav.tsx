import { Fragment } from "react";
import { Link } from 'react-router-dom';

import'./Nav.scss';
import '../../Sass/styles.scss';

const NavBar = () => {
    return(
        <Fragment>
            <nav className="navbar">
                <ul>
                    <li><Link className="nav-item textBlue" to="/">Home</Link></li>
                    <li><Link className="nav-item textBlue" to="/about">About</Link></li>
                    <li><Link className="nav-item textBlue" to="/project">Project</Link></li>
                </ul>
            </nav>
        </Fragment>
    );
};

export default NavBar;