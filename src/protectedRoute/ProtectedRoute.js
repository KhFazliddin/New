import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

export default function ProtectedRoute() {
  const signedIn = useSelector((state) => state.auth.loggedIn);
  return signedIn  ? <Outlet /> : <Navigate to="/login" />;
}
