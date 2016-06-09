/* 
 * 三种模块化编程写法
 * 1.对象写法
 * 2.立即执行函数写法
 * 3.放大模式，宽放大模式
 */
var module1 = {
  _count:0,
  m1:function (){
      return this._count;
  },
  m2:function(){
        console.log("m2");
  }
};

var module = (function(){
    var _count=0;
    var m1 = function(){
        return _count;
    };
    var m2 = function(){
        console.log("m2");
    };
    return {m1:m1,m2:m2};
})();

var module3 = (function(mod){
    var _count,m1,m2;
    !isEmptyObject(mod) && ( _count = mod.m1());
    !isEmptyObject(mod) && ( m1 = mod.m1) || (m1 = function(){});
    !isEmptyObject(mod) && ( m2 = mod.m2)||(m2 = function(){});
    
    var m3 = function (){
       console.log("m3");  
    };
    var m4 = function (){
        return  _count;
    };
    return {m1:m1,m2:m2,m3:m3,m4:m4};
})(window.module2||{});

function isEmptyObject(obj){
    for(var n in obj){
        return false;
    }
    return true;
}
