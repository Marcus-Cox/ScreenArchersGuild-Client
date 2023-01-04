import { getToken } from "../utils/authorizations"

export const getArchers = () => {
    return fetch(`http://localhost:8000/archers`, {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Token ${getToken()}`
        }
    })
        .then(res => res.json())
}

export const getArcherById = (archerId) => {
    return fetch(`http://localhost:8000/archers/${archerId}`, {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Token ${getToken()}`
        }
    })
        .then(res => res.json())
}