/**
 * Created by Suka1111 on 2016/5/12.
 */
var catgame;
(function (catgame) {
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     */
    function createBitmapByName(name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }
    catgame.createBitmapByName = createBitmapByName;
    /**
     * 根据name关键字创建一个Movieclip对象。
     * */
    function createMovieclip(name) {
        var data = RES.getRes(name + "_json");
        var texture = RES.getRes(name + "_png");
        //创建动画工厂
        var mcDataFactory = new egret.MovieClipDataFactory(data, texture);
        //创建 MovieClip，将工厂生成的 MovieClipData 传入参数
        var mc = new egret.MovieClip(mcDataFactory.generateMovieClipData(name));
        return mc;
    }
    catgame.createMovieclip = createMovieclip;
})(catgame || (catgame = {}));
