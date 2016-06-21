/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//interview in netEasy 
//blur、focus、load和unload不能像其它事件一样冒泡。
//----------------------------------------------
//变量提升
(function () {
    var a = 1;
    function b() {
        
        if (!a) {
            var a = 10;
        }
        console.log(a);
    }
    b();
    //-------------------------------闭包
    var foo = function () {
        var arrs = [];
        for (var i = 0; i < 3; i++) {
            arrs.push(function () {
                return i;
            });
        }
        return arrs;
    };
    console.log(foo()[0]() + foo()[2]()); //结果为3+3 = 6；
    //--------------------------------

    console.log("" || "abc");
    var a = 2;
    a > 1 && console.log("a>1");
    a === 2 || console.log("||a=1");
    // && 运算符是 条件一判断为错误则停止执行，||运算符为 条件一判断为正确则停止执行
    //--------------------------------

    "" || console.log("空字符为false");
    null || console.log("null为false");
    //0、""、null、false、undefined、NaN都会判为false，其他都为true
    //--------------------------------
    //
    //假设对成长速度显示规定如下：成长速度为5显示1个箭头；成长速度为10显示2个箭头；成长速度为12显示3个箭头；成长速度为15显示4个箭头；其他都显示都显示0各箭头。用代码怎么实现？
    document.querySelector("#fun1").onclick = function () {
        var num = prompt("输入数量1-5");
        //简化写法 利用运算符
        var result = num == 1 && "一" || num == 2 && "二" || num == 3 && "三" || num == 4 && "四" || num == 5 && "五" || "NaN";
        //简化写法2 利用{} 与 数组类似的取值特性
        var result2 = {"1": "YI", "2": "ER", "3": "SAN", "4": "SI", "5": "WU"}[num] || "NaN";
        alert(result);
        alert(result2);
    };
    
    //-----------------------局部变量与成员变量
    function a(){
               var name = 'b';
               this.name = "a";
               this.foo = function(){
                   console.log(name);//这里访问局部变量
               };
               //一旦闭包 this将重新指向 foo访问a的成员变量 既this.name 将不可能  name将顺着作用域链查找foo中的局部变量name 成员变量name 以及全局变量的name  故可以将a中的成员变量指针this 定义为一个局部变量
               //总之闭包之后 闭包函数中的this将指向自己，而不再是外部函数
           }
           var a = new a();
           console.log(a.name);
})();

