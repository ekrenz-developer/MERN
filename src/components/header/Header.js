import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import Toggle from 'react-bootstrap/DropdownToggle';
import Menu from 'react-bootstrap/DropdownMenu';
import Item from 'react-bootstrap/Dropdown';
import Navbar from 'react-bootstrap/Navbar';

/*
                <nav className="navbar navbar-light navbar-expand-sm fixed-top bg-light menu">
                    <div className="navbar-nav">
                        <div className="nav-item dropdown">
                            <div className="nav-link dropdown-toggle">
                                User
                            </div>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" id="navbarDropdownMenuLink">
                                <Link className="dropdown-item" to="/">Home</Link>
                            </div>
                        </div>
                        
                    </div>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <Dropdown>
                        <Toggle variant="success" id="dropdown-basic">
                            Dropdown Button
                        </Toggle>
                        <Menu>
                            <Item href="#/action-1">Action</Item>
                            <Item href="#/action-2">Another action</Item>
                            <Item href="#/action-3">Something else</Item>
                        </Menu>
                    </Dropdown>
                </nav>
*/

class Header extends React.Component {
    render(){
        return (
            <div className="header-container">
                <Navbar fixed="top" bg="light" variant="light">
                    <Dropdown drop="down">
                        <Toggle variant="light">
                            <img src={require('../../assets/user.png')} alt="" className="img-user"/>
                        </Toggle>
                        <Menu>
                            <Item>
                                <Link to="/signup">Create Account</Link>
                            </Item>
                            <Item>
                                <Link to="/login">Log in</Link>
                            </Item>                                                        
                        </Menu>
                    </Dropdown>                  
                </Navbar>
                <hr/>
                <hr/>
                <div className="image-containerr">
                    <img src={require('../../assets/MYtineraryLogo.png')} className="logo" alt="logo" />
                </div>
            </div>
        )
    }
}

export default Header;