import { Link } from "rasengan";
import React from "react";

const Test = () => {
    return (
        <div>
            <h1>
             For me
            </h1>
            {/* <Link to="/admin/dashboard">Go to Dashboard</Link> */}
        </div>
    )
  }
   
  Test.path = "/test";
  Test.metadata = {
    title: "Test",
    description: "Test Page"
  }
   
  export default Test;