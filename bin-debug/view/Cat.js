var catgame;
(function (catgame) {
    /**
     * 猫
     */
    var Cat = (function (_super) {
        __extends(Cat, _super);
        function Cat() {
            _super.call(this);
            this.isWeizhu = false;
            var data = RES.getRes("bing_json");
            var texture = RES.getRes("bing_png");
            var mcDataFactory = new egret.MovieClipDataFactory(data, texture);
            Cat.standmc = new egret.MovieClip(mcDataFactory.generateMovieClipData("stay"));
            Cat.standmc.gotoAndPlay("staydrun", -1);
            /*data = RES.getRes("weizhu_json");
            texture = RES.getRes("weizhu_png");*/
            var mcDataFactory = new egret.MovieClipDataFactory(data, texture);
            Cat.weizhumc = new egret.MovieClip(mcDataFactory.generateMovieClipData("weizhu"));
            Cat.weizhumc.gotoAndPlay("weizhurun", -1);
            //            this.anchorOffsetX = this.x + this.width * 0.5;
            //            this.anchorOffsetY = this.y + this.height;
            this.stay();
        }
        var d = __define,c=Cat,p=c.prototype;
        p.init = function () {
            this.isWeizhu = false;
            this.stay();
        };
        /**走一步 , 行走动画啥的**/
        p.run = function (pos) {
            this.x = pos[0];
            this.y = pos[1];
            this.dispatchEventWith("catRun");
        };
        /**站定**/
        p.stay = function () {
            if (this.numChildren) {
                this.removeChildAt(0);
            }
            if (this.isWeizhu) {
                this.addChild(Cat.weizhumc);
                Cat.weizhumc.gotoAndPlay("weizhurun", -1);
            }
            else {
                this.addChild(Cat.standmc);
                Cat.standmc.gotoAndPlay("staydrun", -1);
            }
        };
        p.weizhu = function () {
            this.isWeizhu = true;
            this.stay();
        };
        /**成功动画**/
        p.successShow = function () {
        };
        /**失败动画**/
        p.failShow = function () {
        };
        return Cat;
    }(egret.Sprite));
    catgame.Cat = Cat;
    egret.registerClass(Cat,'catgame.Cat');
})(catgame || (catgame = {}));
