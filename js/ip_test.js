$(window).load(function () {
    windowresize();
})
$(window).resize(function () {
    windowresize();
})

//네비 스크롤 애니메이션 로직
$navon = false; //조건변수설정
$(window).scroll(function () {
    if ($(window).scrollTop() > $(window).height()) { //스크롤탑 값이 윈도우높이보다 클때
        if ($navon == false) {
            $('header .bg').stop().animate({
                'opacity': '0.8'
            }, {
                duration: 500,
                easing: 'easeOutCubic'
            });
            $navon = true; // 트루로 바꿔줘서 반복실행 방지
        }
    } else {
        $navon = false;
        $('header .bg').stop().animate({
            'opacity': '0'
        }, {
            duration: 500,
            easing: 'easeOutCubic'
        });
    }
})
/*=========================================*/

/*=========================================*/
$('#btn-tab-1').click(function() { //버튼 클릭 단순 로직
    $('#btn-tab-1').addClass('active');
    $('#btn-tab-2').removeClass('active');
    $('#list-tab-1').slideDown('fast');
    $('#list-tab-2').slideUp('fast');
})
$('#btn-tab-2').click(function () {
    $('#btn-tab-2').addClass('active');
    $('#btn-tab-1').removeClass('active');
    $('#list-tab-2').slideDown('fast');
    $('#list-tab-1').slideUp('fast');
});

//하단고정메뉴 로직
//css대신에 윈도우의 크기에 상관없이 일정한 위치에 고정
function windowresize(type) {
    $('.btn-down').css('margin-left', ($('.bodywrap').width() / 2) - 120);
}