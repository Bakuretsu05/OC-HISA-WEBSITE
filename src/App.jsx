import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Events from "./pages/events";
import Membership from "./pages/membership";
import Partner from "./pages/partner";
import NotFound from "./pages/notFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="events" element={<Events />} />
        <Route path="membership" element={<Membership />} />
        <Route path="partner" element={<Partner />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
