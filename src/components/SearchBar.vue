<script setup>
    const emit = defineEmits(['searchWeatherData'])
    const handleKeyDown = event => {
        emit('searchWeatherData', event.target.value)
        event.target.value = ''
        event.target.blur()
    }
</script>

<template>
    <div class="search-bar">
        <input 
            type="text" 
            placeholder="Search"
            @keydown.enter="handleKeyDown"
         >
    </div>
</template>

<style scoped lang="less">
    .search-bar{
        width: 100%;
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
    }
</style>