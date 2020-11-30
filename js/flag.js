$(function(){
    
    let fl_slider = $('.flag_slider li');
    let fl_btm_list = $('.flag_btm_wrap li');
    let fl_left_btn = $('.flagside.left');
    let fl_right_btn = $('.flagside.right');

    first();

    function first() {
        fl_slider.eq(0).addClass('on');
        fl_btm_list.eq(0).addClass('act');
    }

    fl_right_btn.click(right_Event);
    fl_left_btn.click(left_Event);
    fl_btm_list.click(fl_btm_Event);

        function fl_btm_Event(e){
            e.preventDefault();
            const idx = $(this).index();
            reset();
            fl_slider.eq(idx).addClass('on');
        fl_btm_list.eq(idx).addClass('act');


        }


        function right_Event(e){
            e.preventDefault();

        let idx = $('.flag_slider li.on').index();
        reset();
    
        if (idx < 3) {
            fl_slider.eq(idx + 1).addClass('on');
            fl_btm_list.eq(idx + 1).addClass('act');
        }
        if (idx == 3) {
            idx = 0;
            fl_slider.eq(idx).addClass('on');
            fl_btm_list.eq(idx).addClass('act');
        }
    }
    function left_Event(e){
        e.preventDefault();

    let idx = $('.flag_slider li.on').index();
    reset();


    if (idx > 0) {
        fl_slider.eq(idx - 1).addClass('on');
        fl_btm_list.eq(idx - 1).addClass('act');
    }
    if (idx == 0) {
        idx = 3;
        fl_slider.eq(idx).addClass('on');
        fl_btm_list.eq(idx).addClass('act');
    }
}

    function reset() {
        fl_slider.removeClass('on');
        fl_btm_list.removeClass('act');
    }

});