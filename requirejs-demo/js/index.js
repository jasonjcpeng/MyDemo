/**
 *
 * Created by Jason on 2016/8/22.
 */
require.config({
    baseUrl:'../',
    paths: {
        'jquery': 'Jquery/jquery-1.12.4',
        'index-module':'requirejs-demo/js/index-module'
    }
});
require(['jquery','index-module'],function($,module){
    try{
        if($){
            console.log('Jquery加载成功！');
        }else{
            console.log('Jquery未正常工作！');
        }
    }catch(e){
        console.log(e);
        console.log('Jquery未正常工作！');
    }
    module.a();
});