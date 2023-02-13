<script setup>
  import SearchBar from './components/SearchBar.vue'
  import CurrentWeather from './components/CurrentWeather.vue'
  import TodaysForecast from './components/TodaysForecast.vue'
  import WeeksForecast from './components/WeeksForecast.vue'
  import Loader from './components/Loader.vue'
  import MapModal from './components/MapModal.vue'
  import { useWeatherData } from './composables/weatherData'
  import { ref } from 'vue';
  const address = ref('srinagar')
  const displayMap = ref(false)
  const { finalReport } = useWeatherData(address)
  const searchWeatherData = place => address.value = place
  const setDisplayMap = () => {
    displayMap.value = !displayMap.value
  }
  const handleSearchLocation = name => {
    address.value = name
    displayMap.value = false
  }
</script>

<template>
  <main>
    <div class="current-forecast">
      <SearchBar
        @search-weather-data="searchWeatherData"
        @setDisplayMap="setDisplayMap"
      />
      <template v-if="finalReport">
        <MapModal 
          :address="address"
          v-if="displayMap"
          @search-location="handleSearchLocation"
        />
        <CurrentWeather
          :report="finalReport"
          v-else
        />
        <TodaysForecast
          :forecast="finalReport.todaysForecast"
        />
      </template>
      <Loader v-else/>
    </div>
    <div class="future-forecast">
      <WeeksForecast
        :forecast="finalReport.sevenDaysForecast"
        v-if="finalReport"
      />
    </div>
  </main>
</template>

<style scoped lang="less">
  main{
    width: 90%;
    padding: 20px;
    max-width: 1400px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 44px;
    @media(min-width: 768px){
      flex-direction: row;
      justify-content: space-between;
    }
    .current-forecast{
      width: 100%;
      @media(min-width: 768px){
        width: 60%;
      }
    }
    .future-forecast{
      width: 100%;
      @media(min-width: 768px){
        width: 40%;
      }
    }
  }
</style>
