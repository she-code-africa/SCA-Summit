import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav/Nav";

import Main from "./page/Main/Main";

import Footer from "./components/Footer/Footer";
import ViewSpeakers from "./page/Speakers/ViewSpeakers";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />

        <Routes>
          <Route index element={<Main />}></Route>
          <Route path="/speakers" element={<ViewSpeakers />}></Route>
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
