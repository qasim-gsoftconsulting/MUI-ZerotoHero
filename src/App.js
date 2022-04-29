import React  from "react"
import Navbar from './components/Header/Navbar';
import Authentication from './pages/Authentication/Authentication'
import Hosting from './pages/Hosting/Hosting';
import Database from './pages/Database/Database';
import Storage from './pages/Storage/Storage';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';  
import Grid from '@mui/material/Grid';
import { dashboardTheme } from './DashboradTeme';
import Header from "./components/Header/Header";

function App() {
 
  return (
   <ThemeProvider theme={dashboardTheme}>
    <BrowserRouter>
   <Grid container>
    <Navbar/>
    <Header />
    <Routes>
        <Route path="authentication" element={<Authentication />} />
        <Route path="database" element={<Database />} />
        <Route path="hosting" element={<Hosting />} />
        <Route path="storage" element={<Storage />} />
    </Routes>
    </Grid>
  </BrowserRouter>
  </ThemeProvider>
  );
}

export default App;
