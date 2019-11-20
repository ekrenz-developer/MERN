import React from 'react';
import './TopBar.css';
import { Link } from 'react-router-dom';
import { Navbar , Popover , OverlayTrigger , Nav } from 'react-bootstrap';

class TopBar extends React.Component {
    render(){
        const popover = (
            <Popover id="popover-basic">
                <Popover.Content>
                    <div className="submenu-container">
                        <Link to="/signup">Create Account</Link>
                        <Link to="/login">Log in</Link>
                    </div>
                </Popover.Content>
            </Popover>
        );

        return (
            <div className="topbar-container">
                <Navbar collapseOnSelect expand="lg" fixed="top" bg="light" variant="light" className="navbar-container">
                    <OverlayTrigger placement="bottom" overlay={popover} delay={{ show: 250, hide: 300 }}>
                        <img src={require('../../assets/user.png')} alt="" className="img-user"/>
                    </OverlayTrigger>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Link to="/cities">Cities</Link>
                        {/*
                        <Nav className="mr-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                        </Nav> 
                        */}                       
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default TopBar;