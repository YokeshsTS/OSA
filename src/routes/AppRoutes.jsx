import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import useAuthStore from "../store/authStore";
import Auth from "../pages/Auth";

const AppRoutes = () => {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);

  return (
    <Routes>
      <Route
        path="/"
        element={
          isAuthenticated ? <Navigate to="/home" /> : <Navigate to="/auth" />
        }
      />
      <Route path="/auth" element={<Auth />} />
      <Route
        path="/home"
        element={isAuthenticated ? <Home /> : <Navigate to="/auth" />}
      />
    </Routes>
  );
};

export default AppRoutes;
