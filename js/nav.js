$(function() {
    $(".navmenu").click(function() {
        $(".navmenu").toggleClass("icon-menu");
        $(".navmenu").toggleClass("icon-cross");
        $("nav").toggleClass("nav-open");
        $(".navmenu_list").slideToggle("fast");
    });
});