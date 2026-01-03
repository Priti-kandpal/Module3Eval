import {Routes, Route, Navigate} from "react-router-dom";
import Login from "./pages/login";
import './App.css'
import AdminDashboard from "./pages/AdminDashboard";
import CustomerDashboard from "./pages/CustomerDashboard";
import UpdateRestaurant from "./pages/UpdateRestaurant";
import { useContext } from "react";
import {AuthContext} from "./context/AuthContext";

const PrivateRoute =({children,  role })=>{
  const {user}=
  useContext(AuthContext);
  if (!user) return <Navigate to="/" />;
  if (role && user.role !==role ) return <Navigate to="/" />
  return children;
};

function App(){
  return(
    <Routes>
      <Route path="/" element={<Login />}/>

      <Route path="/admin/dashboard"
      element={
        <PrivateRoute role="admin">
          <AdminDashboard/>
        </PrivateRoute>
      }/>

        <Route path="/customers/dashboard"
      element={
        <PrivateRoute role="customer">
          <UpdateRestaurant/>
        </PrivateRoute>
      }/>

    </Routes>
  )
}
export default App
