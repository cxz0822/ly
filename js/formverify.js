var fm = utils.getElementsByClass('fm');
var input1 = document.querySelectorAll(".fm>input");
var btn = utils.getElementsByClass("btn");
var promoted = document.getElementById("promoted");
var em=document.getElementsByTagName("em")[0];


for (var i = 0, len = fm.length; i < len; i++) {
    input1[i].index = i;
    var msg = null;
    input1[i].onfocus = function () {
        fm[this.index].style.border = "1px solid blue";
        msg = this.value;
        this.value = "";

    };
    input1[i].onblur = function () {
        this.value = msg;
        verify(fm[this.index]);
    };
    btn.onclick = function () {
        verify(fm[this.index]);
    }
}
function verify(fm){
    fm.style.border = "";
    var reg = / +/g;
    var reg1 = /^[1-9]\d{10}$/;
    if (!reg1.test(this.value)) {
        fm.style.border = "1px solid orangered";
        promoted.style.display = "block";
        em.style.display = "block";
        promoted.innerHTML = "请输入正确的" + msg;
    } else {
        fm[this.index].style.border = "";
    }

};