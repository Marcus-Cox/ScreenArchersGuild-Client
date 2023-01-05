//Fist Visiable information on page appers to house content seen on screen when rendered
import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import { getScreenShots, deleteScreenShot } from "../../managers/ScreenShotManager.js"
import { ScreenShotCard } from "./ScreenShotCard.js"
import "./ScreenShot.css"
export const ScreenShotList = (props) => {
    const [ screenshots, setScreenShots ] = useState([])
    const navigate  = useNavigate();
    
    const {screenshotId} = useParams();

    useEffect(() => {
        getScreenShots().then(data => setScreenShots(data))
    }, [])

    const delScreenShot = (screenshotId) => {
        deleteScreenShot(screenshotId)
            .then(() => getScreenShots().then(setScreenShots));
    }

    return (
        <article className="screenshots">
            <h2>Gallery of Screenshots</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>

            <button className="btn" id="createBtn"
                onClick={() => {
                    navigate({ pathname: "/ScreenShots/new" })
                }}
            >Post New Screenshot
            </button>

            {/* The .map() method allows you to iterate over an array and modify its elements using a callback function.
            The callback function will then be executed on each of the array's elements. */}
            {/* the callback function "ScreenShots" is being used in this case 
            the .map method iterates over the array ScreenShots */}
            {/* what this essentially means is that .map will use the information in ScreenShotCard
            to properly display the list of ScreenShots by pulling the .id keys
            this happens one by one until there are no more keys in the array
            this process is called iteration */}
            {screenshots.map(screenshot => 
                <ScreenShotCard
                key={screenshot.id}
                screenshot={screenshot}
                captureTool={screenshot.captureTool}
                delScreenShot={delScreenShot} />
            )}
            </div>
        </article>
    )
}