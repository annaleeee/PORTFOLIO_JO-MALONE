
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

const slide02 = new Swiper('.swiper-container_02',{
    loop : true, 
    scrollbar : {
        el : '.section_2 .scrollBar'
    },
    slidesPerView : 3,
    spaceBetween : 30,
    autoplay : {
        delay : 3000
    },
    speed : 1000
});