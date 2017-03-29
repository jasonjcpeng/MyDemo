/**
 * Created by Jason on 2016/8/22.
 */
define(['jquery'],function($){
    var a = function(){
        try{
            if($){
                console.log('module-Jquery加载成功！');
            }else{
                console.log('module-Jquery未正常工作！');
            }
        }catch(e){
            console.log(e);
            console.log('module-Jquery未正常工作！');
        }
    }
    return {a:a};
});