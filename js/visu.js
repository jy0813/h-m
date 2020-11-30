$(function(){

    //visual
    let visu_slide = $('.visu_slide');
    let visu_btm_list = $('.visu_btm_list');
    let visu_right = $('.visu_arrow.right');
    let visu_left = $('.visu_arrow.left');
    let play_Btn = $('.visu_btm_wrap li.controls_wrap .control.start');
    let stop_Btn = $('.visu_btm_wrap li.controls_wrap .control.stop');

    let slider_play=setInterval(auto,6000);
    let slider_stop;

   
    first();

    function auto(){
        visu_right.trigger('click')
    }

    function first(){
    visu_slide.eq(0).addClass('on');

    
        slide_Event();
    }

    function slide_Event(){
        let on_slide = $('.visual_wrap>li.on');
        let idx = on_slide.index();
        let veil = on_slide.children('.visu_veil');
        let txt_wrap = on_slide.children('.visu_txt_wrap');

        veil.animate({'width':'44%','opacity':'1'},1000);
        txt_wrap.delay(500).animate({'opacity':'1'},500);
        visu_btm_list.eq(idx).addClass('act');
    }

    visu_right.click(right);
    visu_left.click(left);
    visu_btm_list.click(bottom);
    stop_Btn.click(stop);
    play_Btn.click(play);

    $('.visual').hover(function(){
        clearInterval(slider_play);
    },function(){
        slider_play = setInterval(auto,6000);
    });

    function play() {
        stop_Btn.fadeIn();
        play_Btn.fadeOut();

        slider_play = setInterval(auto,6000);
    }

    function stop(){
        stop_Btn.fadeOut();
        play_Btn.fadeIn();

        slider_stop = clearInterval(slider_play);
    }

    function bottom(e) {
        e.preventDefault();

        let idx =$(this).index();

        reset();
        visu_slide.eq(idx).addClass('on');
        slide_Event();

    }

    function right(e){
        e.preventDefault();
        e.stopPropagation();
        let idx = $('.visual_wrap>li.on').index();

        reset();
        
        if(idx < 2){
        visu_slide.eq(idx+1).addClass('on');
        }
        if(idx == 2){
        visu_slide.eq(0).addClass('on');    
        }
        slide_Event()
    }

    function left(e){
        e.preventDefault();
        let idx = $('.visual_wrap>li.on').index();

        reset();
        
        if(idx > 0){
        visu_slide.eq(idx-1).addClass('on');
        }
        if(idx == 0){
        visu_slide.eq(2).addClass('on');    
        }
        slide_Event()
    }

    function reset() {
        visu_slide.removeClass('on');
        visu_btm_list.removeClass('act');

        visu_slide.children('.visu_veil').animate({'width':'0%','opacity':'0'},1000);
        visu_slide.children('.visu_txt_wrap').delay(500).animate({'opacity':'0'},500);
    }
    
});