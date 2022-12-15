//This imports basic react functionality, I don't know -exactly- what it does but I need it for this app to work
import React from "react"
//This import is used to pull in "Route" and "Navigate" components. They are used to give the user navigation functionality in the app
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
//import for application views
import { ApplicationViews } from "../views/ApplicationViews"
//This imports the Navbar component. The Navbar components has a link to logout, all Guides and a link to make a now guide
import { NavBar } from "./nav/NavBar"

//This is a function, it's named ScreenArchersGuild.
// function  which allow you to store a piece of code that does a single task inside a defined block
// then call that code whenever you need it using a single short command
export const ScreenArchersGuild = () => (
    <>
                        <NavBar />
                        <ApplicationViews />
    </>
)