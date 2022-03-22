import React, { Component } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { MenuItems } from './MenuItems';


class Navbar extends Component {
    // Handles toggling between two states of an item
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    // Handles the Navbar menu functions when window is below a certain width
    render() {
        return(
            <nav className="navbar-items">
                <FontAwesomeIcon className="navbar-logo" icon={faSun} size='2x' />
                    <i className="navbar-name" >S.K.B.</i>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url} onClick={this.handleClick}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar
