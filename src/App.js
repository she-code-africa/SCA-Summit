import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Main";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    // Check if the current protocol is HTTP
    console.log(process.env.NODE_ENV);
    if (process.env.NODE_ENV === "production") {
      console.log(window.location.protocol);
      if (window.location.protocol === "http:") {
        // Redirect to the equivalent URL with HTTPS
        window.location.href = `https://${window.location.hostname}${window.location.pathname}`;
      }
    }
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
