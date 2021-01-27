var form = document.querySelector('#form');
var yhm = document.querySelector('#yhm');
var mm = document.querySelector('#mm');
var btn = document.querySelector('#tj');
btn.onclick = function(){

//实例化XMLHttpRequest对象
const xhr=new XMLHttpRequest();
xhr.open('get','http://musicapi.leanapp.cn?phone=+"yhm.value"+&password=+"mm.value"',true);//初始化一个get请求
xhr.onreadystatechange = ()=> {
    if(xhr.readyState ===4){
        if((xhr.status >= 200 &&xhr.status < 300)||xhr.status ==304){
            const res=JSON.parse(xhr.responseText);
            console.log("请求成功");
           var data=res;
           console.log(data);
        }else{
            console.log("请求失败");
        }
    }
};
//发送请求
xhr.send();}