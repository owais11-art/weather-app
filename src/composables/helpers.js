import clear from '../assets/sunny.svg'
import rain from '../assets/rain.svg'
import snow from '../assets/snow.svg'
import partialCloud from '../assets/partial-cloudy.svg'
import cloud from '../assets/cloud.svg'
import storm from '../assets/storm.svg'
import wind from '../assets/wind.svg'
import defaultIcon from '../assets/default.svg'

const DAYS_OF_WEEK = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
]

const getIcon = conditions => {
    conditions = conditions.split(',').map(item => item.trim())
    if(conditions.includes('Clear')) return clear
    else if(conditions.includes('Partially cloudy')) return partialCloud
    else if(conditions.includes('Overcast')) return cloud
    else if(conditions.includes('Rain')) return rain
    else if(conditions.includes('Snow')) return snow
    else if(conditions.includes('Storm')) return storm
    else if(conditions.includes('Wind')) return wind
    else return defaultIcon
}

const setTime = timestamp => {
    const [ hour ] = timestamp.split(':')
    const intHour = parseInt(hour)
    if(intHour > 12) return `${intHour - 12}:00 PM`
    if(intHour === 0) return '12:00 AM'
    if(intHour === 12) return '12:00 PM'
    return `${hour}:00 AM`
}

export {
    DAYS_OF_WEEK,
    getIcon,
    setTime
}