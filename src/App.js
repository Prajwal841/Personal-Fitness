
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import {Box} from '@mui/material';
import { Navbar } from './components/Navbar';
import Home from './pages/Home';
import ExerciseDetails from './pages/ExerciseDetails';
import Footer from './components/Footer';
function App() {
  return (
   <Box width="400" sx={{width:{x1:'1488px'}}} m="auto">
    <BrowserRouter>
    <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
     <Route path='/exercise/:id' element={<ExerciseDetails/>}/>
     </Routes>
     <Footer/>
     </BrowserRouter>
   </Box>
  );
}

export default App;
