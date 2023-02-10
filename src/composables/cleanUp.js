import { DAYS_OF_WEEK, getIcon, setTime } from './helpers'

export const dataCleanUp = weatherReport => {
    const current = {
        datetime: weatherReport.value.currentConditions.datetime,
        temp: weatherReport.value.currentConditions.temp,
        condition: weatherReport.value.currentConditions.conditions,
        icon: getIcon(weatherReport.value.currentConditions.conditions)
    }

    const extras = {
        realFeel: weatherReport.value.currentConditions.feelslike,
        humidity: weatherReport.value.currentConditions.humidity,
        uvindex: weatherReport.value.currentConditions.uvindex,
        wind: weatherReport.value.currentConditions.windspeed
    }

    const todaysForecast = weatherReport.value.days[0].hours.map((item) => {
        return {
            condition: item.conditions,
            temp: item.temp,
            time: setTime(item.datetime),
            icon: getIcon(item.conditions)
        }
    })

    const sevenDaysForecast = weatherReport.value.days.slice(0, 7).map(item => {
        return {
            day: DAYS_OF_WEEK[new Date(item.datetime).getDay()].slice(0, 3),
            condition: item.conditions,
            temp: item.temp,
            icon: getIcon(item.conditions)
        }
    })

    const values = {
        current,
        todaysForecast,
        sevenDaysForecast,
        extras
    }
    return values
}