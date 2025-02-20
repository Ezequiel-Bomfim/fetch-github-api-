import { baseUrl, repositoriesEventsQuantity } from "../variables.js"

async function getEvents(userName) {
    const response = await fetch(`${baseUrl}/${userName}/events?per_page=${repositoriesEventsQuantity}`)
    const eventsData = await response.json() 
    return eventsData.filter(element => element.type === 'CreateEvent' || element.type === 'PushEvent').slice(0, repositoriesEventsQuantity); 
}

export { getEvents }