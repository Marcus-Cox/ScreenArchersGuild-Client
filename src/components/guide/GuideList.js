//Fist Visiable information on page appers to house content seen on screen when rendered
import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import { getGuides, deleteGuide } from "../../managers/GuideManager.js"
import "./Guide.css"
import { GuideCard } from "./GuideCard.js"

export const GuideList = (props) => {
    const [ guides, setGuides ] = useState([])
    const navigate  = useNavigate();
    
    const {guideId} = useParams();

    useEffect(() => {
        getGuides().then(data => setGuides(data))
    }, [])

    const delGuide = (guideId) => {
        deleteGuide(guideId)
            .then(() => getGuides().then(setGuides));
    }

    return (
        <article className="guides">
            <h2>List of Screenshot Guides</h2>
            <button className="btn" id="createBtn"
                onClick={() => {
                    navigate({ pathname: "/guides/new" })
                }}
            >Register New Screenshot Guide
            </button>
            {/* The .map() method allows you to iterate over an array and modify its elements using a callback function.
            The callback function will then be executed on each of the array's elements. */}
            {/* the callback function "guides" is being used in this case 
            the .map method iterates over the array guides */}
            {/* what this essentially means is that .map will use the information in GuideCard
            to properly display the list of guides by pulling the .id keys
            this happens one by one until there are no more keys in the array
            this process is called iteration */}
            {guides.map(guide => 
                <GuideCard
                key={guide.id}
                guide={guide}
                delGuide={delGuide} />
            )}
        </article>
    )
}