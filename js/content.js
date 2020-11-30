$(function(){

    let btn_tab = $('.recomm_tab a.btn_tab');
    let recomm_list = $('.recomm_list');

    btn_tab.click(recomm);

    function recomm(e) {

        e.preventDefault();

        let idx = $(this).index();
        console.log(idx);

        btn_tab.removeClass('on');
        $(this).addClass('on');

        recomm_list.removeClass('act');
        recomm_list.eq(idx).addClass('act');
    }

    $('aside').hide();
    $(window).scroll(function () {

        var spos = $(window).scrollTop();
        console.log(spos);
        if (spos >= 1080) {
            $('aside').fadeIn();
        } else {
            $('aside').fadeOut();
        }
    });
    $('aside a').click(function () {
        $('html, body').animate({
            scrollTop: '0px'
        }, 1000);
        return false;
    });
});