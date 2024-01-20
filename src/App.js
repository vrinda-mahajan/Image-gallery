import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAuth, useHistory, useLike } from "./hooks";
import { PrivateRoutes, PublicRoutes } from "./routes";
import { Modal, Navbar } from "./components";
import { History, Home, ImageSearch, Liked, Signin, Signup } from "./pages";

function App() {
  const location = useLocation();
  const { getHistory } = useHistory();
  const { getLiked } = useLike();
  const { user } = useAuth();

  useEffect(() => {
    user && getHistory();
    user && getLiked();
  }, [user]);
  return (
    <>
      {!["/signin", "/signup"].includes(location.pathname) && <Navbar />}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/:category" element={<ImageSearch />} />
        <Route exact path="/:category/:id" element={<Modal />} />
        <Route
          exact
          path="/history"
          element={
            <PrivateRoutes>
              <History />
            </PrivateRoutes>
          }
        />
        <Route
          exact
          path="/liked"
          element={
            <PrivateRoutes>
              <Liked />
            </PrivateRoutes>
          }
        />
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
