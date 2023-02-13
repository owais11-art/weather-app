<script setup>
    import { ref, watch } from 'vue';
    import Map from './Map.vue'
    import MapData from './MapData.vue'
    import { getLocation } from '../composables/location'
    defineProps(['address'])
    const emit = defineEmits(['searchLocation'])
    const mapData = ref({
        lat: 0,
        lon: 0
    })
    let name = ref('')
    const setMapData = payload => {
        mapData.value = payload
        const { data } = getLocation(payload, 'reverse')
        watch(data, () => name.value = data.value[0].name)
    }
    const handleSearchLocation = () => emit('searchLocation', name.value.split(' ')[0])
</script>

<template>
    <div class="map-modal">
        <Map 
            :address="address"
            @map-data="setMapData"
        />
        <MapData
            :mapData="mapData"
            @search-location="handleSearchLocation"
        />
    </div>
</template>

<style scoped lang="less">
    @import '../less/neo.less';
    .map-modal{
        margin-top: 20px;
        .neo();
        width: 100%;
        height: 570px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>