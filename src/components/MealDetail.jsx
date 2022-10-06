import React from 'react'
import { Box, Modal, Typography, Card, CardMedia, CardContent, CardActions, IconButton, Link } from "@mui/material"
import { Launch, YouTube } from '@mui/icons-material';

import { useStateContext } from "../context"

const MealDetail = () => {
  const { mealData, dispatch } = useStateContext()
  const { showModal, selectedMeal } = mealData

  return (
    <Box>
      <Modal
        open={showModal}
        onClose={() => dispatch({ type: "setModal" })}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >

        <Card
          sx={{
            backgroundColor: "white",
            height: "80vh",
            width: { xs: "90vw", sm: "70vw", lg: "50vw" },
            outline: "none",
            border: "none",
            borderRadius: "8px",
            overflowY: "scroll"

          }}
        >
          <CardMedia
            component="img"
            sx={{ height: { xs: "150px", sm: "250px" } }}
            alt="recipe-image"
            image={selectedMeal.strMealThumb}
          />
          <CardContent sx={{ px: { xs: 1, sm: 2, } }}>
            <Typography variant="h4" gutterBottom>
              {selectedMeal.strMeal}
            </Typography>
            <Typography variant="body2">
              {selectedMeal.strInstructions}
            </Typography>
          </CardContent>
          <CardActions>
            <Link href={selectedMeal.strSource}>
              <IconButton>
                <Launch />
              </IconButton>
            </Link>
            <Link href={selectedMeal.strYoutube}>
              <IconButton>
                <YouTube />
              </IconButton>
            </Link>
          </CardActions>
        </Card>


      </Modal>
    </Box>
  )
}

export default MealDetail