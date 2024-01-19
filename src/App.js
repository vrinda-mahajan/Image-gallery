import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home";
import ImageSearch from "./pages/imageSearch";
import Navbar from "./components/navbar";
import Modal from "./components/modal";
import { Toaster } from "react-hot-toast";
import Signin from "./pages/signin";
import PublicRoutes from "./routes/publicRoutes";
import Signup from "./pages/signup";

function App() {
  const location = useLocation();
  return (
    <>
      {!["/signin", "/signup"].includes(location.pathname) && <Navbar />}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/:category" element={<ImageSearch />} />
        <Route exact path="/:category/:id" element={<Modal />} />
        <Route
          exact
          path="/signup"
          element={
            <PublicRoutes>
              <Signup />
            </PublicRoutes>
          }
        />
        <Route
          exact
          path="/signin"
          element={
            <PublicRoutes>
              <Signin />
            </PublicRoutes>
          }
        />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
