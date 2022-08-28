import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from "./components/Navbar";

import AllHomeComponent from './page/AllHomeComponent';

import Footer from "./components/Footer";

const App = () => {

  return (

    <>
      
      <BrowserRouter>
        
      <NavBar/>
      
        <Routes>
          
          <Route index element={<AllHomeComponent />}></Route>
                    
        </Routes>
        
        <Footer />
        
      </BrowserRouter>
      
    </>

  )

}

export default App