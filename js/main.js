
// swiper_01
const slide01 = new Swiper('.swiper-container_01',{
    loop : true, 
    pagination : { 
        el : '.section_1 .pager', 
        clickable : true
    },
    autoplay : {
        delay : 2000
    },
    speed : 1000
});

// swiper_02
const slide02 = new Swiper('.swiper-container_02',{
    loop : true, 
    navigation : {
        nextEl : '.section_2 .btnR',
        prevEl : '.section_2 .btnL'
    },
    scrollbar : {
        el : '.section_2 .scrollBar'
    },
    spaceBetween : 20,
    autoplay : {
        delay : 1000
    },
    speed : 1000,
    breakpoints: {
        1410: {
            slidesPerView: 4,
            spaceBetween: 40
        },
        765: {
            slidesPerView: 3,
            spaceBetween: 40
        },
        0: {
            slidesPerView: 'auto',
            spaceBetween: 20
        }
    }
});