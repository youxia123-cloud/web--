/*实现登录功能*/
let btnLogin=document.querySelector('.creator_Center');
btnLogin.onclick = function(){
    window.open("../html/index1.html");
}
let btnLogin1=document.querySelector('.login');
btnLogin1.onclick = function(){
    window.open("../html/index2.html","登录",
            "height=600px,width=700px,top=30px, left=430px, toolbar=no, menubar=no, scrollbars=no, resizable=no,location=no, status=no")
}/*top=0 窗口距离屏幕上方的象素值
left=0 窗口距离屏幕左侧的象素值
toolbar=no 是否显示工具栏，yes为显示；
menubar，scrollbars 表示菜单栏和滚动栏
resizable=no 是否允许改变窗口大小，yes为允许；
location=no 是否显示地址栏，yes为允许；
status=no 是否显示状态栏内的信息（通常是文件已经打开），yes为允许*/
//实例化XMLHttpRequest对象
const xhr=new XMLHttpRequest();
xhr.open('get','http://musicapi.leanapp.cn/personalized?limit=8',true);//初始化一个get请求
xhr.onreadystatechange = ()=> {
    if(xhr.readyState ===4){
        if((xhr.status >= 200 &&xhr.status < 300)||xhr.status ==304){
            const res=JSON.parse(xhr.responseText);
            console.log("请求成功");
            console.log(res);
            var div = document.querySelector('#content');
            var html = '';
            let i=8
            res.result.forEach(function(item){     //循环数组
                //console.log(item);
                html += `
                    <div>
                    <ul>
                    <li><img src="${item.picUrl}"></li>
                    </ul>
                    <p><a href="../html/index${i}.html">${item.name}</a></p>
                    </div>   `
                    i++;
                    
            })
            div.innerHTML= html;
        }else{
            console.log("请求失败");
        }
    }
};
//发送请求
xhr.send();
