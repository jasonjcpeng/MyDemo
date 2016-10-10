/**
 *
 * Created by Jason on 2016/10/10.
 */
var Tools = {
    ajax: function (opt) {
        var defaults = {
            type: 'GET',
            url: '',
            data: '',
            async: true,
            cache: true,
            contentType: 'application/json; charset=utf-8',
            beforeSend: {},
            success: function () {
            },
            error: function () {
            }
        }
        for (var k in opt) {
            defaults[k] = opt[k];
        }
        defaults.method = defaults.method.toUpperCase();    //处理 method
        defaults.cache = defaults.cache ? '' : '&' + new Date().getTime();//处理 cache
        if (defaults.method === 'GET' && (defaults.data || defaults.cache)) {
            defaults.url += '?' + defaults.data + defaults.cache;    //处理 url
        }
        var oXhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
        //和服务器建立联系，告诉服务器你要取什么文件
        oXhr.open(defaults.method, defaults.url, defaults.async);
        //判断是否跨域
        if (typeof(defaults.beforeSend) === 'function') {
            defaults.beforeSend(oXhr);
        }
        //发送请求
        if (defaults.method === 'GET') {
            oXhr.send(null);
        } else {
            oXhr.setRequestHeader("Content-type", defaults.contentType);
            oXhr.send(defaults.data);
        }
        //等待服务器回应
        oXhr.onreadystatechange=function(){
            if (oXhr.readyState === 4) {
                if (oXhr.status === 200)
                    defaults.success(oXhr);
                else {
                    defaults.error();
                }
            }
        };
    }

}