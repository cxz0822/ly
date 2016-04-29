var DOM={};
DOM.getIndex=function(ele){
    var index=0;
    var e=ele.previousSibling;
    while(e){
        if(e.nodeType===1){
            index++;
        }
        e= e.previousSibling;
    }
    return index;
};
DOM.addClassName=function(ele,str){
    var reg=new RegExp("(^| )"+str+"( |$)");
    if(!reg.test(ele.className)){
        ele.className+=" "+str;
    }
};
DOM.removeClassName=function(ele,str){
    var reg=new RegExp("(^| )"+str+"( |$)","g");
    if(reg.test(ele.className)){
        ele.className=ele.className.replace(/ /,"   ");
        ele.className=ele.className.replace(reg," ");
    }
};
DOM.siblings=function(ele){
    var a=[];
    var p=ele.parentNode;
    var children= p.children;
    for(var i=0;i<children.length;i++){
        if(children[i].nodeType===1&&children[i]!=ele){
            a.push(children[i]);
        }
    }
    return a;
};
DOM.children=function(parent,tagname){
    var a=[];
    var p=parent.childNodes;
    if(typeof tagname=="string"){
        tagname=tagname.toUpperCase();
        for(var i=0;i< p.length;i++){
            if(p[i].tagName===tagname){
                a.push(p[i]);
            }
        }
    }else if(tagname===undefined){
        for(var j=0;j< p.length;j++){
            if(p[j].nodeType===1){
                a.push(p[j]);
            }
        }
    }else{
        throw new Error("出错了")
   }
    return a;
};
DOM.offset=function(ele){
    var l=ele.offsetLeft;
    var t=ele.offsetTop;
    var p=ele.offsetParent;
    while(p){
        if(window.navigator.userAgent.indexOf("MSIE 8")===-1){
            l+= p.offsetLeft+ p.clientLeft;
            t+= p.offsetTop+ p.clientTop;
        }else{
            l+= p.offsetLeft;
            t+= p.offsetTop;
        }
        p= p.offsetParent;
    }
    return {left:l,top:t};
};
DOM.getElesByClass=function(str,context){
    str=str.replace(/^ +| +$/g,"");
    var aClassName=str.split(/ +/);
    context=context||document;
    var eles=context.getElementsByTagName("*");
    for(var i=0;i<aClassName.length;i++){
        var a=[];
        var reg=new RegExp("(^| )"+aClassName[i]+"( |$)");
        for(var j=0;j<eles.length;j++){
            if(reg.test(eles[j].className)){
                a.push(eles[j]);
            }
        }
        eles=a;
    }
    return eles;
};
DOM.listToArray=function(likeArray){
    try{
        return [].slice.call(likeArray);
    }catch(e){
        var a=[];
        for(var i=0;i<likeArray.length;i++){
            a[a.length]=likeArray[i];
        }
        return a;
    }
};
DOM.next=function(ele){
    if(typeof ele.nextElementSibling=="object"){
        return ele.nextElementSibling;
    }else{
        var p=ele.nextSibling;
        while(p){
            if(p.nodeType===1){
                return p;
            }
            p= p.nextSibling;
        }
        return null;
    }
};
DOM.previous=function(ele){
    if(typeof ele.previousElementSibling=="object"){
        return ele.previousElementSibling;
    }else{
        var p=ele.previousSibling;
        while(p){
            if(p.nodeType===1){
                return p;
            }
            p= p.previousSibling;
        }
    }
};
DOM.nextSiblings=function(ele){
    var a=[];
    if(typeof ele.nextElementSibling=="object"){
        var e=ele.nextElementSibling;
        while(e){
            a.push(e);
            e= e.nextElementSibling;
        }
    }else{
        var next=ele.nextSiblings;
        while(next){
            if(next.nodeType==1){
                a.push(next);
            }
            next=next.nextSiblings;
        }
        return null;
    }
    return a;
};
DOM.previousSiblings=function(ele){
    var a=[];
    if(typeof ele.previousElementSibling=="object"){
        var e=ele.previousElementSibling;
        while(e){
            a.push(e);
            e= e.previousElementSibling;
        }
    }else{
        var pre=ele.previous;
        while(pre){
            if(pre.nodeType==1){
                a.push(pre);
            }
            pre=pre.previous;
        }
        return null;
    }
    return a;
};
DOM.insertAfter=function(oldEle,newEle){
    oldEle.parentNode.insertBefore(newEle,oldEle.nextSiblings);
};
DOM.prepend=function(parent,child){
    parent.insertBefore(child,parent.firstChild);
};