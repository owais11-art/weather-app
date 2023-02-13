import { ref } from "vue"

const fetchData = async (url, data) => {
    const response = await fetch(url)
    data.value = await response.json()
}

export const useFetch = (url) => {
    const data = ref(null)
    fetchData(url, data)
    return { data }
}