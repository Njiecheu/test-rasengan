import { Link } from "rasengan";
import React from "react";

const Home = () => {
    return (
        <div>
            <h1>
            Home page for test 
            </h1>
            <Link to="/test">Go to Dashboard</Link>
        </div>
    )
  }
   
  Home.path = "/";
  Home.metadata = {
    title: "Home",
    description: "Home Page"
  }
   
  export default Home;