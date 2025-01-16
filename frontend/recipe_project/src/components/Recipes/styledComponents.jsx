import styled from "styled-components";
export const RecipesContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    
`
export const Paginationcontainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`
export const DecreseButton = styled.button`
    width: 40px;
    height: 30px;
    
`
export const IncreseButton = styled.button`
     width: 40px;
    height: 30px;
`
export const PageNumber = styled.p`
    font-weight: bold;
    margin-left: 15px;
    margin-right: 15px;
    font-size: 18px;
    color: black;
`
export const Container = styled.div`
    display: flex;
    @media screen and (max-width: 576px){
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    @media screen and (max-width: 767px) and (min-width: 578px){
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    }
    @media screen and (max-width: 991px) and (min-width: 767px){
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    }
    
`