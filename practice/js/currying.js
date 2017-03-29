/**
 * Created by JasonPeng on 2017/3/29.
 * 柯里化 使用一个柯里化函数作为中间件，可以使某个函数（这个函数可以作为其他函数的组合，这样就成为了组合柯里化函数）
 * 由传入很多参数转化成传入单一参数。借助这个中间件函数中的变量以及闭包保存作用域的特性做临时存储，
 * 可以达到将这个函数延迟调用的作用（具体实现就是判断返回业务逻辑函数还是递归自己）
 */
'use strict'
const add = (x,y)=>{
    return x+y;
}
const multiply = (x,y)=>{
    return x*y;
}

const multiplicity=(...param)=>{
    let result = 0;
    param.forEach((v,k,arr)=>{
        if(arr[k+1]){
            result += multiply(add(arr[k],arr[k+1]),arr[k+1]);
        }
    });
    return result;
}

const currying = (fn)=>{
    let _arr = [];
    let curringFun = (...param)=>{
        if(param.length===0){
            return fn.apply(this,_arr);
        }else{
            for(let i in param){
                _arr.push(param[i]);
            }
            return curringFun.bind(this);
        }
    }
    return curringFun;
}
let func = currying(multiplicity);

console.log(func(2,4,3)(3)(5));
console.log(func());