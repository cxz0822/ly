~function () {

    function TabChange(container, defaultIndex) {
        return this.init(container, defaultIndex);
    }

    TabChange.prototype = {
        constructor: TabChange,
        //->按照索引来设置默认选中的页卡
        defaultIndexEven: function () {
            utils.addClass(this.oLis[this.defaultIndex], "selected");
            utils.addClass(this.divList[this.defaultIndex], "selected");
        },
        //->事件委托实现绑定切换
        liveClick: function () {
            var _this = this;
            this.tabFirst.onclick = function (e) {
                e = e || window.event;
                e.target = e.target || e.srcElement;
                if (e.target.tagName.toLowerCase() === "li") {
                    _this.detailFn(e.target);
                } else if (e.target.tagName.toLowerCase() === "a") {
                    _this.detailFn1(e.target);
                }
            };
        },
        detailFn: function (curEle) {
            var index = utils.index(curEle);
            utils.addClass(curEle, "selected");
            for (var i = 0; i < this.divList.length; i++) {
                i === index ? utils.addClass(this.divList[i], "selected") : (utils.removeClass(this.divList[i], "selected"), utils.removeClass(this.oLis[i], "selected"));
            }
        },
        detailFn1: function (curEle) {
            var index = utils.index(curEle);
            utils.addClass(curEle, "a" + index);
            for (var i = 0; i < this.divList.length; i++) {
                i === index ? utils.addClass(this.divList[i], "selected" ) : (utils.removeClass(this.divList[i], "selected"), utils.removeClass(this.oLis[i], "a" + i));
            }
        }
        ,
        //->初始化,也是当前插件的唯一入口
        init: function (container, defaultIndex) {
            this.container = container || null;
            this.defaultIndex = defaultIndex || 0;
            this.tabFirst = utils.firstChild(this.container);

            this.tabOptions = utils.lastChild(this.tabFirst);
            this.oLis = utils.children(this.tabOptions);


            this.divTab = utils.lastChild(this.container);
            this.divLists = utils.lastChild(this.divTab);
            this.divList = utils.children(this.divLists);


            this.defaultIndexEven();
            this.liveClick();

            return this;
        }
    };

    window.zhufengTab = TabChange;
}();
var boxList = utils.getElementsByClass("tfbox");
for (var i = 0, len = boxList.length; i < len; i++) {

    new zhufengTab(boxList[i]);
}
