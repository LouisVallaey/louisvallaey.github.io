// values to keep track of the number of letters typed, which quote to use. etc. Don't change these values.
var i = 0,
    a = 0,
    isBackspacing = false,
    isParagraph = false;

// Typerwrite text content. Use a pipe to indicate the start of the second line "|".  
var textArray = [
  " Hi, Im Louis.| I do stuff..",
];

// Speed (in milliseconds) of typing.
var speedForward = 100, //Typing Speed
    speedWait = 1000, // Wait between typing and backspacing
    speedBetweenLines = 1000, //Wait between first and second lines
    speedBackspace = 25; //Backspace Speed

//Run the loop
setTimeout(function () {
    typeWriter("output", textArray);
}, 1500)


function typeWriter(id, ar) {
    var element = $("#" + id),
        aString = ar[a],
        eHeader = element.children("h1"), //Header element
        eParagraph = element.children("p"); //Subheader element

    // Determine if animation should be typing or backspacing
    if (!isBackspacing) {
        // If full string hasn't yet been typed out, continue typing
        if (i < aString.length) {

            // If character about to be typed is a pipe, switch to second line and continue.
            if (aString.charAt(i) == "|") {
                isParagraph = true;
                eHeader.removeClass("cursor");
                eParagraph.addClass("cursor");
                i++;
                setTimeout(function () {
                    typeWriter(id, ar);
                }, speedBetweenLines);

                // If character isn't a pipe, continue typing.
            } else {
                // Type header or subheader depending on whether pipe has been detected
                if (!isParagraph) {
                    eHeader.text(eHeader.text() + aString.charAt(i));
                } else {
                    eParagraph.text(eParagraph.text() + aString.charAt(i));
                }
                i++;
                setTimeout(function () {
                    typeWriter(id, ar);
                }, speedForward);
            }

            // If full string has been typed, switch to backspace mode.
        } else if (i == aString.length) {

            isBackspacing = false;
            setTimeout(function () {
                typeWriter(id, ar);
            }, speedWait);
        }
    }
}


$(function () {
    $('.icon-scroll').click(function () {
        $('html, body').animate({
            scrollTop: $('section.stuff').offset().top
        }, 'slow');
        return false;
    });
});

window.onload = function () {
    if (typeof (Storage) !== "undefined") {
        if (sessionStorage.getItem("Welcome") == "1") {
            setTimeout(function () {
                $(".explore").css({
                    opacity: 0,
                    display: 'inherit'
                }).animate({
                    opacity: 1
                }, 2000);

                $(".nextbox").css({
                    opacity: 0,
                    display: 'inherit'
                }).animate({
                    opacity: 1
                }, 2000);
                $('html, body').animate({
                    scrollTop: $('section.stuff').offset().top
                }, 'slow');
            }, 0);
        } else {
            sessionStorage.setItem("Welcome", "1");
            setTimeout(function () {
                $(".explore").css({
                    opacity: 0,
                    display: 'inherit'
                }).animate({
                    opacity: 1
                }, 2000);

                $(".nextbox").css({
                    opacity: 0,
                    display: 'inherit'
                }).animate({
                    opacity: 1
                }, 2000);

            }, 5500);
        }

    }


}
