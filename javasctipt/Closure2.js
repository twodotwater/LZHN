"use strict"
function print(){
  var arr = [];
  for(var i=1;i<=3;i++){
      var n = function(){
        return i;
      };
      arr.push(n);
  }
  console.log("***");
  for(var a of arr){
    console.log(a());
  }
}
var res = print();
/*
4
4
4
*/