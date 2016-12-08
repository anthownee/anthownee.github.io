$(document).ready(function(){
    $(document).on('click', '.control nav a', function(event){
        //alert(event.target.href);
        history.pushState(null, null, event.target.href); //url주소변경
        $('article').load(event.target.href+' article>.content');
        event.preventDefault(); //이벤트 막기
        //alert('excuted');
    })
    $(window).on('popstate', function(event){ //popstate 뒤로가기버튼
        $('article').load(location.href+' article>div'); //location.href 현재의주소?
    })
    var audio = new Audio('Dvorak_Polka.mp3');
    $(document).on('click','.control .player .play', function(event){
        audio.play();
    });
    $(document).on('click','.control .player .pause', function(event){
        audio.pause();
    });
});