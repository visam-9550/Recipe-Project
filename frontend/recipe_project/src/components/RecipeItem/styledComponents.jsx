import styled from "styled-components"

export const RecipeContainer = styled.div`
    height: 100%;
    width: 20vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(166, 166, 97, 0.72);
    color: black;
    margin: 10px;
    @media (max-width: 577px){
        width: 75%;
        padding-bottom: 10px;
    }
`

export const RecipeImage = styled.img`
    @media (max-width: 577px){
        height: 100px;
        width: 100%;
        background-size: cover;
    }
        height: 150px;
        width: 100%;
        background-size: cover;
    
`
export const RecipeDetailsContainer = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0px;
`

export const TitleName = styled.h1`
    @media (max-width: 576px){
        font-size: 22px;
        margin-bottom: 0px;
        color: red;
    }
    margin-bottom: 0px;
    font-size: 20px;
`
export const Time = styled.p`
    @media (max-width: 576px){
        font-size: 16px;
    }
`
export const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 0px;
`
export const GetDetailsButton = styled.button`
    color: white;
    border-style: none;
    background-color:rgb(22, 49, 103);
    text-align: center;
    display:flex;
    font-size: 10px;
    align-items: center;
    margin-bottom: 10px;
    outline: none;
    border-width: 0px;
`