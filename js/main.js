
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
