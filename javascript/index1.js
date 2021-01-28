var btn=document.querySelector('#submit');
btn.onclick=function(){

var xmlhttp;
if (window.XMLHttpRequest){//IE7+, Firefox, Chrome, Opera, Safari
       xmlhttp=new XMLHttpRequest();
}
else{// IE6, IE5
       xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
}
//上面的http请求对象的生成做了一个浏览器兼容性处理
var adminName = document.getElementById('adminName').value;//获取html表单中adminName输入域对象的值，既账号
var psw = document.getElementById('psw').value;//获取html表单中pwd输入域对象的值，既密码          
 
xmlhttp.onreadystatechange=function(){
//当接受到响应时回调该方法
        if (xmlhttp.readyState==4 && (xmlhttp.status==200||xmlhttp.status==0))
        {
                    var tip = document.getElementById('tip');//获取html的tip节点，主要用于输出登录结果
                    var text = xmlhttp.responseText;//使用接口返回内容，响应内容
                    var resultJson = eval("("+text+")");//把响应内容对象转成javascript对象
                    var result = resultJson.result;//获取json中的result键对应的值
                    var code = resultJson.code;//获取json中的code键对应的值
                    if (result=="fail") {//登录失败
                        if(code==101){
                            tip.innerHTML = "密码错误!"
                        }else if(code==102){
                            tip.innerHTML = "用户不存在!"
                        }
                    }else //登录成功        if(result=="success"&&code==100){
                        window.open("../html/index3.html");//跳转到index3.html页面
                    }
          }

 xmlhttp.open("POST","http://musicapi.leanapp.cn/login/cellphone?phone="+adminName+"&password="+psw+new Date().getTime(),true);//以POST方式请求该接口
 xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");//添加Content-type
 xmlhttp.send("adminName="+adminName+"&psw="+psw);//发送请求参数间用&分割
}
