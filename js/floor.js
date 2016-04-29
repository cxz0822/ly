
;(function(){
    var floorLists=document.querySelector("#floorList");
    var fLis=document.querySelectorAll("#floorList>ul>li");

    for(var i=0;i<fLis.length;i++){
        fLis[i].floor=i;
        fLis[i].onclick=floorList;
    }
    window.onscroll=function(){
        computedDisplay();
        computedFloorList();
    };
    function computedFloorList(){
        var Top=document.documentElement.scrollTop||document.body.scrollTop;
        var Height=document.documentElement.clientHeight;
        floorLists.style.visibility=Top>Height?"visible":"hidden";
        if(Top>5000){
            floorLists.style.visibility="hidden";
        }
    }
    function floorList(){
        var dd=document.body||document.documentElement;
        var fAs=fLis[this.floor].querySelectorAll("#floorList>ul>li>a")[1];
        var label=document.getElementById(fAs.getAttribute("lhref"));
        var target=label.offsetTop;
        if((document.documentElement.scrollTop||document.body.scrollTop)==target){
            fAs[0].style.display="none";
        }
        var duration=500;
        var interval=10;
        var step=target/duration*interval;
        animate(dd,{scrollTop:target},target>1000?600:800);
    }




    var goTop=document.getElementById("goTop");
    //window.onscroll=computedDisplay;
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
    }
})();
;(function(){
    var input=document.querySelector("#c_search_text");
    var searchDiv=document.querySelector(".search");
    var hot=document.querySelector(".hottips");
    var that=null;
    input.onfocus=function(){
        that=this.value;
        this.value="";
        hot.style.display="none";
        searchDiv.style.display="block";
    }
    input.onblur=function(){
        this.value=that;
        hot.style.display="block";
        searchDiv.style.display="none";
    }
})();
