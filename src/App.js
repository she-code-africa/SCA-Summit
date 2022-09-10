import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/Navbar/Navbar";

import Main from "./page/Main/Main";

import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route index element={<Main />}></Route>
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
