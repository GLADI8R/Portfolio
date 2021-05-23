import { Fragment } from "react";
import { Link } from 'react-router-dom';

// import { Nav, Navbar } from 'react-bootstrap';
import'./Nav.scss';

const NavBar = () => {
    return(
        <Fragment>
            <nav className="navbar">
                <ul>
                    <li><Link className="nav-item textWhite" to="/">Home</Link></li>
                    <li><Link className="nav-item textWhite" to="/about">About</Link></li>
                    <li><Link className="nav-item textWhite" to="/project">Project</Link></li>
                </ul>
            </nav>
        </Fragment>
    );
};

export default NavBar;