import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import jarLogo from '../../static/jarLogo.svg';
import NavbarDropdown from './NavbarDropdown/NavbarDropdown';

//TODO figure out how to close menu when it is open on small screen after
//clicking the home icon or a menu item
class Navbar extends React.Component {
    constructor(props) {
        super(props);
        // Bind methods
        this.renderNavbarDropdowns = this.renderNavbarDropdowns.bind(this);
        this.clickHandler = this.clickHandler.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
        this.toggleMobileMenuIsActive = this.toggleMobileMenuIsActive.bind(this);
        //Set State
        this.state = {mobileMenuIsActive: false};
        //Set shortcuts
        this.drinks = this.props.drinks
    }
    renderNavbarDropdowns() {
        return this.drinks.map((drink, index) => (
            <NavbarDropdown key={index} drink={drink} clickHandler={this.clickHandler}/>
        ));
    }

    clickHandler() {
        if(this.state.mobileMenuIsActive) {
            this.toggleMenu();
        }
    }

    toggleMenu() {
        let menu = document.getElementById('navbar-menu');
        let burger = document.getElementById('navbar-burger');
        menu.classList.toggle('is-active');
        burger.classList.toggle('is-active');
        this.toggleMobileMenuIsActive();
    }

    toggleMobileMenuIsActive() {
        //Don't forget parens on return section of the lambda function
        this.setState(() => ({mobileMenuIsActive: !this.state.mobileMenuIsActive}));
    }


    render() {
        return (
            <div className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
                <div className='container'>
                    <div className="navbar-brand">
                        <Link to='/' className="navbar-item" onClick={this.clickHandler}>
                            <img id="logo" src={jarLogo} alt="jar"></img>
                            <h3>LFL</h3>
                        </Link>
                        <button id='navbar-burger' className="button navbar-burger" onClick={this.toggleMenu}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                    <div id='navbar-menu' className="navbar-menu">
                        {this.renderNavbarDropdowns()}
                    </div>
                </div>
            </div>
        );
    }
}
export default Navbar;