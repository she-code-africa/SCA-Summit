import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Main";
import { useEffect } from "react";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import Register from "./pages/Register";

function App() {
  useEffect(() => {
    // Check if the current protocol is HTTP
    if (process.env.NODE_ENV === "production") {
      if (window.location.protocol === "http:") {
        // Redirect to the equivalent URL with HTTPS
        window.location.href = `https://${window.location.hostname}${window.location.pathname}`;
      }
    }
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
