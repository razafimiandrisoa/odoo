odoo.define('Noasource.Menu', function (require) {
    "use strict";

    var AppsMenu = require('web.AppsMenu');
    var config = require('web.config');
    var core = require('web.core');
    var dom = require('web.dom');
    var SystrayMenu = require('web.SystrayMenu');
    var UserMenu = require('web.UserMenu');
    var Widget = require('web.Widget');
    var WebMenu = require('web.Menu');

    var Menu = WebMenu.include({
        init: function (parent, menu_data) {
            var self = this;
            this._super.apply(this, arguments);
        },
        start: function () {
            var self = this;

            var menu_ids = _.keys(this.$menu_sections);
            var primary_menu_id, $section;
            for (var i = 0; i < menu_ids.length; i++) {
                primary_menu_id = menu_ids[i];
                $section = this.$menu_sections[primary_menu_id];
                $section.on('click', 'a[data-menu]', function (event) {
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
            }

            this.$('.o_menu_systray').on('click', 'a', function (event) {
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


            return this._super.apply(this, arguments);
        },
    });


    return Menu;

});
