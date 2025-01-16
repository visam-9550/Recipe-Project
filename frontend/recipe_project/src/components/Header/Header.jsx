import React from 'react'
import { useNavigate } from 'react-router-dom';
import Cookie from "js-cookie"
import {HeaderContainer, NavContainer, NavItem, LogoHead, MenuIconContainer, MenuContainer, MenuNavContainer, MenuNavItem} from "./styledComponents"
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { Link } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const [initialMenuState, setMenuState] = useState(false)
  const menu = () =>{
    setMenuState(!initialMenuState)
    console.log(initialMenuState)
    }
  const clickOnLogout = () =>{
    console.log(JSON.parse(Cookie.get("userDetails")))
    console.log(Cookie.get("userToken"))
    Cookie.remove("userToken")
    Cookie.remove("userDetails")
    navigate("/login")
  }
  return (
    <>
    <HeaderContainer>
      <LogoHead src = "https://files.oaiusercontent.com/file-1ssA6zeyGiWwZ9S6pjADA8?se=2025-01-10T16%3A35%3A22Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D37f45d3e-1034-4954-8bd5-c32f6fc8429b.webp&sig=cDArTUn2H3UekJrzxdXSsJNxFreyIg821OYqk8HHXz0%3D" />
      <MenuIconContainer>
        <MenuIcon onClick = {menu}/>
      </MenuIconContainer>
      <NavContainer>
            <Link to = "/">
              <NavItem>Home</NavItem>
            </Link>
            <Link to = "/myrecipes">
              <NavItem>My Recipes</NavItem>
            </Link>
            <Link to = "/favouriteRecipes">
            <NavItem >Favourites</NavItem>
            </Link>
            <Link to = "/ourMission">
              <NavItem>Our Mission</NavItem>
            </Link>
            <NavItem onClick = {clickOnLogout}>Logout</NavItem>
      </NavContainer>
    </HeaderContainer>
    {initialMenuState && 
        <MenuContainer>
          <MenuNavContainer>
            <Link to = "/">
              <MenuNavItem >Home</MenuNavItem>
            </Link>
            <Link to = "/myrecipes">
              <MenuNavItem >My Recipes</MenuNavItem>
            </Link>
            <Link to = "/favouriteRecipes">
              <MenuNavItem >Favourites</MenuNavItem>
            </Link>
            <Link to = "/ourMission">
              <MenuNavItem >Our Mission</MenuNavItem>
            </Link>
            <MenuNavItem onClick = {clickOnLogout}>Logout</MenuNavItem>
          </MenuNavContainer>
        </MenuContainer>
    }
    </>
    
  )
}

export default Header