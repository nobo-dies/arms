var arr = ["Spring Man", "Ribbon Girl", "Ninjara", "Master Mummy", "Min Min", "Machanica", "Helix"];
var art = ["spring", "ribbon", "ninjara", "master", "min", "mech", "helix"];
var num = ["1", "2", "3", "4", "5", "6", "7"];
var clickaudio = "../resources/sound/click.mp3";

$(window).on("load", function() {
    setTimeout(function(){
        $("#loading").addClass("loading--hide");
    }, 2500);
});

$(document).ready(function(){

    $("#go").click(function () {
        $(this).addClass("down-pulse"), new Audio(clickaudio).play();
        $("#content").delay(200).animate({ left: '0' }, 200 );
        $("#start").delay(200).animate({ opacity: '0'});
        $(this).removeClass("down-pulse");
    });
    
    $("#back").click(function () {
        $("#blank").animate({ left: '-200vw' }, 100 );
        $("#content").delay(400).animate({ left: '100vw' }, "slow" );
        $("#start").delay(400).animate({ opacity: '1'});
    });
    
    $(".avatar").each(function (index) {
        
        // Glove Change
        $(this).click(function () {
            $("#" + (art[index]) + ("-arms")).addClass("glove--active").siblings().removeClass("glove--active");
        });
    
        // Fighter Change
        $(this).click(function () {
            $(".art." + (art[index])).addClass("art--active").siblings().removeClass("art--active");
        });

        // Background Colour Change - Not quite right, probably don't need a variable
        $(this).click(num, function () {
            $(".gradient.gradient--" + (art[index]) ).addClass("gradient--active").siblings().removeClass("gradient--active");
        });
        
        // Shape Colour Change
        $(this).click(function () {
            $("#background-abstracts").removeClass().addClass("abstracts--" + (art[index]));
        });
        
        // Change Name
        $(this).click(function () {
            $(".fighter__name").text(arr[index]);
        });

        // Active
        $(this).click(function (e) {
            $(this).addClass("avatar--active").siblings().removeClass("avatar--active");
        });
        
        $(this).click(function() {
            new Audio(clickaudio).play();
        });
    });
});
