var search = document.querySelector('.search > input');
var btn = document.querySelector('.submit1');
btn.onclick = function(){
    //实例化XMLHttpRequest对象
const xhr=new XMLHttpRequest();
xhr.open('get','http://musicapi.leanapp.cn/search?keywords= '+search.value,true);//初始化一个get请求
xhr.onreadystatechange = ()=> {
    if(xhr.readyState ===4){
        if((xhr.status >= 200 &&xhr.status < 300)||xhr.status ==304){
            const res=JSON.parse(xhr.responseText);
            console.log("请求成功");
            console.log(res);





            
            var div = document.querySelector('#content');
            var html = '';
            var string1="https://music.163.com/song/media/outer/url?id=";
            var string2=".mp3";
            res.result.songs.forEach(function(item){     //循环数组
                html += `
                <div>
                <audio controls>${item.name}
                <source src="${string1}${item.id}${string2}" type="audio/mp3">
                </audio>
                <span>${item.name}</span>
                </div>
                    `
            })
            div.innerHTML= html;
        }else{
            console.log("请求失败");
        }
    }
};
//发送请求
xhr.send();
}

