/**
 * Created by Suka1111 on 2016/5/12.
 */
module catgame{
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     */
    export function createBitmapByName(name:string):egret.Bitmap {
        var result:egret.Bitmap = new egret.Bitmap();
        var texture:egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }

    /**
     * 根据name关键字创建一个Movieclip对象。
     * */
    export function createMovieclip(name:string){
        var data = RES.getRes(name+"_json");
        var texture = RES.getRes(name+"_png");
        //创建动画工厂
        var mcDataFactory:egret.MovieClipDataFactory = new egret.MovieClipDataFactory(data, texture);
        //创建 MovieClip，将工厂生成的 MovieClipData 传入参数
        var mc:egret.MovieClip = new egret.MovieClip(mcDataFactory.generateMovieClipData(name));
        return mc;
    }
}