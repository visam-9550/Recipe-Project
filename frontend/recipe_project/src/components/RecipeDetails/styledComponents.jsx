import styled from "styled-components";

export const RecipeDetailsContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgb(248, 224, 165);
    color: black;
`
export const RecipeDetailsTopContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    @media screen and (max-width: 767px){
        display: flex;
        flex-direction: column;
    }
`
export const RecipeImage = styled.img`
    background-size: cover;
    height: 250px;
    width: 450px;
    margin: 20px;
    box-shadow: 0px 0px 10px 10px;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
    @media screen and (max-width: 576px){
        height: 200px;
        width: 90%;
    }
    @media screen and (max-width: 767px) and (min-width: 577px){
        height: 200px;
        width: 320px;
    }
`
export const RecipeDetailsTopDescrationContainer = styled.div`
    display: flex;
    flex-direction: column;
    // align-items: center;
    margin-left: 30px;
`
export const RecipeTitle = styled.h1`
    font-weight: 700;
    font-size: 24px;
    font-family: Caveat;
    text-decoration: underline;
`
export const RecipeDuration = styled.p`
    font-weight: 700;
    font-size: 14px;
    margin-bottom: 0px;
`
export const RecipeIngredients = styled.p`
    font-weight: 700;
    font-size: 16px;
    font-family: Roboto;
    margin-top: 0px;
`
export const Span = styled.span`
    font-weight: 700;
    font-size: 16px;
    font-family: Roboto;
    color: grey;
`
export const HRLine = styled.hr`
    border: solid 1px grey;
    width: 90%;
`
export const RecipeDetailsTopProcessContainer = styled.div`
    margin-left: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
export const ProcessHeading = styled.h3`
    font-family: Roboto;
    text-decoration: underline;
`
export const Process = styled.p`
    font-size: 16px;
    font-weight: 700;
    width: 80%;
    
`
