//函数的柯里化的应用

var save = function(fn) {
    var args = [];

    return function() {
        if (arguments.length === 0) {
            return fn.apply(this, args); // 没传参数时，调用这个函数
            /*  1. apply(obj,args)方法能劫持另外一个对象的方法，继承另外一个对象的属性
             2.Function.apply(obj,args)方法能接收两个参数
             3.obj：这个对象将代替Function类里this对象
             4.args：这个是数组，它将作为参数传给Function（args–>arguments）
             */
        } else {
            [].push.apply(args, arguments); // 传入了参数，把参数保存下来
            /* [].push.apply()是一个数组合并的方法
            作用：将b追加到a里面，如果a为数组，也可以写成a.push(b) */
            return arguments.callee; // 返回这个函数的引用,arguments.callee表示引用当前正在执行的函数
        }
    }
}
var add = (function() {
    var money = 0;
    //实现传入参数的累加
    return function() {
        for (var i = 0; i < arguments.length; i++) {
            money += arguments[i];
        }
        return money;
    }
})();
add = save(add);
add(100); // 传入了参数，不真正求值
add(200); // 传入了参数，不真正求值
console.log(add()); // 求值并且输出300