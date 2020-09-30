$('#header').load('/src/navbar/index.html');
$('#footer').load('/src/footer/index.html');

// video slider control
$('.video-slider').slick({
  arrows: true,
  dots: true,
});

$(".mobileClientList").slick({
  arrows: true,
  dots: true,
  autoplay: true,
  slidesToScroll: 2,
  slidesToShow: 2,
})

//'Our work' modal controller
function showModal(event) {
  $('.modal.content').html(`
    <video height="100%" width="100%" controls>
                <source src="${event}">
            </video>
            `);
  $('.ui.modal')
    .modal({
      onHide: function() {
        $('.modal.content').html('');
      }
    })
    .modal('show');
}
$('#work1').on('click',
  function() {}
)
