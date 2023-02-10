import { ref } from "vue"
export const useFetch = (url) => {
    console.log(url)
    const data = ref(null)
    const fetchData = async url => {
        const response = await fetch(url)
        data.value = await response.json()
    }
    fetchData(url)
    return { data }
}