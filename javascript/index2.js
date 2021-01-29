//实例化XMLHttpRequest对象
const xhr=new XMLHttpRequest();
xhr.open('get','http://musicapi.leanapp.cn/top/playlist?limit=10&order=new',true);//初始化一个get请求
xhr.onreadystatechange = ()=> {
    if(xhr.readyState ===4){
        if((xhr.status >= 200 &&xhr.status < 300)||xhr.status ==304){
            const res=JSON.parse(xhr.responseText);
            console.log("请求成功");
            console.log(res);
            var div = document.querySelector('#content');
            var html = '';
            res.playlists.forEach(function(item){     //循环数组
                //console.log(item);
                html += `
                    <div>
                    <ul>
                    <li><img src="${item.coverImgUrl}"></li>
                    </ul>
                    <p>${item.name}</p>
                    </div>   `
            })
            div.innerHTML= html;
        }else{
            console.log("请求失败");
        }
    }
};
//发送请求
xhr.send();
