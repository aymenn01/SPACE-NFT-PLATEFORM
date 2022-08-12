$(window).on("load", function () {
    $(".loader-wrapper").fadeOut(2000);
    setTimeout(myGreeting, 2000);
})
function myGreeting() {
    $("body").removeClass("preload");
}

