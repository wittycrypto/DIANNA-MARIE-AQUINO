$('#carouselModal').on('show.bs.modal', function () {
$('.modal-dialog').addClass('modal-fullscreen');
});

$('#carouselModal').on('hidden.bs.modal', function () {
$('.modal-dialog').removeClass('modal-fullscreen');
});