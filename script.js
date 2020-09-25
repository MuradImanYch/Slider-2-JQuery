$(document).ready(() => {
    let images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg"];
    let x = 0;
    let r, t;
    let slider = $("#slider");
    let slide = $("#slide");
    let tumbs = $("#tumbs");
    let count = $("#count");

    slide.append(images.map(item => '<img src="img/' + item + '" />'));
    tumbs.html(slide.html());

    $(window).resize(() => {
        clearTimeout(r);
        r = setTimeout(create, 250);
    });

    tumbs.children("img").click(function () {
        x = $(this).index();
        start();
    });

    create();
    start();

    function create() {
        slide.children("img").css({
            width: slider.width(),
            height: slider.height(),
        }).click(function (e) {
            x = e.pageX > $(window).width() / 2 ? x + 1 : x - 1;
            start();
        });
    }

    function start() {
        stop();
        show();
        t = setInterval(() => { x++; show() }, 3000);
    }

    function stop() {
        clearInterval(t);
    }

    function show() {
        if (x < 0 || x == images.length) x = 0;
        slide.animate({
            'left': -100 * x + "%"
        });

        count.html((x + 1) + "/" + images.length);
    }
});