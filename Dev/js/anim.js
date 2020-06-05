window.onload = function () {
  AOS.init();
  $(function () {
    AOS.init();
  });
  setTimeout(function () {
    $(".headercontent")
      .css({
        opacity: 0,
      })
      .animate(
        {
          opacity: 1,
        },
        800
      );
    $(".undertitle")
      .css({
        opacity: 0,
      })
      .animate(
        {
          opacity: 1,
        },
        800
      );
    $(".usedthings")
      .css({
        opacity: 0,
      })
      .animate(
        {
          opacity: 1,
        },
        800
      );
    AOS.init();
  }, 500);
  setTimeout(function () {
    $(".textcontent")
      .css({
        opacity: 0,
      })
      .animate(
        {
          opacity: 1,
        },
        800
      );
    $(".icons")
      .css({
        opacity: 0,
      })
      .animate(
        {
          opacity: 1,
        },
        800
      );
  }, 1000);
};
