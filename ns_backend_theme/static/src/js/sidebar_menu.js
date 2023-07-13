$(document).on("click", "#closeSidebar", function (event) {
    $("#closeSidebar").hide();
    $("#openSidebar").show();
});
$(document).on("click", "#openSidebar", function (event) {
    $("#openSidebar").hide();
    $("#closeSidebar").show();
});

$(document).on("click", "body", function (event) {
    var elementClick = "#openSidebar";
    if (!$(event.target).closest(elementClick).length) {
        $("#sidebar_panel").css({'display': 'none'});
        $(".o_main").css({'margin-left': '0px'});
        $(".o_main_navbar").css({'margin-left': '0px', 'width': '100%'});

        //remove class in navbar
        var navbar = $(".o_main_navbar");
        var navbar_id = navbar.data("id");
        $("nav").removeClass(navbar_id);
        navbar.removeClass("small_nav");

        //remove class in action-manager
        var action_manager = $(".o_main");
        var action_manager_id = action_manager.data("id");
        $("div").removeClass(action_manager_id);
        action_manager.removeClass("sidebar_margin");

        //remove class in o_main_navbar
        var top_head = $(".o_main_navbar");
        var top_head_id = top_head.data("id");
        $("div").removeClass(top_head_id);
        top_head.removeClass("sidebar_margin");
        $("#closeSidebar").hide();
        $("#openSidebar").show();
    }

});

$(document).on("click", "#openSidebar", function (event) {
    $("#sidebar_panel").css({'display': 'block'});
    //Noarison edit
    $(".o_main").css({'margin-left': '280px', 'transition': 'all .1s linear'});
    //Noarison edit
    $(".o_main_navbar").css({'margin-left': '280px', 'transition': 'all .1s linear', 'width': 'auto'});

    //add class in navbar
    var navbar = $(".o_main_navbar");
    var navbar_id = navbar.data("id");
    $("nav").addClass(navbar_id);
    navbar.addClass("small_nav");

    //add class in action-manager
    var action_manager = $(".o_main");
    var action_manager_id = action_manager.data("id");
    $("div").addClass(action_manager_id);
    action_manager.addClass("sidebar_margin");

    //add class in o_main_navbar
    var top_head = $(".o_main_navbar");
    var top_head_id = top_head.data("id");
    $("div").addClass(top_head_id);
    top_head.addClass("sidebar_margin");
});
$(document).on("click", "#closeSidebar", function (event) {
    $("#sidebar_panel").css({'display': 'none'});
    $(".o_main").css({'margin-left': '0px'});
    $(".o_main_navbar").css({'margin-left': '0px', 'width': '100%'});

    //remove class in navbar
    var navbar = $(".o_main_navbar");
    var navbar_id = navbar.data("id");
    $("nav").removeClass(navbar_id);
    navbar.removeClass("small_nav");

    //remove class in action-manager
    var action_manager = $(".o_main");
    var action_manager_id = action_manager.data("id");
    $("div").removeClass(action_manager_id);
    action_manager.removeClass("sidebar_margin");

    //remove class in o_main_navbar
    var top_head = $(".o_main_navbar");
    var top_head_id = top_head.data("id");
    $("div").removeClass(top_head_id);
    top_head.removeClass("sidebar_margin");
});

$(document).on("click", ".sidebar a", function (event) {
    var menu = $(".sidebar a");
    var $this = $(this);
    var id = $this.data("id");
    $("header").removeClass().addClass(id);
    menu.removeClass("active");
    $this.addClass("active");

    //sidebar close on menu-item click
    $("#sidebar_panel").css({'display': 'none'});
    $(".o_main").css({'margin-left': '0px'});
    $(".o_main_navbar").css({'margin-left': '0px', 'width': '100%'});
    $("#closeSidebar").hide();
    $("#openSidebar").show();

    //remove class in navbar
    var navbar = $(".o_main_navbar");
    var navbar_id = navbar.data("id");
    $("nav").removeClass(navbar_id);
    navbar.removeClass("small_nav");

    //remove class in action-manager
    var action_manager = $(".o_main");
    var action_manager_id = action_manager.data("id");
    $("div").removeClass(action_manager_id);
    action_manager.removeClass("sidebar_margin");

    //remove class in o_main_navbar
    var top_head = $(".o_main_navbar");
    var top_head_id = top_head.data("id");
    $("div").removeClass(top_head_id);
    top_head.removeClass("sidebar_margin");
});