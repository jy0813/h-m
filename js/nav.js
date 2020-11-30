$(function(){

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
});