import React from 'react'
import { Box, Typography, Card, CardContent, CardMedia, IconButton } from "@mui/material"
import {ThumbUp} from '@mui/icons-material';

const RecipeCard = ({meal, dispatch}) => {
  return (
    <Box>
      <Card>
        <CardMedia 
        component="img"
        height="200"
        image={meal?.strMealThumb}
        onClick={()=> dispatch({type: "selectMeal", value: meal})}
        />
        <CardContent sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
          <Typography variant="h6">
            {meal.strMeal}
          </Typography>
          <IconButton type="button" 
          
          >
             <ThumbUp />
          </IconButton>
        </CardContent>
      </Card>
    </Box>
  )
}

export default RecipeCard