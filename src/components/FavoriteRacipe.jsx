import React from 'react'
import { Box,  Typography, Avatar, IconButton } from "@mui/material"
import { useStateContext } from '../context'

const FavoriteRacipe = () => {
  const { mealData, dispatch } = useStateContext()
  const { favoriteMeals } = mealData
  return (
    <Box sx={{backgroundColor: "black", }}>
      <Typography variant="h5" color="white" sx={{pl: 1, pt: 1}}>
        Your favorite Meals
      </Typography>
      <Box sx={{
        display: "flex", flexDirection: "row", alignItems: "center", flexWrap: "wrap",
        p: 3
      }}>


        {favoriteMeals?.map((favoriteMeal) => (
          <Box key={favoriteMeal.idMeal}>

            <Box 
            sx={{
              mr: 2, border: "solid 5px", borderColor: "white", borderRadius: "50%",

            }} 
            onClick={()=> {
              dispatch({type: "selectMeal", id: favoriteMeal.idMeal, favorites: true})
              dispatch({type: "setModal"})
            }}
            >
              <Avatar alt="favorite-racipe" src={favoriteMeal.strMealThumb} />
            </Box>

            <IconButton
              onClick={() => dispatch({ type: "removeFavorite", id: favoriteMeal.idMeal })}
            >
              <Typography sx={{ fontSize: "10px", color: "white" }}>
                remove
              </Typography>
            </IconButton>
          </Box>



        ))}
      </Box>
    </Box>

  )
}

export default FavoriteRacipe