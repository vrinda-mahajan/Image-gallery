import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import ImageSearch from "./pages/imageSearch";
import Navbar from "./components/navbar";
import Modal from "./components/modal";

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:category" element={<ImageSearch />} />
        <Route path="/:category/:id" element={<Modal />} />
      </Routes>
    </>
  );
}

export default App;
