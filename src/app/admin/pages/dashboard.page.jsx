import React from "react";
import styles from '../layouts/layout.module.css'
 
const Dashboard = () => {
  return (
    <h1 className={styles.titre}>Admin Dashboard</h1>
  );
}
 
Dashboard.path = "/dashboard";
Dashboard.metadata = {
  title: "Dashboard",
  description: "Admin Dashboard",
}
 
export default Dashboard;