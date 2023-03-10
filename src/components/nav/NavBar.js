

//Imports the react component
import React from "react";

//the "Link" component is used to send the user to different pages of the website(components)
// the "useNavigate" is a hook. It lets you acces the hsotry instace used by React Router.
//Using history instance can redirect user to another page.
//The history instance created by React Router uses a Stack( called “History Stack” ), that stores all the entries the user has visited.
import { Link, useNavigate } from "react-router-dom";
//CSS styling for the nav bar
import "./NavBar.css";
//This function is the navigation bar at the top of the webpage
//it provides links to all guides as well as a link to making a new guide

export const NavBar = () => {

  //this is variable, it's defined as a constant "const" and is immutable. 
  //the constant "history" is given the value of "useNavigate".
  //"const history" takes the react hook "useNavigate", makes it into shorthand that can then be attached it to methods
  //for this app, this is done to lets us redirect the user to another page
  const navigate  = useNavigate();
  return (
    <ul className="navbar">
      <li className="navbar__item">
        <Link to="/guides">All Guides</Link>
      </li>
      
      <li className="navbar__item">
        <Link to="/guides/new">Make New Guide</Link>
      </li>
      <li className="navbar__item">
        <Link to="/screenshots">All ScreenShots</Link>
      </li>
      
      <li className="navbar__item">
        <Link to="/screenshots/new">Make New ScreenShot</Link>
      </li>

      <li className="navbar__item">
        <Link to="/screenshots/myScreenshots">My ScreenShots</Link>
      </li>

      <li className="nav-item">
      <button className="nav-link fakeLink"
          onClick={() => {
            navigate("/login" );
          }}
      >Login
      </button>
      </li>

      {localStorage.getItem("lu_token") !== null ? (
        <li className="nav-item">
          <button
            className="nav-link fakeLink"
            onClick={() => {
              //the "remove item" method is used here to remove the users authentication token so they can log out. 
              localStorage.removeItem("lu_token");
              //the ".push" method pushes a new entry onto the history stack.
              //having this at the end of this code lets the user successfully log out and redirects them to the login page
              //they go to the login page because "localStorage.removeItem("lu_token");" removes the token they are used as authentication
              navigate("/login" );
            }}
          >
            Logout
          </button>
        </li>
      ) : (
        <>

          <li className="nav-item">
            <Link className="nav-link" to="/login">
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/register">
            </Link>
          </li>
        </>
      )}
    </ul>
  );
};
