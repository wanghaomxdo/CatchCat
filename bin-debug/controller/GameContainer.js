var catgame;
(function (catgame) {
    /**
     * 主游戏容器
     */
    var GameContainer = (function (_super) {
        __extends(GameContainer, _super);
        function GameContainer() {
            _super.call(this);
            this.isWin = 0; // 0 , 1, 2 游戏中，赢了，输了
            this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        }
        var d = __define,c=GameContainer,p=c.prototype;
        /**初始化*/
        p.onAddToStage = function (event) {
            this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
            this.createGameScene();
        };
        /**创建游戏场景*/
        p.createGameScene = function () {
            this.stageW = this.stage.stageWidth;
            this.stageH = this.stage.stageHeight;
            //背景
            this.map = new catgame.Map();
            this.map.init();
            this.map.x = 35;
            this.map.y = this.stageH - 460;
            this.addChild(this.map);
            //猫咪
            this.cat = new catgame.Cat();
            //
            this.map.addEventListener("nodeClick", this.onNodeClick, this);
            this.map.addEventListener("weizhu", this.onWeiZhu, this);
            this.cat.addEventListener("catRun", this.onCatRun, this);
            //
            //开始按钮
            this.btnStart = catgame.createBitmapByName("btn_start_png"); //开始按钮
            this.btnStart.x = (this.stageW - this.btnStart.width) / 2; //居中定位
            this.btnStart.y = (this.stageH - this.btnStart.height) / 2; //居中定位
            this.btnStart.touchEnabled = true; //开启触碰
            this.btnStart.addEventListener(egret.TouchEvent.TOUCH_TAP, this.gameStart, this); //点击按钮开始游戏
            this.addChild(this.btnStart);
            this.morebtn = catgame.createBitmapByName("more_png"); //开始按钮
            this.morebtn.x = (this.stageW - this.morebtn.width) / 2; //居中定位
            this.morebtn.y = this.stageH - this.morebtn.height;
            this.morebtn.touchEnabled = true; //开启触碰
            this.morebtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.doMore, this); //点击按钮开始游戏
            this.scorePanel = new catgame.ScorePanel();
            this.successPanel = new catgame.SuccessPanel();
            this.successPanel.addEventListener("shareEvent", this.doShare, this);
            this.successPanel.addEventListener("replayEvent", this.doRestart, this);
            this.failPanel = new catgame.FailPanel();
            this.failPanel.addEventListener("shareEvent", this.doShare, this);
            this.failPanel.addEventListener("replayEvent", this.doRestart, this);
            //this.showResult(false);
        };
        p.onWeiZhu = function (event) {
            this.cat.weizhu();
        };
        p.doShare = function (event) {
            //share(this.map.tap , this.isWin);
        };
        p.doRestart = function (event) {
            this.gameStart(null);
        };
        p.doMore = function (event) {
            //showme();
        };
        p.gameStart = function (evt) {
            this.map.init();
            this.cat.init();
            this.cat.node = this.map.getNode([4, 4]);
            var pos = this.map.coverPos2Point([4, 4]);
            this.cat.x = pos[0];
            this.cat.y = pos[1] + 10;
            this.addChild(this.cat);
            if (this.btnStart.parent)
                this.removeChild(this.btnStart);
            if (this.successPanel.parent)
                this.removeChild(this.successPanel);
            if (this.failPanel.parent)
                this.removeChild(this.failPanel);
            if (this.morebtn.parent)
                this.removeChild(this.morebtn);
            this.map.unlock();
            this.isWin = 0;
            //entergame();
        };
        /**玩家完成围堵**/
        p.onNodeClick = function (event) {
            if (this.map.isExit(this.cat.node)) {
                this.showResult(false);
                return;
            }
            this.map.lock();
            var pathes = this.map.findPath(this.cat.node);
            if (pathes.length) {
                var path = pathes[0];
                var pos = this.map.coverPos2Point(path);
                this.cat.node = this.map.getNode(path);
                this.cat.run(pos);
            }
            else {
                //玩家胜利无路可走
                this.showResult(true);
            }
        };
        /**猫咪跳了一步**/
        p.onCatRun = function (event) {
            this.map.unlock();
        };
        p.showResult = function (b) {
            if (b) {
                this.successPanel.x = (this.stageW - this.successPanel.width) / 2;
                this.successPanel.y = (this.stageH - this.successPanel.height - this.morebtn.height) / 2;
                this.successPanel.score(this.map.tap);
                this.addChild(this.successPanel);
                this.isWin = 1;
            }
            else {
                this.failPanel.x = (this.stageW - this.failPanel.width) / 2;
                this.failPanel.y = (this.stageH - this.failPanel.height - this.morebtn.height) / 2;
                this.successPanel.score(this.map.tap);
                this.addChild(this.failPanel);
                this.isWin = 2;
            }
            this.addChild(this.morebtn);
        };
        return GameContainer;
    }(egret.DisplayObjectContainer));
    catgame.GameContainer = GameContainer;
    egret.registerClass(GameContainer,'catgame.GameContainer');
})(catgame || (catgame = {}));
