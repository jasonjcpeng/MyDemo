/**
 * Created by Jason on 2016/8/22.
 */
require.config({
    baseUrl:'../',
    paths:{
        'jquery-mobile':'JqueryMobile/jquery.mobile-1.4.5',
        'jquery':'Jquery/jquery-1.12.4'
    }
});

require(['jquery','jquery-mobile'],function($,$M){
    try{
        if($){
            console.log('jquery加载完成！');
        }else{
            console.log('jquery加载失败！');
        }
        $M?console.log('jquery加载完成！'):console.log('jquery加载失败！');
    }catch(e){
        console.log(e);
    }

});