//This component manages getting data from the server to be rendered onto  pagges. 
const remoteURL = "http://localhost:8000"

export const getGuides = () => {
    return fetch("http://localhost:8000/guides", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}

export const getGuideById = (guideId) => {
    return fetch(`${remoteURL}/guides/${guideId}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`,
        } 
    })
        .then(response => response.json())
}

export const createGuide = (guide) => {
    return fetch(`${remoteURL}/guides`, { 
        method: "POST",
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(guide)
    }).then(response => response.json())
}

export const updateGuide = (guide, id) => {
    console.log('updatedGuide', guide)
    return fetch(`http://localhost:8000/guides/${id}`, {
        method: "PUT",
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(guide)
    })
}

export const deleteGuide = (id) => {
    return fetch(`${remoteURL}/guides/${id}`, { 
        method: "DELETE",
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        },
        body: JSON.stringify(id)
    })
}
