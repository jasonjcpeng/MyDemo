/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
prototype = function(){
    function Person(){
        this.body = {
            leg:2,
            arm:2
        };
    }
    Person.prototype.say=function(message){
        console.log(message);
    };
    
    function Man(name){
        Person.call(this);
        this.name =name; 
    }
    Man.prototype = new Person();
    Man.prototype.constructor =Man;
    
    var oJohn = new Man("John");
    oJohn.say("Hello");
    console.log(oJohn);
    
};

