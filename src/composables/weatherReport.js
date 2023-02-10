import { watch, ref } from "vue"
import { useFetch } from "./fetch"
import { dataCleanUp } from "./cleanUp"

const WEATHER_BASE_URL = import.meta.env.VITE_WEATHER_BASE_URL
const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY

export const getWeatherReport = data => {
    const values = ref(null)
    const [ {lat, lon, name} ] = data.value
    const weatherURL = `${WEATHER_BASE_URL}${lat},${lon}?unitGroup=metric&include=hours%2Ccurrent&key=${WEATHER_API_KEY}`
    const { data: weatherReport } = useFetch(weatherURL)
    watch(weatherReport, () => {
        const {current, todaysForecast, sevenDaysForecast, extras} = dataCleanUp(weatherReport)
        values.value = {
            name,
            current,
            todaysForecast,
            sevenDaysForecast,
            extras
        }
    })
    return { values }
}