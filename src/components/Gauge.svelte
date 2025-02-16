<div class="container">
    <div class="under">
        <img src="/corclequarter.png">
    </div>
    <div class="gauge">
    </div>
    <div class="text">
        Text
    </div>
</div>

<style>
    .container{
        width: 250px;
        height: 350px;
        margin-left: auto;
        margin-right: auto;
    }
    .gauge{
        position: relative;
        background-color: #141416;
        width: 150px;
        height: 150px;
        rotate: 45deg;
        top: 150px;
        left: 50px;
    }
    .under{
        position: absolute;
        display: block;
        width: 250px;
        height: 250px;
        rotate: -45deg;
        z-index: auto;
    }
    img{
        width: 250px;
        height: 250px;
    }
    @keyframes coolanimationbecauseimjustthatgood{
        
    }

</style>