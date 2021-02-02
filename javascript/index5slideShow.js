         //获取元素样式
function getStyle(ele, style) {
    // 判断 window 里面有没有 getComputedStyle()
    if ('getComputedStyle' in window) {
      // 标准浏览器
      return window.getComputedStyle(ele)[style]
    } else {
      // IE 低版本
      return ele.currentStyle[style]
    }
  }
          //运动函数
  function move(ele, target, fn = () => {}) {
    let count = 0
    for (let key in target) {
      if (key === 'opacity') target[key] *= 100
      count++
      let timer = setInterval(() => {
        let current = key === 'opacity' ? getStyle(ele, 'opacity') * 100 : parseInt(getStyle(ele, key))
        let distance = (target[key] - current) / 10
        distance = distance > 0 ? Math.ceil(distance) : Math.floor(distance)
        if (current === target[key]) {
          clearInterval(timer)
          count--
          if (!count) fn()
        } else {
          ele.style[key] = key === 'opacity' ? (current + distance) / 100 : current + distance + 'px'
        }
      }, 10)
    }
  }
          //一、准备变量
          const imgBox = document.querySelector('.banner > ul');
          const pointBox = document.querySelector('.banner > ol');
          const banner = document.querySelector('.banner');
          const banner_width = banner.clientWidth;
          let timer = 0;
          let index = 1;
          //准备一个变量，当做是开关，解决鬼畜
          let flag = true;
  
         /* function setPoint(){
             let num= imgBox.children.length;
             const frg =document.createDocumentFragment();
             for(let i=0;i<num;i++){
                 const li =document.createElement('li');
                 if (i===0){
                     li.classList.add('active');
                     frg.appendChild(li)
                 }
             }pointBox.appendChild(frg)
             pointBox.style.width = num* 35 +'px';
  
          }*/
          //二、复制元素
          copyEle();
          function copyEle(){
              //1克隆节点
              const first = imgBox.firstElementChild.cloneNode(true);
              const last = imgBox.lastElementChild.cloneNode(true);
              //2插入节点
              imgBox.appendChild(first);
              //最后一张插入本来的第一张的前面
              imgBox.insertBefore(last,imgBox.firstChild);
              //根据最新的子元素数量来设置imgBox的宽度
              imgBox.style.width = imgBox.children.length * 100 + '%';
              //设置imgBox的定位关系
              imgBox.style.left = -banner_width + 'px';
                  }
          autoPlay()
          function autoPlay(){
              timer = setInterval(() =>{
              //三、通过move函数让imgBox动起来
                  index ++;
                  move(imgBox,{left:-index * banner_width},mmoveEnd)
  
              },5000)
                  }
              //四、运动结束
          function mmoveEnd(){
              //判断到最后一张的时候，瞬间定位到第一张
              if(index === imgBox.children.length - 1){
                  index=1;
                  //瞬间定位，直接赋值
                  imgBox.style.left = -index * banner_width +'px';
              }
              //判断到第0张的时候，瞬间定位到倒数第二张
              if(index ===0){
                  index = imgBox.children.length - 2;
                  imgBox.style.left = -index * banner_width + 'px';
              }
              //五、焦点配套
              for (let i =0;i <pointBox.children.length;i++){
                  pointBox.children[i].className = ''
              }
              pointBox.children[index - 1].className = 'active';
              //所有事情都做完了，已经可以正常切换到下一张了
              //把开关打开
              flag = true;
  
          }
          //六、移入移出的实现
          overOut();
          function overOut(){
              //移入的时候停止定时器，不能自动轮播
              banner.addEventListener('mouseover',() =>{clearInterval(timer)});
              //移出的时候再次开启自动轮播
              banner.addEventListener('mouseout',() =>{autoPlay()});
          }
          //七、点击事件的实现
          //绑定事件
          bindEvent();
          function bindEvent(){
              //事件委托的形式给banner绑定一个点击事件
              banner.addEventListener('click',e =>{
                  e= e||window.event;
                  const target = e.target || e.srcElement
                  //7.1判断点击的是右按钮
                  if(target.className === 'right'){
                      //判断开关是否是关闭的，如果是关闭的，如果关闭，就不执行后面的代码
                      if(!flag) return
                      //切换下一张
                      index++;
                      //调用move函数
                      move(imgBox,{left:-index * banner_width},mmoveEnd)
                      //move函数一执行，表示你要切换到下一张，就关闭开关
                      flag = false;
                  }
                  //7.2判断点击的是左按钮
                  if(target.className === 'left'){
                      if(!flag) return
                      //把开关打开
                      flag = true;
                      //切换上一张
                      index--;
                      //调用move函数
                      move(imgBox,{left:-index * banner_width},mmoveEnd)
                  }
                  //7.3判断点击的是焦点按钮
                  if(target.getAttribute('type') === 'point'){
                      if(!flag) return
                      //把开关打开
                      flag = true;
                      //拿到元素身上的索引
                      index = target.getAttribute('point_index') - 0;
                      console.log(index)
                      //调用move函数
                      move(imgBox,{left:-index * banner_width},mmoveEnd)
                      
                  }
              })
          }
          //八、切换标签页，解决鬼畜问题
          changeTab();
          function changeTab(){
              document.addEventListener('visibilitychange',() =>{
                  //document 身上有一个属性叫做 visibilityState表示页面的显示还是隐藏状态
                  if(document.visibilityState === 'hidden'){
                      //关闭定时器
                      clearInterval(timer);
                  }else if(document.visibilityState === 'visible'){
                      //再次开启自动轮播
                      autoPlay();
                  }
              })
          } 