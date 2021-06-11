import React from 'react';
import { FaBars } from 'react-icons/fa';
import {
    Nav,
    NavLogo,
    NavbarContainer,
    NavMenu,
    NavItem,
    NavLinks,
    MobileIcon,
    NavBtn,
    NavBtnLink
} from './NavbarElements'

import { animateScroll as scroll } from 'react-scroll';

const Navbar = ({ toggle }) => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome}>dolla</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about"
                            smooth={true} duration={500} spy={true} exact='true' offset={-80}>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="discover"
                            smooth={true} duration={500} spy={true} exact='true' offset={-80}>Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services"
                            smooth={true} duration={500} spy={true} exact='true' offset={-80}>Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="signup"
                            smooth={true} duration={500} spy={true} exact='true' offset={-80} >Sign Up</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/signin"
                        smooth={true} duration={500} spy={true} exact='true' offset={-80} >SignIn</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
