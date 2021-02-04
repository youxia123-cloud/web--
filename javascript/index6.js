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
                <img src="${res.result[0].picUrl}">
                <h1>${res.result[0].name}</h1>
                <p>${res.result[0].copywriter}</p>
                `
            div1.innerHTML=text;

            var ele=res.result[0].id
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
           res.playlist.trackIds.forEach(function(item){
            html +=`
                    <div>
                    <audio controls>
                    <source src="https://music.163.com/song/media/outer/url?id=${item.id}.mp3" type="audio/mp3">
                    </audio>
                    </div>`
           })
           div.innerHTML = html;

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







