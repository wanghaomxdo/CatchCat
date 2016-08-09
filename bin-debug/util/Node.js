/**
 * Created by zen on 14-7-13.
 */
var catgame;
(function (catgame) {
    /**
     * 地图
     */
    var Node = (function (_super) {
        __extends(Node, _super);
        function Node(__posx, __posy) {
            _super.call(this);
            var texture = RES.getRes("pot1_png");
            this.posx = __posx;
            this.posy = __posy;
            _super.call(this, texture);
            //this.anchorX = this.anchorY = 0.5;
            this.anchorOffsetX = this.x + this.width * 0.5;
            this.anchorOffsetY = this.y + this.height * 0.5;
            this.fill = false;
        }
        var d = __define,c=Node,p=c.prototype;
        p.doFillPot = function () {
            this.texture = RES.getRes("pot2_png");
            this.fill = true;
        };
        p.clean = function () {
            this.prenode = null;
        };
        p.getPos = function () {
            return [this.posx, this.posy];
        };
        p.isFill = function () {
            return this.fill;
        };
        return Node;
    }(egret.Bitmap));
    catgame.Node = Node;
    egret.registerClass(Node,'catgame.Node');
})(catgame || (catgame = {}));
