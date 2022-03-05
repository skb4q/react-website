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
/*
function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 900) {
            setButton(false)
        } else {
            setButton(true)
        }
    };

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo'>
                        <FontAwesomeIcon icon={faSun} size='2xl'/>Sooriya Bounyalith
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i class={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
                            Projects
                            </Link>
                        </li>
                    </ul>
                    {button && <Button btnStyle='btn--outline'>CONTACT INFO</Button>}
                </div>
            </nav>
        </>
    )
}
*/
export default Navbar
