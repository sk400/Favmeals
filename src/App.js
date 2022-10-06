import './App.css';
import { Box } from "@mui/material"
import { FavoriteRacipe, Navbar, Recipes } from './components';



function App() {
  return (
    <Box>
      {/* <Navbar />
      <FavoriteRacipe /> */}
      <Recipes />
    </Box>
  );
}

export default App;
