import styled from "styled-components"

export const RecipeContainer = styled.div`
    height: 100%;
    width: 20vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(110, 110, 66, 0.72);
    color: black;
    margin: 10px;
    @media screen and (max-width: 577px){
        width: 50vw;
        height: 50vh;
        padding-bottom: 10px;
    }
    @media screen and (max-width: 767px) and (min-width: 578px){
        width: 40vw;
        height: 50vh;
        padding-bottom: 10px;
    }
    @media screen and (max-width: 991px) and (min-width: 768px){
        width: 40vw;
        height: 50vh;
        padding-bottom: 10px;
    }
    &:hover{
        background-color: rgba(142, 142, 66, 0.72);
        box-shadow: 0px 0px 15px 7px;
    }
`
export const SpanElement = styled.span`
    font-weight: 500;
    color: black;
`
export const DeleteIcon = styled.p`
    cursor: pointer;
`
export const FavouriteIcon = styled.p`
    cursor: pointer;
    font-size: 22px;
`
export const RecipeImage = styled.img`
    @media (max-width: 577px){
        height: 140px;
        width: 100%;
        background-size: cover;
    }
        height: 150px;
        width: 100%;
        background-size: cover;
        opacity: 0.7;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        &:hover{
            opacity: 1;
        }
    @media screen and (max-width: 991px) and (min-width: 767px){
        height: 170px;
    }
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