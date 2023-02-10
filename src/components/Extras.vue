<script setup>
    import temp from '../assets/temp.svg'
    import humidity from '../assets/humidity.svg'
    import wind from '../assets/wind.svg'
    import uvindex from '../assets/uvindex.svg'
    defineProps(['extras'])
</script>

<template>
    <div class="extras">
                <div class="extra">
                    <div class="head">
                        <img :src="temp" alt="real-feel">
                        <h5>Real Feel</h5>
                    </div>
                    <p>{{ extras.realFeel }}&deg;</p>
                </div>
                <div class="extra">
                    <div class="head">
                        <img :src="humidity" alt="humidity">
                        <h5>Humidity</h5>
                    </div>
                    <p>{{ extras.humidity }}</p>
                </div>
                <div class="extra">
                    <div class="head">
                        <img :src="wind" alt="wind">
                        <h5>Wind</h5>
                    </div>
                    <p>{{ extras.wind }}KM/h</p>
                </div>
                <div class="extra">
                    <div class="head">
                        <img :src="uvindex" alt="uv-index">
                        <h5>UVIndex</h5>
                    </div>
                    <p>{{ extras.uvindex }}</p>
                </div>
            </div>
</template>

<style scoped lang="less">
    @import '../less/neo.less';
    .extras{
                width: 100%;
                height: 200px;
                padding: 15px;
                @media(min-width: 900px){
                    width: 400px;
                }
                overflow-y: scroll;
                &::-webkit-scrollbar {
                 width: 5px;
                }
                &::-webkit-scrollbar-track{
                    background: transparent;
                }
                &::-webkit-scrollbar-thumb{
                    border-radius: 6px;
                    background-color: #03ae9d;
                }
                .neo();
                display: flex;
                gap: 10px;
                flex-wrap: wrap;
                .extra{
                    flex-basis: 40%;
                    flex-grow: 1;
                    font-weight: bolder;
                    .neo-up();
                    border-radius: 6px;
                    padding: 10px;
                    p{
                        text-align: center;
                        margin-top: 10px;
                    }
                    .head{
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        gap: 5px;
                        img{
                            width: 50px;
                            height: 50px;
                        }
                    }
                }
            }
</style>