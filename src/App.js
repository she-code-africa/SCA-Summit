import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from "./components/Navbar";

import Register from "./page/Register";

import Footer from "./components/Footer";
import { Home } from './page/Home';
import { About } from './page/About';
import { Schedule } from './page/Schedule';
import { Speakers } from './page/Speakers';
import { Sponsors } from './page/Sponsors';

const App = () => {

  return (

    <>
      
      <BrowserRouter>
        
      <NavBar/>
      
        <Routes>
        <Route path='/' element = {
          <>
            <Home/>
            <About/>
            <Speakers/>
            <Schedule/>
            <Sponsors/>
          </>}>
        </Route>
          <Route path='signup' element = {<Register />}></Route>  
        </Routes>
        
        
        <Footer />
        
      </BrowserRouter>
      
    </>

  )

}

export default App