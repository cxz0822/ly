
var oLi=document.getElementById("label");
var Lis=utils.children(oLi,"li");
var Div=document.getElementById("lunbo").getElementsByTagName("li");
for(var i=0;i<Lis.length;i++){
    Lis[i].s=i;
    Lis[i].onmouseover=function(){
        step=this.s;
        change(step);

    }
}
var step=0;
window.setTimeout(function(){
    window.setInterval(autoMove,2000);
},3000)
function autoMove(){
    step++;
    if(step>=8){
        step=0;
    }
    change(step);
}
var d=0;
function change(index){
    Lis[d].className="";
    Div[d].className="";
    Lis[index].className="current_color";
    Div[index].className="selected";
    d=index;
}
