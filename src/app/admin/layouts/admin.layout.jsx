import React from "react";
import { Outlet } from "rasengan";
 
const AdminLayout = () => {
  return (
    <React.Fragment>
      <h1>Admin Layout</h1>
      <Outlet />
    </React.Fragment>
  );
}
 
AdminLayout.path = "/admin";
 
export default AdminLayout