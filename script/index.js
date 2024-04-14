let winW = $(window).width()
$(window).resize(function(){
    winW = $(window).width()
})


$('.gnb').mouseenter(function(){
    if(winW >= 1025){
        $('.nav_box').stop().fadeIn(200)
    }
})
$('.gnb').mouseleave(function(){
    if(winW >= 1025){
        $('.nav_box').stop().fadeOut(200)
    }
})
$('.nav_box').mouseenter(function(){
    if(winW >= 1025){
        $('.nav_box').stop().fadeIn(200)
    }
})
$('.nav_box').mouseleave(function(){
    if(winW >= 1025){
        $('.nav_box').stop().fadeOut(200)
    }
});

/* 모바일에서 메뉴박스(호텔정보)를 클릭하면 서브메뉴가 내려오고 올라가라 */
$('header .menu_box .menu > li > a').click(function(){
    $('.submenu').slideUp();
    $(this).parent().find('.submenu').stop().slideToggle();

    return false
})

$('.hambuger').click(function(){
    $('.hambuger').toggleClass('on')
    $('.nav_box').stop().fadeToggle(200)
})

/* 왼쪽 스크롤바 움직이기 버전1*/
/* $('.main_position_bar a').eq(0).click(function(){
    $('html').animate({scrollTop:0});
})
$('.main_position_bar a').eq(1).click(function(){
    $('html').animate({scrollTop:'1000'});
})
$('.main_position_bar a').eq(2).click(function(){
    $('html').animate({scrollTop:'1800'});
})
$('.main_position_bar a').eq(3).click(function(){
    $('html').animate({scrollTop:'2800'});
}) */



/* 왼쪽 스크롤바 움직이기 버전2*/

/* $('.main_position_bar a').eq(0).click(function(){
    let slideTop = $('#slide_box').offset().top;//0px높이
    $('html').animate({scrollTop:slideTop});
});
$('.main_position_bar a').eq(1).click(function(){
    let sec1Top = $('#section1').offset().top;//1178px높이
    $('html').animate({scrollTop:sec1Top});
});
$('.main_position_bar a').eq(2).click(function(){
    let sec2Top = $('#section2').offset().top;
    $('html').animate({scrollTop:sec2Top});
});
$('.main_position_bar a').eq(3).click(function(){
    let sec3Top = $('#section3').offset().top;
    $('html').animate({scrollTop:sec3Top});
}); */


/* 왼쪽 스크롤바 움직이기 버전3(자동)(섹션이 더 만들어져도 따로 추가 안해도 됨)*/

$('.main_position_bar a').click(function(){
    let aHref = $(this).attr('href'); //<a href="#slide_box">1</a>에서 a의 href값을 구할수있다.이값으로 slide_box로 간다.

    let sso = $(aHref).offset().top 
    $('html').animate({scrollTop:sso}); //sso의 값으로 간다.

    return false //a태그에 있는 링크로 가지않게 한다.
});




//메인변수
let slideTop, sec1Top, sec2Top, sec3Top

//서브변수
let tabTop, textLeft

//메인페이지 판단코드
if( $('#section_box').length > 0 ){
    slideTop = $('#slide_box').offset().top;//0
    sec1Top = $('#section1').offset().top;//953 (섹션1은 브라우저 0부터의 값이 953px이다.)
    sec2Top = $('#section2').offset().top;//1805.34375
    sec3Top = $('#section3').offset().top;//2758.34375

}

if($('.tabmenu').length > 0){
    tabTop = $('.tabmenu').offset().top; 
}

if($('.year_box').length > 0){
    yearBoxTop = $('.tabmenu').offset().top;
}



$(window).scroll(function(){ //윈도우가 스크롤될때 실행된다 //window= 한화면 document=전체화면
    let scrT = $(window).scrollTop();//스크롤값을 구함
    console.log(scrT)

/* 이건 <div class="main_position_bar">에서 span을 썼을때 쓰는 방법이다. */
    if(scrT >= slideTop - 100){
        $('.main_position_bar span').css({top:0})
    }
    if(scrT >= sec1Top - 200){
        $('.main_position_bar span').css({top:50})
    }
    if(scrT >= sec2Top - 150){
        $('.main_position_bar span').css({top:100})
    }
    if(scrT >= sec3Top - 100){
        $('.main_position_bar span').css({top:150})
    }
/* 이건 html에서 <a href="#slide_box" class="active"></a>를 썼을때 쓰는 방법이다.
    if(scrT >= slideTop - 200){ //만약 윈도우 스크롤 값이 슬라이드탑보다 크게 되면(여기서 너무 크기가 큰것같아서 200px정도를 뺌)
        $('.main_position_bar a').eq(0).addClass('active').siblings().removeClass() //eq가 0번째 일때 a첫번째가 보인다
    }
    if(scrT >= sec1Top - 200){ //만약 윈도우 스크롤 값이 sec1Top(섹션1)보다 크게 되면(여기서 너무 크기가 큰것같아서 200px정도를 뺌)
        $('.main_position_bar a').eq(1).addClass('active').siblings().removeClass() //eq가 1번째 일때 a두번째가 보인다
    }
    if(scrT >= sec2Top - 200){
        $('.main_position_bar a').eq(2).addClass('active').siblings().removeClass()
    }
    if(scrT >= sec3Top - 200){
        $('.main_position_bar a').eq(3).addClass('active').siblings().removeClass()
    } */






//top으로 가기(go_top)
let winH = $(window).height() //윈도우의 높이값을 구한다
let docH = $(document).height() //윈도우의 높이값을 구한다

if(scrT > winH/1.5) { //스크롤했을때 윈도우의 높이값보다 반의반만큼 갔을때 top버튼이 나타남
    $('.go_top').css({opacity:1, visibility:'visible'})
    } else {
    $('.go_top').css({opacity:0, visibility:'hidden'})
 }

 /* let lastTextTop = $('.history .year_box :last-child ul:last-child li.text').outerHeight(true)
 textLeft = $('.history .text').offset().left;
 if(scrT >= tabTop){
    $('.history .now').css({top:scrT-yearBoxTop+24})

    if(scrT >= docH-winH-2){
        console.log('kj')
        $('.history .now').css({top:'auto', bottom:0+lastTextTop-10})
    }
}else {
    $('.history .now').css({top:'', bottom:'auto'})
 } */

 /* $('.go_top').text(Math.round(scrT)) */

})






$('.go_top').click(function(){ //gotop 버튼을 누르면 
    $('html').animate({scrollTop:0}) //0px로 간다(animate로 부드럽게)
})

/* history 연혁 탭메뉴 */
$('.tabmenu li').click(function(){
    $(this).addClass('active').siblings().removeClass()

    let dataTap = $(this).attr('data-tab');
    $('.year_box .all').hide()
    $('.year_box .'+dataTap).show()

    return false
})