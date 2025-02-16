<div style="display: block;">
    <img src="/corcle.png">
    <img src="/corcle.png" class="img2">
    <img src="/corcle.png" class="img3">
</div>

<style>
    div{
        position: relative;
        width: 75px;
        margin-left: auto;
        margin-right: auto;
    }
    img{
        position: absolute;
        width: 75px;
        height: 75px;
        top: 0;
        left: 0;
        animation-name: loading;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;

    }
    .img2{
        position: absolute;
        width: 50px;
        height: 50px;
        top: 12px;
        left: 12px;
        animation-name: inverseloading;

    }
    .img3{
        position: absolute;
        width: 30px;
        height: 30px;
        top: 22px;
        left: 22px;
        animation-duration: 1.5s;
    }

    @keyframes loading{
        from {
            rotate: 0deg;
        }
        to{
            rotate: 360deg;
        }
    }
    @keyframes inverseloading{
        from {
            rotate: 0deg;
        }
        to{
            rotate: -360deg;
        }
    }
</style>