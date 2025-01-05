import React from 'react'
import LogoutPage from '../LogoutPage/logoutPage.jsx'
import LoginPage from '../loginpage/loginPage.jsx'
import {HeaderContainer, NavContainer, NavItem, LogoHead, MenuIconContainer, MenuContainer, MenuNavContainer, MenuNavItem} from "./styledComponents"
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { Link } from "react-router-dom";

function Header() {
  const [initialMenuState, setMenuState] = useState(false)
  const menu = () =>{
    setMenuState(!initialMenuState)
    console.log(initialMenuState)
    }
  return (
    <>
    <HeaderContainer>
      <LogoHead>Logo</LogoHead>
      <MenuIconContainer>
        <MenuIcon onClick = {menu}/>
      </MenuIconContainer>
      <NavContainer>
            <NavItem href = "#">Home</NavItem>
            <NavItem href = "#">My Recipes</NavItem>
            <NavItem href = "#">Favourites</NavItem>
            <NavItem href = "#">Login</NavItem>
      </NavContainer>
        {/* <LoginPage />
        <LogoutPage /> */}
    </HeaderContainer>
    {initialMenuState && 
        <MenuContainer>
          <MenuNavContainer>
            <Link to = "/">
              <MenuNavItem href = "#">Home</MenuNavItem>
            </Link>
            <MenuNavItem href = "#">My Recipes</MenuNavItem>
            <MenuNavItem href = "#">Favourites</MenuNavItem>
            <Link to = "/login">
            
            <MenuNavItem href = "#">Login</MenuNavItem>
            </Link>
          </MenuNavContainer>
        </MenuContainer>
    }
    </>
    
  )
}

export default Header