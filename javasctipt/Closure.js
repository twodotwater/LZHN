/*闭包，函数返回函数*/
'use static'
function make_pow(y) {
  return function (x) {
    return Math.pow(x, y);
  }
}
var pow2 = make_pow(2);
pow2(3);

/*
9
*/