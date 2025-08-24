import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/AboutUs";
import Airlines from "./pages/Airlines";
import Agents from "./pages/Agents";
import Contact from "./pages/ContactUs";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/airlines" element={<Airlines />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
