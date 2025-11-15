import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AppContext } from "../context/AppContext";

function PublicRoute() {
    const {token} = useContext(AppContext)

  return !token ? <Outlet /> : <Navigate to="/" />;
}

export default PublicRoute;