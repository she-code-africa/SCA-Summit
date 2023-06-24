import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Main from "./page/Main/Main";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [isShown, setIsShown] = useState(false);

  const handleClick = () => {
    setIsShown(true);
  };
  return (
    <>
      <BrowserRouter>
        <Nav setIsShown={setIsShown}/>

        <Routes>
          <Route
            index
            element={<Main isShown={isShown} handleClick={handleClick} />}
          ></Route>
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
