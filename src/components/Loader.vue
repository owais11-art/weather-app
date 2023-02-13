<template>
    <div class="loader-container">
        <div class="loader">
            <div class="bar bar-one"></div>
            <div class="bar bar-two"></div>
            <div class="bar bar-three"></div>
        </div>
    </div>
</template>

<style scoped lang="less">
    @import '../less/neo.less';
    .loader-container{
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        display: grid;
        place-items: center;
        background-color: rgba(11, 187, 169, 0.7);
        .loader{
            width: 80px;
            height: 80px;
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            gap: 10px;
            padding: 20px;
            .neo-load();
            border-radius: 6px;
            .bar{
                flex-basis: 33%;
                .neo();
                border-radius: 3px;
            }
            .bar-one{
                height: 30%;
                animation-name: bar-one;
                animation-duration: .5s;
                animation-iteration-count: infinite;
                animation-direction: alternate;
            }
            .bar-two{
                height: 50%;
                animation-name: bar-two;
                animation-duration: .5s;
                animation-iteration-count: infinite;
                animation-direction: alternate;
            }
            .bar-three{
                height: 100%;
                animation-name: bar-three;
                animation-duration: .5s;
                animation-iteration-count: infinite;
                animation-direction: alternate;
            }
            @keyframes bar-one {
                0%{
                    height: 30%;
                }
                100%{
                    height: 100%;
                }
            }
            @keyframes bar-two {
                50%{
                    height: 100%;
                }
                100%{
                    height: 30%;
                }
            }
            @keyframes bar-three {
                0%{
                    height: 100%;
                }
                100%{
                    height: 30%;
                }
            }
        }
    }
</style>