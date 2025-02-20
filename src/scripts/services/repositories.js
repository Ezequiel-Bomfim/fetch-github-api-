import { baseUrl, repositoriesEventsQuantity } from "../variables.js"

async function getRepositories(userName) {
    const response = await fetch(`${baseUrl}/${userName}/repos?per_page=${repositoriesEventsQuantity}`)
    return await response.json()
}

export{ getRepositories }