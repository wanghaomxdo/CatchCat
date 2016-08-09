/**
 * Created by zen on 14-7-13.
 */
var catgame;
(function (catgame) {
    /**
     * 成绩显示
     */
    var ScorePanel = (function (_super) {
        __extends(ScorePanel, _super);
        function ScorePanel() {
            _super.call(this);
            var g = this.graphics;
            g.beginFill(0x000000, 0.8);
            g.drawRect(0, 0, 400, 200);
            g.endFill();
            this.txt = new egret.TextField();
            this.txt.width = 400;
            this.txt.height = 200;
            this.txt.textAlign = "center";
            this.txt.textColor = 0xFFFFFF;
            this.txt.size = 24;
            this.txt.y = 60;
            this.addChild(this.txt);
        }
        var d = __define,c=ScorePanel,p=c.prototype;
        p.showScore = function (value) {
            var msg = value + "\n再来一次吧";
            this.txt.text = msg;
        };
        return ScorePanel;
    }(egret.Sprite));
    catgame.ScorePanel = ScorePanel;
    egret.registerClass(ScorePanel,'catgame.ScorePanel');
})(catgame || (catgame = {}));
