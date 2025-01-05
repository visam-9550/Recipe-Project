import styled from 'styled-components'

export const HeaderContainer = styled.div`
    background-color: rgba(148,182,192,255);
    min-height: 60px;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

`

export const LogoHead = styled.h1`
    background-color: white;
    border-radius: 50%;
    height: 30px;
    width: 30px;
    font-size: 14px;
    margin-left: 30px;
`

export const NavContainer = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 50%;
    @media (max-width: 576px){
        display: none;
    }
`
export const MenuIconContainer = styled.div`
    margin-right: 10px;
    @media (min-width: 576px){
        display: none;
    }
`
export const MenuContainer = styled.div`
    background-color: yellow;
    width: 30%;
    height: 50%;
    padding: 10px;
    position: absolute;
    top: 10;
    right: 0;
`
export const MenuNavContainer= styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export const NavItem = styled.a`
    font-family: Roboto;
    color: black;
    font-weight: 700;
`
export const MenuNavItem = styled.a`
    font-family: Roboto;
    color: black;
    font-weight: 500;
`