import { ref, watch, unref, watchEffect } from "vue"
import { getLocation } from "./location"
import { getWeatherReport } from "./weatherReport"

export const useWeatherData = (address) => {
    const finalReport = ref(null)
    const start = () => {
        finalReport.value = null
        const a = unref(address)
        const { data } = getLocation(a)
        watch(data, () => {
            const { values } = getWeatherReport(data)
            watch(values, () => finalReport.value = unref(values))
        })
    }
    watchEffect(start)
    return { finalReport }
}