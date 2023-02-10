<script setup>
    import Extras from './Extras.vue'
    defineProps(['report'])
</script>

<template>
    <div class="current-weather">
        <div class="data">
            <div class="name-condition">
                <h2>{{ report.name }}</h2>
                <p>{{ report.current?.condition }}</p>
            </div>
            <div class="icon">
                <img :src="report.current?.icon" alt="weather-icon">
            </div>
        </div>
        <div class="temprature">
            <h2>{{ report.current?.temp }}&deg;C</h2>
            <Extras :extras="report.extras"/>
        </div>
    </div>
</template>

<style scoped lang="less">
    @import '../less/neo.less';
    .current-weather{
        width: 100%;
        margin-top: 20px;
        padding: 20px;
        .neo();
        .data{
            display: flex;
            gap: 50px;
            flex-direction: column;
            align-items: center;
            @media(min-width: 900px){
                flex-direction: row;
                justify-content: space-between;
            }
            .icon{
                width: 150px;
                height: 150px;
                .neo-up();
                border-radius: 50%;
                padding: 20px;
                img{
                    width: 100%;
                    height: auto;
                }
            }
            .name-condition{
                h2{
                    font-size: 52px;
                    font-weight: bolder;
                }
                p{
                    font-weight: bolder;
                }
            }
        }
        .temprature{
            margin-top: 80px;
            h2{
                font-size: 52px;
                font-weight: bolder;
                @media(min-width: 500px){
                    font-size: 92px;
                }
            }
            display: flex;
            flex-direction: column;
            gap: 30px;
            align-items: center;
            @media(min-width: 1100px){
                flex-direction: row;
                justify-content: space-between;
            }
        }
    }
</style>