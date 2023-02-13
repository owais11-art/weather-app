<script setup>
    import locationIcon from '../assets/location.svg'
    const emit = defineEmits(['searchWeatherData', 'setDisplayMap'])
    const handleKeyDown = event => {
        emit('searchWeatherData', event.target.value)
        event.target.value = ''
        event.target.blur()
    }
    const handleClick = () => emit('setDisplayMap')
</script>

<template>
    <div class="search-bar">
        <input 
            type="text" 
            placeholder="Search"
            @keydown.enter="handleKeyDown"
         >
         <div class="icon" title="Map" @click="handleClick">
            <img :src="locationIcon" alt="location-icon">
         </div>
    </div>
</template>

<style scoped lang="less">
    @import '../less/neo.less';
    .search-bar{
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        padding: 0 10px;
        border-radius: 6px;
        background: #40e0d0;
        box-shadow: inset 5px 5px 13px #36bcaf,
                    inset -5px -5px 13px #4afff1;
        input{
            border: none;
            outline: none;
            background-color: transparent;
            width: 100%;
            font-family: 'Roboto Mono', monospace;
            padding: 10px;
            color: #444;
            font-weight: bolder;
            font-size: 18px;
        }
        .icon{
            width: 30px;
            height: 30px;
            .neo();
            border-radius: 50%;
            padding: 5px;
            cursor: pointer;
            &:hover{
                .neo-load();
            }
        }
    }
</style>