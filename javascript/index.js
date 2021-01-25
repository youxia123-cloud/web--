/*实现登录功能*/
let btnLogin=document.querySelector('.creator_Center');
btnLogin.onclick = function(){
    window.open("../html/index1.html");
}
let btnLogin1=document.querySelector('.login');
btnLogin1.onclick = function(){
    window.open("../html/index2.html","登录",
            "height=600px,width=700px,top=30px, left=200px, toolbar=no, menubar=no, scrollbars=no, resizable=no,location=no, status=no")
}/*top=0 窗口距离屏幕上方的象素值
left=0 窗口距离屏幕左侧的象素值
toolbar=no 是否显示工具栏，yes为显示；
menubar，scrollbars 表示菜单栏和滚动栏
resizable=no 是否允许改变窗口大小，yes为允许；
location=no 是否显示地址栏，yes为允许；
status=no 是否显示状态栏内的信息（通常是文件已经打开），yes为允许*/
