(function(){

    const select_language = $('.select_language');
    const search_container = $('.search-container'); 
    const h_open_Btn = $('.h_open_search');
    const h_close = $('.sch_close');
    const h_link_a = $('.header_link a');

    //nav

    const gnb = $('.gnb');
    const gnb_menu_list = $('.nav_d1.d1_over > a');
    const sub_menu =$('.gnb_menu > li > ul');

    //mob_nav1

    const mob_nav_btn = $('.mob_nav_btn');
    const mob_nav = $('.mob_nav ');
    const m_nav_bg = $('.m_nav_bg');
    const mob_btn =$('.m_nav_list_tit');
    const m_sub_menu =$('.m_nav_list li > dl');

    //mov search

    const mian = $('#main');

    mian.click(function(){
        search_container.removeClass('show');
        $(this).removeClass('on');
        h_link_a.css('opacity','1');
    });

    mob_nav_btn.click(function(){
        mob_nav.addClass('left_move');
        m_nav_bg.delay(300).fadeIn();
    });

    m_nav_bg.click(function(){
        $(this).fadeOut(0);
        mob_nav.removeClass('left_move');
    });

    mob_btn.click(function(){
        const str = $(this).attr('class');
        const idx = $('.m_nav_list_tit.on');
        console.log(str);

        idx.next(m_sub_menu).slideToggle()
        idx.toggleClass('on');

        if(str=='m_nav_list_tit on') {

        }
        else{
            
            $(this).toggleClass('on');
            $(this).next(m_sub_menu).slideToggle();
        }
        
    });

    gnb_menu_list.on('mouseenter',function(){
        gnb_menu_list.not(this).next('ul').removeClass('over')
        $(this).next('ul').addClass('over');
        gnb.stop().addClass('active')
        
    })
    
    
    sub_menu.mouseleave(function(){
    
        sub_menu.stop().removeClass('over')
        gnb.stop().removeClass('active')

     })


    //search

    select_language.click(function(){
        $(this).toggleClass('show');
    });
    h_open_Btn.click(function(){
        search_container.addClass('show');
        mian.addClass('on');
        h_link_a.eq(0).css('opacity','0');
        h_link_a.eq(1).css('opacity','0');
        h_link_a.eq(2).css('opacity','0');
    });
    h_close.click(function(){
        search_container.removeClass('show');
        h_link_a.css('opacity','1');
    });

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


    //  content
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

    //flag

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