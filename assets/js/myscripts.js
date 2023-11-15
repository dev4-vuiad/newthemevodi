$(document).ready(function() {
    //animated drop down submenu
    $(".site_header__primary-nav .menu-item, .site_header__secondary-nav .menu-item, .site_header__secondary-nav-v3 .menu-item, .site_header__navbar-primary .menu-item").on("mouseenter", function() {
        var e = $(this)
        , t = e.parents(".site_header__primary-nav, .site_header__secondary-nav, .site_header__secondary-nav-v3, .site_header__navbar-primary")
        , a = e.parents(".vodi-animate-dropdown");
        if (0 < t.length && (a = t),
        e.hasClass("menu-item-has-children"))
            a.hasClass("animated-dropdown") || setTimeout(function() {
                a.addClass("animated-dropdown")
            }, 200);
        else if (a.hasClass("animated-dropdown")) {
            e.parents(".menu-item-has-children").length <= 0 && a.removeClass("animated-dropdown")
        }
    })

    //Sidebar menu
    $(".site-header__offcanvas .navbar-toggler").on("click", function() {
        0 < $(this).parents(".stuck").length && $("html, body").animate({
            scrollTop: $("body")
        }, 0),
        $(this).closest(".site-header__offcanvas").toggleClass("toggled"),
        $("body").toggleClass("off-canvas-active")
    })
    $(document).on("click", function(e) {
        $(".site-header__offcanvas").hasClass("toggled") && ($(".navbar-toggler").is(e.target) || 0 !== $(".navbar-toggler").has(e.target).length || $(".offcanvas-collapse").is(e.target) || 0 !== $(".offcanvas-collapse").has(e.target).length || ($(".site-header__offcanvas").removeClass("toggled"),
        $("body").removeClass("off-canvas-active")))
    })

    //Movie sidebar filter
    $(".handheld-sidebar-toggle .sidebar-toggler").on("click", function() {
        $(this).closest(".site-content").toggleClass("active-hh-sidebar")
    })
    $(document).on("click", function(e) {
        $(".site-content").hasClass("active-hh-sidebar") && ($(".handheld-sidebar-toggle").is(e.target) || 0 !== $(".handheld-sidebar-toggle").has(e.target).length || $("#secondary").is(e.target) || 0 !== $("#secondary").has(e.target).length || $(".site-content").toggleClass("active-hh-sidebar"))
    })
})

