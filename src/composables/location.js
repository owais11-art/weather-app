import { useFetch } from "./fetch"

const LOCATION_BASE_URL = import.meta.env.VITE_LOCATION_BASE_URL
const LOCATION_API_KEY = import.meta.env.VITE_LOCATION_API_KEY

const getQuery = (address, request) => {
    if(request === 'direct') return `q=${address}`
    else return `lat=${address.lat}&lon=${address.lon}`
}

export const getLocation = (address, request="direct") => {
    const query = getQuery(address, request)
    const locationURL = `${LOCATION_BASE_URL}${request}?${query}&appid=${LOCATION_API_KEY}`
    const { data } = useFetch(locationURL)
    return {data}
}