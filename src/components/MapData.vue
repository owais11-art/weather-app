<script setup>
    defineProps(['mapData'])
    const emit = defineEmits(['searchLocation'])
    const handleClick = () => emit('searchLocation')
</script>

<template>
    <div class="map-data">
        <div class="latitude">
            <label for="lat">Latitude</label>
            <div id="lat">{{ mapData.lat.toFixed(4) }}</div>
        </div>
        <div class="longitude">
            <label for="lon">Longitude</label>
            <div id="lon">{{ mapData.lon.toFixed(4)  }}</div>
        </div>
        <div class="search">
            <button @click="handleClick">Search</button>
        </div>
    </div>
</template>

<style scoped lang="less">
    @import '../less/neo.less';
    .map-data{
        .neo();
        display: flex;
        align-items: center;
        gap: 30px;
        margin-bottom: 20px;
        padding: 10px;
        flex-grow: 1;
        .latitude, .longitude{
            display: flex;
            flex-direction: column;
            gap: 8px;
            label{
                font-weight: bold;
            }
            div{
                .neo();
                flex-grow: 1;
                height: 40px;
                padding: 10px;
                color: #444;
            }
        }
        .search{
            align-self: flex-end;
            button{
                border: none;
                .neo-up();
                background-color: #40e0d0;
                padding: 13px 30px;
                cursor: pointer;
                font-weight: bolder;
                &:hover{
                    .neo-load();
                    font-weight: bold;
                }
            }
        }
    }
</style>