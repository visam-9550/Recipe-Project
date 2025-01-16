import React, {useMemo} from 'react'
import { Audio } from 'react-loader-spinner'
import RecipeItem from '../RecipeItem/recipeItem.jsx'
import { useSelector, useDispatch } from 'react-redux'
import { FaCaretLeft } from "react-icons/fa";
import { FaCaretRight } from "react-icons/fa";
import { fetchingAllRecipesData } from '../middlewares/getAllRecipesMiddleware.js'
import { useEffect} from 'react'
import PaginationSlice from '../Redux/Slices/paginationSlice.jsx';
import { ClipLoader } from 'react-spinners';
import { PageNumber, Paginationcontainer, IncreseButton, DecreseButton, RecipesContainer, Container } from './styledComponents.jsx';
const actions = PaginationSlice.actions

function Recipes() {
    const {pageNumber, pageLength, totalPages, startIndex, endIndex} = useSelector((store) => store.paginationState)
    const getRecipesDataStates = useSelector((store) => store.getRecipesDataState)
    const {loading, error, recipesData} = getRecipesDataStates
    const dispatch = useDispatch()
    const clickOnDecreseButton = () =>{
      dispatch(actions.setPageNumber(pageNumber - 1))
    }
    const clickOnIncreseButton = () =>{
      dispatch(actions.setPageNumber(pageNumber + 1))
    }
  useEffect(() => {
      dispatch(fetchingAllRecipesData);
  }, [dispatch]);
  
  useEffect(() => {
      dispatch(actions.setTotalPages(Math.ceil(recipesData.length / pageLength)));
  }, [recipesData, pageLength, dispatch]);
  
  useEffect(() => {
      dispatch(actions.setStartIndex((pageNumber - 1) * pageLength));
      dispatch(actions.setEndIndex(pageNumber * pageLength));
  }, [pageNumber, pageLength, dispatch]);
    const paginatedData = recipesData.slice(startIndex, endIndex)

    return (
    
      <RecipesContainer>
        <Container>
            {loading && <ClipLoader color="#3498db" loading={loading} size={50} />}
            
            {paginatedData?.map((recipe) =>{
              return(
                <div key = {recipe._id}>
                  <RecipeItem details = {recipe} time = {recipe.time} title = {recipe.title} coverImage = {recipe.image} process = {recipe.process} ingredients = {recipe.ingredients} id = {recipe._id} favourite = {recipe.favourite}/>
                </div>
              )
            })}
            {error && <div>
                        <h1>Error</h1>
                      </div>
            }
          </Container>
            <Paginationcontainer>
              <DecreseButton onClick = {clickOnDecreseButton} disabled = {pageNumber === 1}><FaCaretLeft /></DecreseButton>
              <PageNumber>{pageNumber}</PageNumber>
              <IncreseButton onClick = {clickOnIncreseButton} disabled = {pageNumber === totalPages}><FaCaretRight /></IncreseButton>
            </Paginationcontainer>
  
      </RecipesContainer>
    )
  }
  
export default Recipes;