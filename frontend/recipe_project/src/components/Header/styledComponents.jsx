import styled from 'styled-components'

export const HeaderContainer = styled.div`
    background-color: rgb(54, 28, 20);
    min-height: 60px;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

`

export const LogoHead = styled.img`
    background-color: white;
    border-radius: 50%;
    height: 50px;
    width: 70px;
    font-size: 14px;
    margin-left: 30px;
`

export const NavContainer = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 50%;
    @media screen and (max-width: 767px){
        display: none;
    }
`
export const MenuIconContainer = styled.div`
    margin-right: 30px;
    @media screen and (min-width: 767px){
        display: none;
    }
`
export const MenuContainer = styled.div`
    background-color: rgba(23, 34, 45, 56);
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
export const NavItem = styled.p`
    font-family: Roboto;
    color: white;
    font-weight: 700;
    cursor: pointer;
`
export const MenuNavItem = styled.p`
    font-family: Roboto;
    color: white;
    font-weight: 500;
    cursor: pointer;
`