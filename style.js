$('.brand-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:5
        },
        1000:{
            items:8
        }
    }
})

$('#carouselModal').on('show.bs.modal', function () {
$('.modal-dialog').addClass('modal-fullscreen');
});

$('#carouselModal').on('hidden.bs.modal', function () {
$('.modal-dialog').removeClass('modal-fullscreen');
});