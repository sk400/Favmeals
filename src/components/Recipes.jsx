import React from 'react'
import { Box, Grid, } from "@mui/material"

import { useStateContext } from '../context'
import {RecipeCard, Loader} from './'

const Recipes = () => {
  const { mealData, dispatch } = useStateContext()
  const { meals } = mealData

  if(!meals?.length) return <Loader />;

  return (
    <Box>
      <Grid container spacing={3}>
        {meals?.map((meal) => (

          <Grid item xs={12} sm={6} lg={4} key={meal.idMeal}>
            <RecipeCard meal={meal} dispatch={dispatch} />
          </Grid>

        ))}
      </Grid>
    </Box>
  )
}

export default Recipes