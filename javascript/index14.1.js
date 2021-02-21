    //实例化XMLHttpRequest对象
    const xhr0=new XMLHttpRequest();
    xhr0.open('get','http://musicapi.leanapp.cn/personalized?limit=8',true);//初始化一个get请求
    xhr0.onreadystatechange = ()=> {
        if(xhr0.readyState ===4){
            if((xhr0.status >= 200 &&xhr0.status < 300)||xhr0.status ==304){
                const res=JSON.parse(xhr0.responseText);
                console.log("请求成功");
                console.log(res)
                var ele=res.result[7].id;
                    //实例化XMLHttpRequest对象
const xhr1=new XMLHttpRequest();
xhr1.open('get','http://musicapi.leanapp.cn/playlist/detail?id='+ele,true);//初始化一个get请求
xhr1.onreadystatechange = ()=> {
    if(xhr1.readyState ===4){
        if((xhr1.status >= 200 &&xhr1.status < 300)||xhr1.status ==304){
            const res=JSON.parse(xhr1.responseText);
            console.log("请求成功");
            console.log(res);
            var list=document.querySelector('#list')
            var html1='';
            res.playlist.trackIds.forEach(function(item){
                const xhr2=new XMLHttpRequest();
xhr2.open('get','http://musicapi.leanapp.cn/song/detail?ids='+item.id,true);//初始化一个get请求
xhr2.onreadystatechange = ()=> {
    if(xhr2.readyState ===4){
        if((xhr2.status >= 200 &&xhr2.status < 300)||xhr2.status ==304){
            const res=JSON.parse(xhr2.responseText);
            console.log("请求成功");
            console.log(res);
            html1 +=`
                <div>
                <p>${res.songs[0].al.name}</p>
                <br>
                </div>`
            list.innerHTML=html1;
            
        }else{
            console.log("请求失败");
        }
    }
};
//发送请求
xhr2.send();
               })



        }else{
            console.log("请求失败");
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
    xhr0.send();