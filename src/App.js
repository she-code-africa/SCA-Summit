import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from "./components/Navbar/Navbar";

import AllHomeComponent from './page/AllHomeComponent';

import Register from "./page/Register";

import Footer from "./components/Footer";

const App = () => {

  return (

    <>
      
      <BrowserRouter>
        
      <NavBar/>
      
        <Routes>
          
          <Route index element={<AllHomeComponent />}></Route>
          
          <Route path='/signup' element={<Register />}></Route> 
          
        </Routes>
        
        <Footer />
        
      </BrowserRouter>
      
    </>

  )

}

export default App