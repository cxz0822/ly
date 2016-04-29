var oA = document.getElementById("guess_a");
var oAs = utils.children(oA, "a");
var oU = document.getElementById("guess_img");
var oLi = utils.children(oU, "li");
oAs[0].onclick=autoRight;
oAs[1].onclick=autoLeft;
var step=0;
function autoLeft(){
    step++;
    if(step>=5){
        oU.style.left=0;
        step=0;
    }
        oU.style.left=step*-202+"px";
}
function autoRight(){
    step--;
    if(step<0){
        oU.style.left="-1190px";
        step=4;
    }
    oU.style.left=step*-202+"px";
}



window.onload = function () {
    var s = document.querySelector("#showT");
    var close = document.querySelector(".btn");
    var qi = document.querySelector(".img1");
    s.style.width = "100%";
    close.onclick = function () {
        s.style.width = "0px";
        s.webkitTransition = "0.6s";
        window.setTimeout(function () {
            qi.style.visibility = "visible";
        }, 3000);
    }
    qi.onclick = function () {
        s.style.width = "100%";
        s.webkitTransition = "0.6s";
        qi.style.visibility = "hidden";
    }
}
