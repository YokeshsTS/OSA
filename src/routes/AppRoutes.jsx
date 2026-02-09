import { Routes, Route, Navigate } from "react-router-dom";
import Auth from "../pages/Auth/Auth";
import Home from "../pages/Home";
import useAuthStore from "../app/store/authStore";

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
