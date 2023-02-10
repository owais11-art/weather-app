<script setup>
    defineProps(['forecast'])
</script>

<template>
    <div class="weeks-data">
        <h5>Seven Days Forecast</h5>
        <div class="seven-days">
            <div 
                class="day"
                v-for="data in forecast"
            >
                <div class="week-day">
                    {{ data.day }}
                </div>
                <div class="conditions">
                    <div class="icon">
                        <img :src="data.icon" alt="weather-icon">
                    </div>
                    <div class="temprature">
                        {{ data.temp }}&deg;C
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="less">
    @import '../less/neo.less';
    .weeks-data{
        font-weight: bolder;
        h5{
            margin-bottom: 10px;
        }
        .seven-days{
            .neo();
            display: flex;
            flex-direction: column;
            gap: 20px;
            padding: 15px;
            .day{
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 8px;
                .neo-up();
                border-radius: 6px;
                .conditions{
                    flex-grow: 1;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
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
    }
</style>