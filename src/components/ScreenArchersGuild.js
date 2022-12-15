//This imports basic react functionality, I don't know -exactly- what it does but I need it for this app to work
import React from "react"
//This import is used to pull in "Route" and "Navigate" components. They are used to give the user navigation functionality in the app
import { Route, Navigate } from "react-router-dom"
//import for application views
import { ApplicationViews } from "./ApplicationViews"
//This imports the Navbar component. The Navbar components has a link to logout, all Guides and a link to make a now guide
import { NavBar } from "./nav/NavBar"
//imports the component  used for the Login page, this allows a user to log into the app
import { Login } from "/home/marcus/workspace/screenarchersguild-client/src/auth/Login.js"
//imports the component used for the Register Page, this allows a user to make an account they can use to log in
import { Register } from "/home/marcus/workspace/screenarchersguild-client/src/auth/Register.js"

//This is a function, it's named ScreenArchersGuild.
// function  which allow you to store a piece of code that does a single task inside a defined block
// then call that code whenever you need it using a single short command
export const ScreenArchersGuild = () => (
    <>
        <Route render={() => {
            //this checks to see if a valid authentication token is being used
            if (localStorage.getItem("lu_token")) {
                //if a valid token is being used, the user is taken to the front page
                return <>
                    <Route>
                        <NavBar />
                        <ApplicationViews />
                    </Route>
                </>
                //if there is no valid token, the user is directed to the login page
            } else {
                return <Navigate to="/login" />
            }
        }} />
        {/* This code provides a path to the login page for the user */}
        <Route path="/login">
            <Login />
        </Route>
 {/* This code provides a path to the Register page for the user */}
        <Route path="/register">
            <Register />
        </Route>

    </>
)