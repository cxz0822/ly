
var goTop=document.getElementById("goTop");
window.onscroll=computedDisplay;
function computedDisplay(){
    var curTop=document.documentElement.scrollTop||document.body.scrollTop;
    var curHeight=196;
    goTop.style.visibility=curTop>curHeight?"visible":"hidden";
}
goTop.onclick=function(){
    this.style.visibility="hidden";
    var duration=1000;
    var interval=20;
    var target=document.documentElement.scrollTop||document.body.scrollTop;
    var step=target/duration*interval;
    var timer=window.setInterval(function(){
        var curTop=document.documentElement.scrollTop||document.body.scrollTop;
        if(curTop===0){
            window.clearInterval(timer);
        }
        curTop-=step;
        document.documentElement.scrollTop=curTop;
        document.body.scrollTop=curTop;
    },interval)
};