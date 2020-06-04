window.onload = function () {
  setTimeout(function () {
    $(".leftImage")
      .css({
        opacity: 0,
      })
      .animate(
        {
          opacity: 1,
        },
        1200
      );
    $(function () {
      AOS.init();
    });
  }, 1000);

  setTimeout(function () {
    $(".headercontent")
      .css({
        opacity: 0,
      })
      .animate(
        {
          opacity: 1,
        },
        1200
      );
    $(".undertitle")
      .css({
        opacity: 0,
      })
      .animate(
        {
          opacity: 1,
        },
        1200
      );
    $(".usedthings")
      .css({
        opacity: 0,
      })
      .animate(
        {
          opacity: 1,
        },
        1200
      );
    AOS.init();
  }, 2500);
  setTimeout(function () {
    $(".textcontent")
      .css({
        opacity: 0,
      })
      .animate(
        {
          opacity: 1,
        },
        1200
      );
    $(".icons")
      .css({
        opacity: 0,
      })
      .animate(
        {
          opacity: 1,
        },
        1200
      );
  }, 3500);
};
