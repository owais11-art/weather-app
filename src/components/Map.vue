<script setup>
    import { watch, ref } from 'vue';
    import { getLocation } from '../composables/location';
    import svgMarkup from '../assets/location.svg'
    const props = defineProps(['address'])
    const emit = defineEmits(['mapData'])
    const { data } = getLocation(props.address)
    const latitude = ref(0)
    const longitude = ref(0) 
    let lastMarker = null
    const MAP_API_KEY = import.meta.env.VITE_MAP_API_KEY
    const emitMapData = payload => emit('mapData', payload)
    const mountMap = (prevCoords) => {
                          
        /**
         * Moves the map to display over Berlin
         *
         * @param  {H.Map} map      A HERE Map instance within the application
         */
        function createMarker(payload){
            const css = (element, styles) => {
                for(let property in styles){
                    element.style[property] = styles[property]
                }
            }
            const attrs = (element, attributes) => {
                for(let attr in attributes){
                    element.setAttribute(attr, attributes[attr])
                }
            }
            const markerWrapper = document.createElement('div')
            css(markerWrapper, {
                width: '30px',
                height: '30px',
                marginTop: '-30px',
                marginLeft: '-15px'
            })
            const markerImage = document.createElement('img')
            attrs(markerImage, {
                src: svgMarkup,
                alt: 'marker'
            })
            css(markerImage, {
                width: '100%',
                height: 'auto'
            })
            markerWrapper.append(markerImage)
            const markerIcon = new H.map.DomIcon(markerWrapper)
            return new H.map.DomMarker({
                lat: payload.lat,
                lng: payload.lon
            }, {icon: markerIcon})
        }
        function addMarkerToMap(map, payload={lat: 0, lon: 0}){
            lastMarker && map.removeObject(lastMarker)
            const marker = createMarker(payload)
            map.addObject(marker)
            lastMarker = marker
        }
        function moveMapToLocation(map, payload={lat: 0, lon: 0}){
            map.setCenter({
                lat: payload.lat,
                lng: payload.lon
            });
            map.setZoom(10);
            addMarkerToMap(map, payload)
            emitMapData(payload)
        }

        function setUpClickListener(map){
            map.addEventListener('tap', evt => {
                let coord = map.screenToGeo(evt.currentPointer.viewportX,
                                            evt.currentPointer.viewportY)
                
                const payload = {
                    lat: Math.abs(coord.lat),
                    lon: Math.abs(coord.lng)
                }

                moveMapToLocation(map, payload)
            })
        }
        
        /**
         * Boilerplate map initialization code starts below:
         */
        
        //Step 1: initialize communication with the platform
        // In your own code, replace variable window.apikey with your own apikey
        var platform = new H.service.Platform({
            apikey: MAP_API_KEY
        });
        var defaultLayers = platform.createDefaultLayers();
        
        //Step 2: initialize a map - this map is centered over Asia
        var map = new H.Map(document.getElementById('map'),
            defaultLayers.vector.normal.map,{
            center: {
                lat: latitude.value, 
                lng: longitude.value
            },
            zoom: 10,
            pixelRatio: window.devicePixelRatio || 1
        });
        // add a resize listener to make sure that the map occupies the whole container
        window.addEventListener('resize', () => map.getViewPort().resize());
        
        //Step 3: make the map interactive
        // MapEvents enables the event system
        // Behavior implements default interactions for pan/zoom (also on mobile touch environments)
        var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
        
        // Create the default UI components
        var ui = H.ui.UI.createDefault(map, defaultLayers);

        //Add event listener to map
        setUpClickListener(map)
        addMarkerToMap(map, prevCoords)
    }
    watch(data, () => {
        const [ { lat, lon } ] = data.value
        latitude.value = lat
        longitude.value = lon
        mountMap({lat, lon})
        emitMapData({lat, lon})
    })
</script>

<template>
    <div class="map-container">
        <div id="map"></div>
    </div>
</template>

<style scoped lang="less">
    @import '../less/neo.less';
    .map-container{
        flex-grow: 1;
        width: 100%;
        height: 470px;
        padding: 20px;
        #map{
            width: 100%;
            height: 100%;
        }
    }
</style>