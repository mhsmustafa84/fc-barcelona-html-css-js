$(document).ready(function () {
    // Loading Page
    $(window).on("load", function () {
        $(".live_loader").animate({ left: "0%" }, 3000, function () {
            $("#loading").fadeOut(600);
            $("body").css("overflow", "auto");
        });
    });

    // NavBar Active Class
    $(".nav-item").click(function () {
        $(".nav-item").removeClass("active");
        $(this).addClass("active");
    });

    // Burning Text Effect
    $(".burning").burn();

    // Scroll To Section ID
    $(".nav-link").each(function () {
        $(this).click(function () {
            $("html,body").animate(
                {
                    scrollTop: $($(this).attr("href")).offset().top - 75,
                },
                1500
            );
        });
    });


    // Squad Slider
    $(".carousel").carousel({
        interval: 3000,
    });

    // Counter Up
    $(".counter").counterUp({
        delay: 20,
        time: 1500,
    });

    // Stadium Text Effects
    $(".camp-nou").novacancy({
        reblinkProbability: 3 / 3,
        blinkMin: 0.01,
        blinkMax: 0.5,
        loopMin: 0.5,
        loopMax: 1,
        color: "WHITE",
        glow: ["0 0 50px #edbb00", "0 0 30px #edbb00", "0 0 6px #edbb00"],
        off: 0, // amount of off chars
        blink: 0, // amount of blink chars
        classOn: "on",
        classOff: "off",
        element: "data", // split content by elemen
        autoOn: true,
    });

    // Scroll To Top Button
    var scrolBtn = $("#scroll-top");
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 600) {
            scrolBtn.show();
        } else {
            scrolBtn.hide();
        }
    });
    scrolBtn.click(function () {
        $("html,body").animate({ scrollTop: 0 }, 1700);
        $(".nav-item").removeClass("active");
        $(".nav-item.scroll-top").addClass("active");
    });
});
