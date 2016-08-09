
module catgame
{
    /**
     * 猫
     */
    export class Cat extends egret.Sprite
    {
        public node : catgame.Node;
        private isWeizhu : boolean = false;
        public static standmc : egret.MovieClip;
        public static weizhumc : egret.MovieClip;


    	public constructor() {
            super();
            var data = RES.getRes("bing_json");
            var texture = RES.getRes("bing_png");
            var mcDataFactory:egret.MovieClipDataFactory = new egret.MovieClipDataFactory(data, texture);
            Cat.standmc = new egret.MovieClip(mcDataFactory.generateMovieClipData("stay"));
            Cat.standmc.gotoAndPlay("staydrun",-1);

            /*data = RES.getRes("weizhu_json");
            texture = RES.getRes("weizhu_png");*/
            var mcDataFactory:egret.MovieClipDataFactory = new egret.MovieClipDataFactory(data, texture);
            Cat.weizhumc = new egret.MovieClip(mcDataFactory.generateMovieClipData("weizhu"));
            Cat.weizhumc.gotoAndPlay("weizhurun",-1);

//            this.anchorOffsetX = this.x + this.width * 0.5;
//            this.anchorOffsetY = this.y + this.height;
            this.stay();
        }

        public init():void{
            this.isWeizhu = false;
            this.stay();
        }

        /**走一步 , 行走动画啥的**/
        public run(pos:number[]):void{
            this.x = pos[0];
            this.y = pos[1];
            this.dispatchEventWith("catRun");
        }

        /**站定**/
        public stay():void{
            if(this.numChildren){
                this.removeChildAt(0);
            }
            if(this.isWeizhu){
                this.addChild(Cat.weizhumc);
                Cat.weizhumc.gotoAndPlay("weizhurun",-1);
            }else{
                this.addChild(Cat.standmc);
                Cat.standmc.gotoAndPlay("staydrun",-1);
            }
        }

        public weizhu(){
            this.isWeizhu = true;
            this.stay();
        }

        /**成功动画**/
        public successShow():void{

        }
        /**失败动画**/
        public failShow():void{

        }
    }
}