$(".scroll").on("click", function (e) {
    e.preventDefault();
    var offset = 0;
    var target = this.hash;
    if ($(this).data("offset") != undefined) offset = $(this).data("offset");
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(target).offset().top - offset,
        },
        500,
        "swing",
        function () {
          // window.location.hash = target;
        }
      );
  });
  
  $(document).ready(function () {
    $(".navbar-toggle").on("click", function () {
      $(this).toggleClass("active");
    });
  });
  