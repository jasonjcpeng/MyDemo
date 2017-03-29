/**
 * Created by JasonPeng on 2017/3/29.
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