import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Nav from "./components/Nav/Nav";

import Main from "./page/Main/Main";

import Footer from "./components/Footer/Footer";
import ViewSpeakers from "./page/Speakers/ViewSpeakers";
import Modal from "./components/Modal/Modal";

import Context from "./context/context";

const App = () => {
  const [openModal, setOpenModal] = useState(false);
  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "relative";
    } else {
      document.body.style.overflow = "scroll";
    }
    console.log(openModal);
  }, [openModal]);

  return (
    <Context.Provider value={{ openModal, setOpenModal }}>
      <div className="position-relative">
        <BrowserRouter>
          <Modal />
          <Nav />

          <Routes>
            <Route index element={<Main />}></Route>
            <Route path="/speakers" element={<ViewSpeakers />}></Route>
          </Routes>

          <Footer />
        </BrowserRouter>
      </div>
    </Context.Provider>
  );
};

export default App;
