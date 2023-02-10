import { useFetch } from "./fetch"

const LOCATION_BASE_URL = import.meta.env.VITE_LOCATION_BASE_URL
const LOCATION_API_KEY = import.meta.env.VITE_LOCATION_API_KEY

export const getLocation = address => {
    const locationURL = `${LOCATION_BASE_URL}?q=${address}&appid=${LOCATION_API_KEY}`
    const { data } = useFetch(locationURL)
    return {data}
}