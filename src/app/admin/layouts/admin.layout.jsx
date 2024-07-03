import React from "react";
import { Outlet } from "rasengan"

import styles from './layout.module.css'
 
const AdminLayout = () => {
  return (
    <React.Fragment>
      <h1 className={styles.title}>Test Layout</h1>
      <Outlet />
    </React.Fragment>
  );
}
 
AdminLayout.path = "/admin";
 
export default AdminLayout