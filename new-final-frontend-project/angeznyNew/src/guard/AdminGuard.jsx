import { Navigate, Outlet } from "react-router-dom";
import jwtDecode from "jwt-decode";

const AdminGuard = () => {
  const isAdmin = () => {
    const token = localStorage.getItem("token");
    const admin = jwtDecode(token);
    return admin.role === 'Admin'
  };
  const isLoggedIn = () => {
    const token = localStorage.getItem("token");
    return token;
  };
  return (
    isLoggedIn() && isAdmin() ?
    <Outlet/> 
    :
    <Navigate to='/login'/>
  )
};

export default AdminGuard;
