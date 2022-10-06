import React, { useState } from 'react'
import { AppBar, Toolbar, InputBase, Stack, Paper, IconButton, Badge } from '@mui/material'
import { EmojiEmotions, OutdoorGrill, Search } from '@mui/icons-material'
import { useStateContext } from '../context'

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const { mealData, dispatch, getRandomMeal,  } = useStateContext()
  
  const { favoriteMeals } = mealData

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({ type: "setSearch", value: searchTerm })
  }
  return (

    <AppBar position='sticky' sx={{ backgroundColor: "white" }}>
      <Toolbar>
        {/* <Typography variant="h5" color="black" fontWeight="bold">
          logo
        </Typography> */}
        <Stack direction="{row" alignItems="center">
          <Paper
            component="form"
            onSubmit={handleSubmit}
            sx={{ borderRadius: "none", boxShadow: 0 }}
          >

            <InputBase
              placeholder='Your favorite meal'
              onChange={(e) => setSearchTerm(e.target.value)}
              sx={{width: {xs: "150px"}}}
            />

            <IconButton type="submit">
              <Search />
            </IconButton>



          </Paper>
          <IconButton type="button"
            onClick={() => getRandomMeal()}
          >
            <OutdoorGrill />
          </IconButton>
          <IconButton type="button"
            onClick={() => dispatch({ type: "setDrawer" })}
          >
            <Badge badgeContent={favoriteMeals?.length} color="primary">
               <EmojiEmotions sx={{ color: "#FBDF07", }} /> 
            </Badge>
            
          </IconButton>

        </Stack>
      </Toolbar>
    </AppBar>

  )
}

export default Navbar