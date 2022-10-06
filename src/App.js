import './App.css';
import { Box, Drawer, } from "@mui/material"
import { FavoriteRacipe, MealDetail, Navbar, Recipes } from './components';
import { useStateContext } from "./context"



function App() {
  const { mealData, dispatch } = useStateContext()
  const { showDrawer, showModal,  } = mealData
  return (
    <Box>
      {showModal && <MealDetail />}

      <Drawer
        anchor="top"
        open={showDrawer}
        onClose={() => dispatch({ type: "setDrawer" })}
      >


        <FavoriteRacipe />


      </Drawer>




      <Navbar />

      <Recipes />

    </Box>
  );
}

export default App;
