import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import Unavailable from "./Unavailable";

export default function AdminOnlyRoute({ children }) {
  const { isAdmin, loading } = useContext(UserContext);

  if (loading) return <Unavailable />;
  if (!isAdmin) return <Navigate to="/" replace />;

  return children;
}
