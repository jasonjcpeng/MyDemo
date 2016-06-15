/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function foo(a,div){
    var result= a+10;
    if(div===""){
        return result;
    }else{
        div.innerHTML = result;
    }
}

