import React from 'react';
import { Outlet,Link } from 'react-router-dom';
import {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { getStudents } from "./actions/index.js";

const App = () => {
    const dispatch = useDispatch();
     useEffect(() => {
    dispatch(getStudents())
     }, [dispatch])
     document.body.style.backgroundColor = "#e9e3f5";
    return (
        <div >
            <nav 
        style={{
          borderBottom: "solid 1px",
          paddingTop: "1rem", 
          paddingBottom: "1rem"
     
        }}
      >
        <Link to="/students" style={{     color: "black",
          textDecoration: "none",border: "1px solid gray", borderRadius: "1em", padding: "0.2em 1.5em", margin: "0 0.5em"}}>students</Link>
        <Link to="/admin" style={{     color: "black",
          textDecoration: "none",border: "1px solid gray", borderRadius: "1em", padding: "0.2em 1.5em", margin: "0 0.5em"}}>admin</Link>
      </nav>
      <Outlet />
        </div>
        
    )
};
export default App;