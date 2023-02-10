<script setup>
    defineProps(['forecast'])
</script>

<template>
    <div class="container">
        <h5>Todays Forecast</h5>
        <div class="todays-forecasts">
            <div 
                class="single-data"
                v-for="data in forecast"
            >
                <p class="time">{{ data.time }}</p>
                <div class="icon">
                    <img :src="data.icon" alt="weather-icon">
                </div>
                <div class="temprature">{{ data.temp }}&deg;</div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="less">
    @import '../less/neo.less';
    .container{
        margin-top: 40px;
        font-weight: bolder;
        user-select: none;
        .todays-forecasts{
            display: flex;
            overflow-x: scroll;
            justify-content: space-between;
            gap: 20px;
            padding: 20px;
            .neo();
            &::-webkit-scrollbar {
                 height: 5px;
            }
            &::-webkit-scrollbar-track{
                background: transparent;
            }
            &::-webkit-scrollbar-thumb{
                border-radius: 6px;
                background-color: #03ae9d;
            }
            .single-data{
                flex-basis: 50%;
                @media(min-width: 500px){
                    flex-basis: 30%;
                }
                @media(min-width: 1000px){
                    flex-basis: 15%;
                }
                flex-shrink: 0;
                flex-grow: 1;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 15px;
                padding: 5px;
                .neo-up();
                border-radius: 6px;
                .icon{
                    width: 50px;
                    height: 50px;
                    .neo();
                    border-radius: 50%;
                    padding: 5px;
                }
            }
        }
    }
</style>