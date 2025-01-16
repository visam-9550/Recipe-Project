import styled from "styled-components"

export const FavouriteRecipesContainer = styled.div`
    width: 100vw;
    min-height: 100vh;
    padding-bottom: 40px;
    background-color: rgba(34, 56, 78, 98);
   
`
export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 40px;
    @media screen and (max-width: 576px){
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    @media screen and (min-width: 767px) and (max-width: 991px){
    
    }
`
export const RecipeItemcontainer = styled.div`
    background-color: white;
    width: 20%;
    box-shadow: 0px 0px 10px 10px ${(props) => props.backgroundColor};
    border-radius: 7px;
    margin: 10px;
    @media screen and (max-width: 576px){
        width: 70%;
    }
    @media screen and (max-width: 767px) and (min-width: 578px){
        width: 40%;
    }
    @media screen and (max-width: 991px) and (min-width: 768px){
        width: 38%;
    }
`
export const RecipeImage = styled.img`
    width: 100%;
    height: 200px;
    background-size: cover;
    border-radius: 9px;
`
export const RecipeTitle = styled.p`
    font-weight: 700;
    font-size: 24px;
    font-family: Roboto;
    color: black;
    text-align: center;
    margin-bottom: 30px;
`
export const RecipeInfoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    align-items: center;
    background-color: ${(props) => props.backgroundColor || "#000000"};
    bottom: 0;
`
export const FavouriteIcon = styled.p`
    font-weight: 700;
    font-size: 20px;
    font-family: Roboto;
    color: white;
`
export const GetMoreButton = styled.button`
    font-weight: 500;
    font-size: 12px;
    font-family: Roboto;
    color: white;
    background-color: blue;
    border-radius: 10px;
`
export const DeleteIcon = styled.p`
    font-weight: 700;
    font-size: 20px;
    font-family: Roboto;
    color: white;
`
export const EmptyDataHeading = styled.h1`
    font-weight: 700;
    font-family: Roboto;
    font-size: 22px;
    color: black;
`