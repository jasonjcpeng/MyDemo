/**
 *
 * Created by Jason on 2016/10/9.
 */
(function (window, document) {
    'use strict';
    var Tools = {
        getJsonp:function(url,data,callback){
            var fnName = 'jasonp_fun_name_'+Math.random().toString().replace('.','');
            window[fnName] = callback;
            var queryString = url.indexOf('?')===-1?'?':'&';
            for(var k in data){
                queryString+=k +'='+data[k]+'&';
            }
            queryString+='callback='+fnName;
            var scriptElement = document.createElement('script');
            scriptElement.src = url+queryString;
            document.body.appendChild(scriptElement);
        }
    }
    window.Tools = Tools;
})(window, document);