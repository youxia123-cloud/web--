//实例化XMLHttpRequest对象
const xhr=new XMLHttpRequest();
xhr.open('get','http://musicapi.leanapp.cn/personalized?limit=8',true);//初始化一个get请求
xhr.onreadystatechange = ()=> {
    if(xhr.readyState ===4){
        if((xhr.status >= 200 &&xhr.status < 300)||xhr.status ==304){
            const res=JSON.parse(xhr.responseText);
            console.log("请求成功");
            console.log(res);
            var div1=document.getElementById('img');
            var text=`
                <img src="${res.result[6].picUrl}">
                <h1>${res.result[6].name}</h1>
                <p>${res.result[6].copywriter}</p>
                `
            div1.innerHTML=text;

            var ele=res.result[6].id
            console.log(ele)
            //实例化XMLHttpRequest对象
const xhr1=new XMLHttpRequest();
xhr1.open('get','http://musicapi.leanapp.cn/playlist/detail?id='+ele,true);//初始化一个get请求
xhr1.onreadystatechange = ()=> {
    if(xhr1.readyState ===4){
        if((xhr1.status >= 200 &&xhr1.status < 300)||xhr.status ==304){
            const res=JSON.parse(xhr1.responseText);
            console.log("请求成功");
           console.log(res);
           var div = document.querySelector('#content');
           var html='';
           let i=1;
           res.playlist.trackIds.forEach(function(item){
            html +=`
                    <div>
                    <span>${i}</span>
                    <audio controls>
                    <source src="https://music.163.com/song/media/outer/url?id=${item.id}.mp3" type="audio/mp3">
                    </audio>
                    </div>`
                    i++;
           })
           div.innerHTML = html;
           var x=document.getElementsByTagName('audio');
           var btn1=document.querySelector('#btn1')
btn1.onclick=function(){
    for(i=0;i<x.length;i++){
        if(x[i].currentTime!=0){
            x[i].currentTime=0;
            x[i].pause();
            if(i==0){
                x[0].play();
                return
            }
            x[i-1].play();
        }
    }
}
var btn2=document.querySelector('#btn2');
btn2.onclick=function(){
    for(i=0;i<x.length;i++){
        x[i].pause();
    }
   
}
var btn3=document.querySelector('#btn3');
btn3.onclick=function(){
    for(i=0;i<x.length;i++){
        if(x[i].currentTime!=0){
            x[i].play();
        }
    }
}
var btn4=document.querySelector('#btn4');
btn4.onclick=function(){
        for(i=0;i<x.length;i++){
            if(x[i].currentTime!=0){
                x[i].currentTime=0;
                x[i].pause();
                if(i==x.length-1){
                    x[x.length-1].play();
                    return
                }
                x[i+1].play();
            }
        }
    }


           //实例化XMLHttpRequest对象
const xhr2=new XMLHttpRequest();
xhr2.open('get','http://musicapi.leanapp.cn/comment/playlist?id='+ele,true);//初始化一个get请求
xhr2.onreadystatechange = ()=> {
    if(xhr2.readyState ===4){
        if((xhr2.status >= 200 &&xhr2.status < 300)||xhr2.status ==304){
            const res=JSON.parse(xhr2.responseText);
            console.log("请求成功");
            console.log(res);
            var div1=document.querySelector('#footer');
            var html1='';
            res.comments.forEach(function(item){
                html1 +=`
                <div>
                <img src="${item.user.avatarUrl}">
                <span>${item.user.nickname}:</span>
                <p>${item.content}</p>
                </div>
                `
            })
            div1.innerHTML=html1;

         
        }else{
            console.log("请求失败");
        }
    }
};
//发送请求
xhr2.send();

        }else{
            console.log("请求失败");
            alert("服务器加载错误，请刷新页面");
        }
    }
};
//发送请求
xhr1.send();
        }else{
            console.log("请求失败");
        }
    }
};
//发送请求
xhr.send();







