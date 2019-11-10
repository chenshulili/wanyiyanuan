$(function(){
    $(".header1").load("./公共头部.html")
    $(".footer").load("./公共底部.html")

$(".lb").mouseover(function(){
    $("#prev").css("display","block")
    $("#next").css("display","block")
}).mouseout(function(){
   $("#prev").css("display","none")
   $("#next").css("display","none")
})
var gg =parseInt(window.location.search.substr(1))
 $.get("./json/xiangqingye.json",function(str){
   var gs = str[gg]
    $(`
         <span class="z-cur">${gs.title}</span>
    `).appendTo($(".m-crumbs"))
   //  轮播图   
    var imgs =gs.img;console.log(imgs)
    $(imgs).each(function(index,item){
      $(`
        <div class="swiper-slide">
          <img src="${imgs[index]}" alt="">
        </div>
      `).appendTo($(".swiper-wrappers"))
    })
   //  标题
   var list = gs.list;
   $(list).each(function(index,item){
     $(`
     <a href="JavaScript:;">${list[index]}</a>       
     `).appendTo($(".category .categoryGroup"))
   })
   var list1 = gs.lis;
   $(list1).each(function(index,item){
     $(`
     <a href="JavaScript:;">${list1[index]}</a>       
     `).appendTo($(".area .categoryGroup"))
   })
   // 大标题
   var item= gs.item;
   $(item).each(function(index,item){
     var that = $(item).index()
    $(`
    <div class="live">
      <div class="heads1">
        <p>${this.head}</p>
        <p>${this.head1}</p>
      </div> 
      <div class="body1">
      </div>
      </div>
    `).appendTo($(".lives"))
    var li = $(this.li)
    $(li).each(function(index,item){
      if(this.titles==""){
        $(`

    <div class="ones">
    <div class="oness ${this.id}">
      <div class="one_hd">
          <a href="JavaScript:;" class="imga">
        <img src="${this.img}" alt="">  
    </a>
    <div class="image">
      <img src="${this.imgs}" alt="">  
    </div>
    <img src="./img/gs/logo.png" class="promoLogos" alt="">
    <div class="promBanners promContents1">
      <div class="promTitles">
        <div class="titles">${this.titles}</div>
        <div class="subtitle">${this.txt}</div>
      </div>
      <div class="promContents ">${this.title}</div>
    </div>
      </div>   
      <div class="one_foot">
        <div class="tags">
          <span>${this.center}</span>
        </div>
        <div class="cen" title="${this.head}">${this.head}</div>
        <p>
          <span>${this.price}</span>
          <span style="color:#999;text-decoration: line-through;">${this.change}</span>
        </p>
        <div class="foots">
          <div class="line"></div>
          <p>${this.foot}</p>
        </div>
      </div>
    </div>  
  </div> 
    `).appendTo($(".body1").last())
      }else{
        $(`

    <div class="ones">
    <div class="oness ${this.id}">
      <div class="one_hd">
          <a href="JavaScript:;" class="imga">
        <img src="${this.img}" alt="">  
    </a>
    <div class="image">
      <img src="${this.imgs}" alt="">  
    </div>
    <img src="./img/gs/logo.png" class="promoLogos" alt="">
    <div class="promBanners">
      <div class="promTitles">
        <div class="titles">${this.titles}</div>
        <div class="subtitle">${this.txt}</div>
      </div>
      <div class="promContents">${this.title}</div>
    </div>
      </div>   
      <div class="one_foot">
        <div class="tags">
          <span>${this.center}</span>
        </div>
        <div class="cen" title="${this.head}">${this.head}</div>
        <p>
          <span>${this.price}</span>
          <span style="color:#999;text-decoration: line-through;">${this.change}</span>
        </p>
        <div class="foots">
          <div class="line"></div>
          <p>${this.foot}</p>
        </div>
      </div>
    </div>  
  </div> 
    `).appendTo($(".body1").last())  
      }
    })
   
  
   })
  var mySwiper = new Swiper('.swiper-container', {
   autoplay: true,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable :true,
    },
    navigation: {
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
    },
    effect: 'fade',
    fadeEffect: {
       crossFade: true,
    },
 })
 for(i=0;i<mySwiper.pagination.bullets.length;i++){
   mySwiper.pagination.bullets[i].onmouseover=function(){
     this.click();
   };
 } 
})
})
