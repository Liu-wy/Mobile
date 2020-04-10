window.onload = function(){
    onscroll();
    clock();
}

// 顶部随着滑动变化
var header = document.getElementsByClassName("header")[0];
var loop = document.getElementsByClassName("loop")[0];
var loopH = loop.offsetHeight;
//滚动事件
window.onscroll = function(){
    // 获取卷进去的高度
    //高度小于轮播图高度时透明度变小
    //高度大于轮播图高度时不透明
    var top = document.documentElement.scrollTop;
    if(top == 0){
        header.style.background = "rgba(201,21,35,1)";
    }
    else if(top > loopH){
        header.style.background = "rgba(201,21,35,1)";
    }else {
        var opacty = top/this.loopH*0.85;
        header.style.background = 'rgba(201,21,35,'+opacty+')'
    }


}

//倒计时
function clock(){
   var num = document.getElementsByClassName("sec-time");
   
   //获取初始时间
    var time = 5 * 60 * 60;
    var timer = setInterval(function(){
        time--;
        var hour = Math.floor(time/60/60);
        var min = Math.floor(time/60%60);
        var sec = Math.floor(time%60);

        num[0].innerHTML = hour>=10?Math.floor(hour/10):0;
        num[1].innerHTML = hour>=10?Math.floor(hour%10):hour;
        num[2].innerHTML = min>=10?Math.floor(min/10):0;
        num[3].innerHTML = min>=10?Math.floor(min%10):min;
        num[4].innerHTML = sec>=10?Math.floor(sec/10):0;
        num[5].innerHTML = sec>=10?Math.floor(sec%10):sec;

        


    },1000)

}
var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });