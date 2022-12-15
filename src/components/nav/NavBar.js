

//Imports the react component
import React from "react";

//the "Link" component is used to send the user to different pages of the website(components)
// the "useHistory" is a hook. It lets you acces the hsotry instace used by React Router.
//Using history instance can redirect user to another page.
//The history instance created by React Router uses a Stack( called “History Stack” ), that stores all the entries the user has visited.
import { Link, useHistory } from "react-router-dom";

//CSS styling for the nav bar
import "./NavBar.css";
//This function is the navigation bar at the top of the webpage
//it provides links to all guides as well as a link to making a new guide

export const NavBar = () => {

  //this is variable, it's defined as a constant "const" and is immutable. 
  //the constant "history" is given the value of "useHistory".
  //"const history" takes the react hook "useHistory", makes it into shorthand that can then be attached it to methods
  //for this app, this is done to lets us redirect the user to another page
  const history = useHistory();
  return (
    <ul className="navbar">
      <li className="navbar__item">
        <Link to="/reptileguides">All Guides</Link>
      </li>
      
      <li className="navbar__item">
        <Link to="/reptileguides/new">Make New Guide</Link>
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
              history.push({ pathname: "/" });
            }}
          >
            Logout
          </button>
        </li>
      ) : (
        <>
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/register">
              Register
            </Link>
          </li>
        </>
      )}
    </ul>
  );
};
