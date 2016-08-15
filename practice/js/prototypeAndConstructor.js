/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    function foo() {
        this.value = 11;
    }
    foo.prototype = {
        method: function () {
            console.log("From foo.prototype.method()");
        }
    };

    function bar() {
        this.barv = 123;
    }

    bar.prototype = new foo();//将foo的原型赋给bar；至于为什么不是 bar.prototype = foo.prototype  因为一旦bar的原型进行修改也会破坏foo的原型
    //当重新定义了 foo.prototype 时 等同于做了如下操作
    //foo.prototype = new Object({
    //   method:function(){
    //     console.log("From foo.prototype.method()");
    //   }  
    // });
    //于是foo.prototyle.constructor === Object     故而需要重新覆盖constructor
    //总而言之是为了使其正确回溯原型链
    bar.prototype.foo = "Hello world";
    bar.prototype.constructor = bar;
    var b = new bar();
    console.log(b);
    //----------------------------call继承---------查找是否有非原型属性
    function person(name, age) {
        this.age = age;
        this.init.call(this, name);
        this.sayName = function () {
            console.log("Name is" + this.name);
        };
    }

    person.prototype = {
        init: function (name) {
            this.name = name;
        },
        sayHi: function (msg) {
            console.log("Say" + msg);
        }
    };
    person.prototype.constructor = person;
    var ming = new person('小明');
    console.log(ming);
    ming.sayName();
    (function () { //加入新作用域；n 将不能在外部调用
        for (var n in ming) {
            ming.hasOwnProperty(n) && console.log(n) + "1" || console.log(n);
        }
    })();
    //-------------------------------上述代码内部变量私有化
    function newperson(name, age) {
        this.age = age;
        this.init.call(this, name);
        this.sayName = function () {
            console.log(this);
            console.log("Name is" + this.name);
        };
        return {name: this.name, age: this.age, sayName: this.sayName};
    }

    newperson.prototype = {
        init: function (name) {
            this.name = name;
        },
        sayHi: function (msg) {
            console.log("Say" + msg);
        }
    };
    newperson.prototype.constructor = newperson;
    var ming = new newperson('小明', 12);
    console.log(ming);
    ming.sayName();
    (function () { //加入新作用域；n 将不能在外部调用
        for (var n in ming) { //如何通过JavaScript对象中的成员变量迭代
            ming.hasOwnProperty(n) && console.log(n) + "1" || console.log(n);
        }
    })();
})();


