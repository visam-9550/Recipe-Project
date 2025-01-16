import styled from "styled-components";

export const MyRecipeItemDetailContainer = styled.div`
    width: 90%;
    min-height: 11vh;
    background-color: rgb(100, 102, 90);
    display: flex;
    justify-content: flex-start;
    border-radius: 10px;
    margin: 10px;
    &:hover{
        background-color: rgb(106, 106, 84);
    }
`
export const RecipeImage = styled.img`
    width: 400px;
    min-height: 8vh;
    background-size: cover;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    opacity: 0.7;
    &:hover{
        opacity: 1;
    }
`
export const RecipeDetailsContainer = styled.div`
    margin-left: 20px;
    width: 100%;
`
export const HRLine = styled.hr`
    border: dashed black 1px;
    margin-left: 10px;
    margin-right: 10px;
`
export const Title = styled.h4`
    font-family: Roboto;
    text-align: center;
    font-weight: bold;
    color: black;
    font-size: 20px;
    margin-bottom: 0px;
    margin-top: 0px;
`
export const Time = styled.p`
    font-weight: 700;
    font-size: 16px;
    font-family: Roboto;
    margin-bottom: 0px;
`
export const Ingredients = styled.p`
    font-weight: 700;
    font-size: 16px;
    font-family: Roboto;
    margin-bottom: 0px;
`
export const SpanElement = styled.span`
    font-size: 14px;
    font-weight: 500;
    font-family: Roboto;
    color: black;
    margin-bottom: 0px;
    margin-top: 0px;
`
export const Process = styled.p`
    font-weight: 700;
    font-size: 16px;
    font-family: Roboto;
`
export const DeleteEditIconsContainer = styled.div`
    display: flex;
    align-items :center;
    justify-content: center;
    margin-top: 0px;
    // background-color: rgb(57, 57, 42);
`
export const DeleteIcon = styled.p`
    font-weight: bold;
    font-size: 20px;
    color: black;
    cursor: pointer;
    margin-right: 40px;
`
export const EditIcon = styled.p`
    font-weight: bold;
    font-size: 24px;
    color:rgb(38, 87, 234);
`
export const EmptyDataText = styled.h1`
    font-size: 20px;
    font-family: Roboto;
`