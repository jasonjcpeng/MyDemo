/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    //--------------------------------------
    var foo = 1;
    function bar() {
        if (!foo) {
            var foo = 10;
        }
        console.log(foo);
    }
    bar();
    console.log(foo);
    //--------------------------以下为实际执行代码，变量提升后编译器执行...
//            var foo;
//              foo = 1;
//            function bar(){
//                if(!foo){  // foo = undefined
//                   var foo = 10;
//                }
//                console.log(foo); //foo = 10;
//            }
//          

    //-------------------例二--------------------
    var a = 2;
    function b() {
        a = 10;
        return;
        function a() {
        }
    }
    b();
    console.log(a);
    //---------------------------提升后----------------
    var a;
    a = 1;
    function b() {
        function a() {
        }
        ;
        a = 10;
        return;
    }
    console.log(a);//a = 1; b()中的a 只是一个内部变量
    //-------------------------------------------   
})();


