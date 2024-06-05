//import './App.css'
import Header from './components/head/header'
import Home from './components/home/home'
import {AppBar,Toolbar,styled,Box,Typography, Button} from '@mui/material'
import { Block } from '@mui/icons-material'
import DataProvider from './context/dataprovider'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import DetailsofProd from './components/details/details'

function App() {
  
  return (
    <DataProvider>
      <BrowserRouter>
        <Header/>
        <Box style={{marginTop:55}}>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/product/:id' element={<DetailsofProd/>} />
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  )
}

export default App
