'use strict'
function map(arr,func){
    var res = [];
    for(var x of arr){
       res.push(func(x));
    }
    return res;
}

function reduce(arr,func,...rest){
   if(rest.length == 0){ return reduce(arr,func,arr.length-1); }
    var n = rest[0];
    if(n == 1 ){
        return func(arr[n-1],arr[n]);
    }
    return func(reduce(arr,func,n-1),arr[n]);
}
function reduce2(arr,func){
    if(arr.length==2){return func(arr[0],arr[1]);}
    return func(reduce2(arr.slice(0,arr.length-1),func),arr[arr.length -1]);
}

function pow(x){return x*x; }
function sum(x,y){return x+y;}
var arr = [1,2,3,4];
var res = map(arr,pow);
console.log("map: " + res);
res = reduce(arr,sum);
console.log("reduce: " + res);
res = reduce2(arr,sum);
console.log("reduce2: " + res);