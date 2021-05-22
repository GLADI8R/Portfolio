import { Fragment } from "react";
import { Link } from 'react-router-dom';

// import { Nav, Navbar } from 'react-bootstrap';
import'./Nav.scss';

const NavBar = () => {
    return(
        <Fragment>
            {/* <Navbar className={classes.navbar} expand="md">
                <Navbar.Brand className={ classes.textWhite }>
                    Danish Mehmuda
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item> 
                        <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar> */}
            <div className="navbar">
                <div className="navbarbrand textWhite">Danish Mehmuda</div>
                <div className="nav">
                    <Link className="nav-item textWhite" to="/">Home</Link>
                    <Link className="nav-item textWhite" to="/about">About</Link>
                    <Link className="nav-item textWhite" to="/project">Project</Link>
                </div>
            </div>
        </Fragment>
    );
};

export default NavBar;