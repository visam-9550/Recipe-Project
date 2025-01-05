import React from 'react'
import { Audio } from 'react-loader-spinner'
import RecipeItem from '../RecipeItem/recipeItem.jsx'
import { useSelector, useDispatch } from 'react-redux'
import { fetchingAllRecipesData } from '../middlewares/getAllRecipesMiddleware.js'
import { useEffect} from 'react'

function Recipes() {

    const getRecipesDataStates = useSelector((store) => store.getRecipesDataState)
    const {loading, error, recipesData} = getRecipesDataStates
    const dispatch = useDispatch()
    
    useEffect(() =>{
      dispatch(fetchingAllRecipesData)
    }, [])
    console.log(recipesData)
  
    return (
      <>
            {loading && <Audio
                            height="80"
                            width="80"
                            radius="9"
                            color="green"
                            ariaLabel="loading"
                            wrapperStyle
                            wrapperClass
                        />
            }
            {recipesData?.map((recipe) =>{
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
  
      </>
    )
  }
  
export default Recipes