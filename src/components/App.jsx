import LandingPage from "./Pages/LandingPage";
import Footer from "./Footer/Footer";
import NotFoundpage from "./Pages/NotFoundPage";
import "/src/input.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* Optional: 404 Not Found Page */}
          <Route path="*" element={<NotFoundpage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
