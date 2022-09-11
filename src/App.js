import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav/Nav";

import Main from "./page/Main/Main";

import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />

        <Routes>
          <Route index element={<Main />}></Route>
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
