import { baseUrl, repositoriesEventsQuantity } from "../variables.js"

async function getEvents(userName) {
    const response = await fetch(`${baseUrl}/${userName}/events?per_page=${repositoriesEventsQuantity}`)
    const eventsData = await response.json() 
    return eventsData || []; 
}

export { getEvents }