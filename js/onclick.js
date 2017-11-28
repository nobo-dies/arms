var arr = ["Spring Man", "Ribbon Girl", "Ninjara", "Master Mummy", "Min Min", "Machanica", "Helix"];
var art = ["spring", "ribbon", "ninja", "master", "min", "mech", "helix"];
var num = ["1", "2", "3", "4", "5", "6", "7"];

$(document).ready(function(){
    $("li.fighter-avatar").each(function (index) {
        
        // Arms Change
        $(this).click(function () {
            $( ".arms--" + (art[index]) ).addClass("arms--active").siblings().removeClass("arms--active");
        });
    
        // Fighter Change
        $(this).click(function () {
            $( ".art." + (art[index]) ).addClass("art--active").siblings().removeClass("art--active");
        });

        // Background Colour Change - Not quite right, probably don't need a variable
        $(this).click(num, function () {
            $( ".bg." + (art[index]) ).addClass("bg--active").siblings().removeClass("bg--active");
        });
        
        // Shape Colour Change
        $(this).click(function () {
            $("#bgShape").removeClass().addClass((art[index]));
        });
        
        // Change Name
        $(this).click(function () {
            $(".fighter-name__h1").text(arr[index]);
        });

        // Active
        $(this).click(function (e) {
            $(this).addClass("fighter-avatar--active").siblings().removeClass("fighter-avatar--active");
        });
    });
});

$(window).bind("load", function() {
   $("#loader").addClass("loaded");
});
