import LandingPage from "./Pages/LandingPage";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import NotFoundpage from "./Pages/NotFoundPage";
import "/src/input.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { React, useState } from "react";

function App() {
  // Load theme from localStorage or default to dark
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  return (
    <>
      <Router>
        <Header theme={theme} setTheme={setTheme} />
        <Routes>
          <Route
            path="/"
            element={<LandingPage theme={theme} setTheme={setTheme} />}
          />
          {/* Optional: 404 Not Found Page */}
          <Route path="*" element={<NotFoundpage />} />
        </Routes>
        <Footer theme={theme} setTheme={setTheme} />
      </Router>
    </>
  );
}

export default App;
