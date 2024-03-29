(function() {
    [].slice.call(document.querySelectorAll(".tabs")).forEach(function(el) {
        new CBPFWTabs(el);
    });
})();

function oldSafariCSSfix() {
    if (isOldSafari()) {
        var tabnr = jQuery(".tab-current").parent().parent().find("ul li").length;
        var width = jQuery("#siteContent").width();
        jQuery(".tab-current").parent().parent().find("ul li").width(width / tabnr - 1).css("float", "left");
        jQuery(".tabs nav").css("width", width + 1);
    }
}

(function() {
    jQuery(document).on({
        click: function() {
            var t = $(this);
            var section = jQuery(this).find("a").attr("href").split("-");
            var sort = section[1];
            var main = $("#file-menu-entry7").hasClass("menu-panel-entry-active") ? "comments" : "responses";
            var sid = $("#file-menu-entry7").hasClass("menu-panel-entry-active") ? "file-menu-entry7" : "file-menu-entry8";
            if (typeof sort == "undefined" || sort.substr(0, 4) == "resp") {
                return;
            }
            var view_mode_type = $(".view-mode-type.active").attr("id").replace("view-mode-", "");
            var url = _rel + "?s=" + sid + "&do=cr-" + (sort == "pending" ? "suspended" : sort) + "&t=" + view_mode_type;
            var mp = '';
            if ($("#view-mode-image.videomp").hasClass("active")) {
                    url += "&mp";
                    mp = '.videomp';
            }
            if (typeof $("#section-" + sort + "-" + view_mode_type + "-" + main).html() == "undefined") {
                return;
            }
            if ($("#section-" + sort + "-" + view_mode_type + "-" + main).html().length > 0) {
                return;
            }
            jQuery(".list-cr-tabs").mask("");
            jQuery("#siteContent").load(url, function() {
                jQuery(".list-cr-tabs").unmask();
                if (sort != "approved") {
                    $(".cr-tabs .tab-current:first").removeClass("tab-current");
                    $("#main-content").find("section.content-current:first").removeClass("content-current");
                }
                t.find("a").parent().addClass("tab-current");
            });
        }
    }, ".tabs.list-cr-tabs ul:not(#pag-list) li:not(.cr-tabs)");
})();

(function() {
    jQuery(document).on({
        click: function() {
            var view_mode_type = $(".view-mode-type.active").attr("id").replace("view-mode-", "");
            var section = jQuery(this).find("a").attr("href").split("-");
            var sort = section[1];
            if (typeof sort == "undefined") {
                return;
            }
            var sid = jQuery("#section-" + sort + "-" + view_mode_type + " .main-view-mode-" + view_mode_type + ".active").attr("id");
            if (typeof sid == "undefined") {
                return;
            }
            var id = sid.split("-");
            var idnr = id[3];
            var current_sort = jQuery("#section-" + sort + "-" + view_mode_type + " .main-view-mode-" + view_mode_type + ".active").val();
            var type_all = current_sort + "-" + view_mode_type;
            jQuery("#tab-" + view_mode_type).val(sort + "-" + view_mode_type);
            if ($("#" + sid + "-list ul:not(.no-content)").length > 0) {
                l1 = jQuery("#" + sid + "-list ul").length;
                l2 = jQuery("#" + sid + "-list ul .thumbs-wrappers input:checked").length;
                if (l1 == l2) {
                    $("#select-mode").addClass("active");
                } else {
                    $("#select-mode").removeClass("active");
                }
                if ($("#" + sid + "-list ul .thumbs-wrappers").css("display") == "block") {
                    $("#edit-mode").addClass("active");
                } else {
                    $("#edit-mode").removeClass("active");
                }
            }
            if (jQuery("#" + sid + "-list ul:not(.no-content)").length == 0) {
                var ct = "";
                var url = _rel + "?s=" + jQuery(".menu-panel-entry-active").attr("id") + "&p=0&m=" + idnr + "&sort=" + sort + "&t=" + view_mode_type;
                if (jQuery(".menu-panel-entry-active").attr("id") == "file-menu-entry6" || $("#section-playlists").hasClass("active") || $("#ch-pl").hasClass("tab-current") || $("#ch-bl").hasClass("tab-current") || $("#wrapper").hasClass("tpl_search")) {
                    var m = idnr == 1 ? 4 : idnr == 3 ? 6 : idnr == 2 ? 5 : 4;
                    url = _rel + "?s=" + jQuery(".menu-panel-entry-active").attr("id") + "&p=0&m=" + m + "&sort=" + sort + "&t=" + view_mode_type;
                    if ($("#section-playlists").hasClass("active") || $("#ch-pl").hasClass("tab-current") || $("#wrapper").hasClass("tpl_search")) {
                        url += "&pp=1";
                    }
                    if (typeof ch_id != "undefined") {
                        url += "&u=" + ch_id;
                    }
                }
                if (typeof jQuery("#categories-accordion li a.selected").attr("rel-name") != "undefined") {
                    ct = "&c=" + jQuery("#categories-accordion li a.selected").attr("rel-name");
                }
                url += ct;
                if (typeof $("#sq").val() != "undefined" && $("#sq").val().length > 3) {
                    url += "&sq=" + $("#sq").val();
                }
                if ($("#view-mode-image.videomp").hasClass("active")) {
                    url += "&mp";
                }
                if (typeof jQuery("#main-view-mode-" + idnr + "-" + type_all + "-list .no-content").html() == "undefined") {
                    jQuery("#" + sid + "-list").mask("");
                    jQuery("#" + sid + " span").removeClass("icon-thumbs").addClass("spinner icon-spinner");
                    jQuery("#" + sid + "-list").load(url, function() {
                        thumbFade();
                        jQuery("#" + sid + " span").addClass("icon-thumbs").removeClass("spinner icon-spinner");
                        if($("#" + sid + "-list .thumbs-wrappers").is(":visible"))
                        	$("#edit-mode").addClass("active");

                        $("#select-mode").removeClass("active");
                    });
                }
            }
        }
    }, ".tabs ul:not(#pl-tabs):not(.pl-thumb):not(.fileThumbs):not(#pag-list):not(.cr-tabs):not(.no-content) li:not(li.cr-tabs)");
})();

jQuery(window).load(function() {
    oldSafariCSSfix();
});

jQuery(window).resize(function() {
    oldSafariCSSfix();
});

var SizeSetFunctions = function() {};

var ViewModeSizeSetFunctions = function() {};

jQuery(window).resize(function() {});

$(function() {
    $("#entry-action-buttons").dlmenu({
        animationClasses: {
            classin: "dl-animate-in-5",
            classout: "dl-animate-out-5"
        }
    });
});

jQuery(window).load(function() {
    thumbFade();
    SizeSetFunctions();
    jQuery(document).on({
        click: function() {
            var ct = "";
            var view_mode_type = $(".view-mode-type.active").attr("id").replace("view-mode-", "");
            var id = jQuery(".content-current:last .main-view-mode-" + view_mode_type + ".active").attr("id");
            var type = jQuery(".content-current:last .main-view-mode-" + view_mode_type + ".active").val();
            var type_all = type + "-" + view_mode_type;
            var nr = id.split("-");
            var idnr = nr[3];
            var page = parseInt(jQuery(this).attr("rel-page"));
            var more = jQuery("#main-view-mode-" + idnr + "-" + type_all + "-more").parent();
            more.detach();
            var more_clone = more.clone(true);
            var url = _rel + "?s=" + jQuery(".menu-panel-entry-active").attr("id") + "&p=0&m=" + idnr + "&sort=" + type + "&t=" + view_mode_type;
            if (jQuery(".menu-panel-entry-active").attr("id") == "file-menu-entry6" || $("#section-playlists").hasClass("active") || $("#ch-pl").hasClass("tab-current") || $("#ch-bl").hasClass("tab-current") || $("#wrapper").hasClass("tpl_search")) {
                var m = idnr == 1 ? 4 : idnr == 3 ? 6 : idnr == 2 ? 5 : 4;
                url = _rel + "?s=" + jQuery(".menu-panel-entry-active").attr("id") + "&p=0&m=" + m + "&sort=" + type + "&t=" + view_mode_type;
                if ($("#section-playlists").hasClass("active") || $("#ch-pl").hasClass("tab-current") || $("#wrapper").hasClass("tpl_search")) {
                    url += "&pp=1";
                }
                if (typeof ch_id != "undefined") {
                    url += "&u=" + ch_id;
                }
                if ($("#view-mode-image.videomp").hasClass("active")) {
                    url += "&mp";
                }
            }
            if (typeof jQuery("#categories-accordion li a.selected").attr("rel-name") != "undefined") {
                ct = "&c=" + jQuery("#categories-accordion li a.selected").attr("rel-name");
            }
            url += ct;
            url += "&page=" + page;
            jQuery("#main-view-mode-" + idnr + "-" + type_all + "-list ul:not(.playlist-entries)").mask(" ");
            jQuery("#main-view-mode-" + idnr + "-" + type_all + "-list span.load-more.loadmask-img").show();
            jQuery("#main-view-mode-" + idnr + "-" + type_all + "-list span.load-more-text").hide();
            jQuery.get(url, function(result) {
                jQuery("#main-view-mode-" + idnr + "-" + type_all + "-list ul:not(.playlist-entries)").append(result).unmask();
                jQuery("#main-view-mode-" + idnr + "-" + type_all + "-list span.load-more.loadmask-img").hide();
                more_clone.appendTo("#main-view-mode-" + idnr + "-" + type_all + "-list").find(".more-button").attr("rel-page", page + 1);
                thumbFade();
            });
        }
    }, ".more-button");
    jQuery(document).on({
        click: function() {
            var file_key = jQuery(this).attr("rel-key");
            var file_type = jQuery(this).attr("rel-type");
            var view_mode_type = $(".view-mode-type.active").attr("id").replace("view-mode-", "");
            var url = _rel + "?a=cb-watchadd&for=sort-" + file_type + "&t=" + view_mode_type;
            if ($("#view-mode-image.videomp").hasClass("active")) {
                    url += "&mp";
            }
            var _this = jQuery(this);
            if (_this.find(jslang["lss"] == "1" ? "icon-clock2" : "icon-warning").hasClass("icon-clock2")) {
                return;
            }
            _this.parent().next().mask("");
            _this.next().text(jslang["loading"]);
            jQuery.post(url, {
                "fileid[0]": file_key
            }, function(result) {
                _this.find(".icon-clock").removeClass("icon-clock").addClass(jslang["lss"] == "1" ? "icon-clock2" : "icon-warning");
                _this.next().text(jslang["lss"] == "1" ? jslang["inwatchlist"] : jslang["nowatchlist"]);
                _this.parent().next().unmask();
            });
        }
    }, ".watch_later_wrap");
    jQuery(document).on({
        click: function() {
            var view_mode_type = $(".view-mode-type.active").attr("id").replace("view-mode-", "");
            if (view_mode_type == "blog" || view_mode_type == "live") {
                s = view_mode_type == "live" ? "?do=new-broadcast&t=live" : "?do=new-blog&t=blog";
                url = current_url + menu_section + s;
                $.fancybox({
                    type: "ajax",
                    margin: 50,
                    minWidth: "50%",
                    href: url,
                    height: "auto",
                    autoHeight: "true",
                    autoResize: "true",
                    autoCenter: "true",
                    afterClose: function() {
                        $(".mce-container, .mce-tinymce-inline, .mce-tooltip").detach();
                    }
                });
            } else {
                url = ($("#view-mode-image.videomp").hasClass("active") ? f_lang["mpupload"] : f_lang["upload"]) + "?t=" + (view_mode_type == "doc" ? "document" : view_mode_type);
                window.location = url;
                return false;
            }
        }
    }, "#new-upload");
    jQuery(document).on({
        click: function() {
            url = current_url + menu_section + "?do=new-blog&t=blog";
            $(".lb-margins").mask(" ");
            $.post(url, $("#add-new-blog-form").serialize(), function(data) {
                $("#add-new-blog-response").html(data);
                $(".lb-margins").unmask();
            });
        }
    }, "#add-new-blog-btn");
    jQuery(document).on({
        click: function() {
            url = current_url + menu_section + "?do=new-broadcast&t=live";
            $(".lb-margins").mask(" ");
            $.post(url, $("#add-new-live-form").serialize(), function(data) {
                $("#add-new-live-response").html(data);
                $(".lb-margins").unmask();
            });
        }
    }, "#add-new-live-btn");
    jQuery(document).on({
        click: function() {
            if (jQuery(this).hasClass("active")) {
                return;
            }
            var view_mode_type = $(".view-mode-type.active").attr("id").replace("view-mode-", "");
            var current = jQuery(".main-view-mode-" + view_mode_type + ".active").attr("id");
            var cnr = current.split("-");
            var id = jQuery(this).attr("id");
            var type = jQuery(this).val();
            var type_all = type + "-" + view_mode_type;
            var nr = id.split("-");
            var idnr = nr[3];
            jQuery("#section-" + type_all + " .main-view-mode-" + view_mode_type).removeClass("active");
            jQuery("#" + id).addClass("active");
            if (jQuery("#main-view-mode-" + idnr + "-" + type_all + "-list ul").length > 0) {
                jQuery("#section-" + type_all + " .mview").hide();
                jQuery("#main-view-mode-" + idnr + "-" + type_all + "-list").show();
                l1 = jQuery("#main-view-mode-" + idnr + "-" + type_all + "-list ul:first li").length;
                l2 = jQuery("#main-view-mode-" + idnr + "-" + type_all + "-list ul:first .thumbs-wrappers input:checked").length;
                if (l1 == l2) {
                    $("#select-mode").addClass("active");
                } else {
                    $("#select-mode").removeClass("active");
                }
                if ($("#main-view-mode-" + idnr + "-" + type_all + "-list ul .thumbs-wrappers").css("display") == "block") {
                    $("#edit-mode").addClass("active");
                } else {
                    $("#edit-mode").removeClass("active");
                }
                $.get(_rel + "?p=0&vm=" + idnr, function(data) {});
            } else {
                var ct = "";
                var url = _rel + "?s=" + jQuery(".menu-panel-entry-active").attr("id") + "&p=0&m=" + idnr + "&sort=" + type + "&t=" + view_mode_type;
                if (jQuery(".menu-panel-entry-active").attr("id") == "file-menu-entry6" || $("#section-playlists").hasClass("active") || $("#ch-pl").hasClass("tab-current") || $("#ch-bl").hasClass("tab-current") || $("#wrapper").hasClass("tpl_search")) {
                    var m = idnr == 1 ? 4 : idnr == 3 ? 6 : idnr == 2 ? 5 : 4;
                    url = _rel + "?s=" + jQuery(".menu-panel-entry-active").attr("id") + "&p=0&m=" + m + "&sort=" + type + "&t=" + view_mode_type;
                    if ($("#section-playlists").hasClass("active") || $("#ch-pl").hasClass("tab-current") || $("#wrapper").hasClass("tpl_search")) {
                        url += "&pp=1";
                    }
                    if (typeof ch_id != "undefined") {
                        url += "&u=" + ch_id;
                    }
                }
                if (typeof jQuery("#categories-accordion li a.selected").attr("rel-name") != "undefined") {
                    ct = "&c=" + jQuery("#categories-accordion li a.selected").attr("rel-name");
                }
                url += ct;
                if (typeof $("#sq").val() != "undefined" && $("#sq").val().length > 3) {
                    url += "&sq=" + $("#sq").val();
                }
                if ($("#view-mode-image.videomp").hasClass("active")) {
                    url += "&mp";
                }
                jQuery("#main-view-mode-" + cnr[3] + "-" + type_all + "-list").mask("");
                jQuery("#main-view-mode-" + idnr + "-" + type_all + " span").addClass("spinner icon-spinner");
                $("#select-mode").removeClass("active");
                jQuery("#main-view-mode-" + idnr + "-" + type_all + "-list").load(url, function() {
                    jQuery("#section-" + type_all + " .mview").hide();
                    jQuery("#main-view-mode-" + idnr + "-" + type_all + "-list").show();
                    jQuery("#main-view-mode-" + cnr[3] + "-" + type_all + "-list").unmask();
                    thumbFade();
                    jQuery("#main-view-mode-" + idnr + "-" + type_all + " span").removeClass("spinner icon-spinner");
                    $(".comment_h p,p.p-info,pre.hp-pre,.full-details-holder p,.msg-body pre").linkify({
                        defaultProtocol: "https",
                        validate: {
                            email: function(value) {
                                return false;
                            }
                        },
                        ignoreTags: [ "script", "style" ]
                    });
                });
            }
        }
    }, ".main-view-mode-video, .main-view-mode-image, .main-view-mode-audio, .main-view-mode-doc, .main-view-mode-blog, .main-view-mode-live");
    jQuery(document).on({
        click: function() {
            if (jQuery(this).hasClass("active")) {
                return;
            }
            var this_id = $(this).attr("id");
            var view_mode_type_current = $(".view-mode-type.active").attr("id").replace("view-mode-", "");
            jQuery(".view-mode-type").removeClass("active");
            jQuery("#" + this_id).addClass("active");
            var view_mode_type = $(".view-mode-type.active").attr("id").replace("view-mode-", "");

            if ($("#file-menu-entry7").hasClass("menu-panel-entry-active") || $("#file-menu-entry8").hasClass("menu-panel-entry-active")) {
                ico = view_mode_type == "doc" ? "icon-file" : (view_mode_type == "blog" ? "icon-pencil2" : "icon-" + view_mode_type);
                url = _rel + "?s=" + jQuery(".menu-panel-entry-active").attr("id") + "&do=cr-approved&t=" + view_mode_type;
                if ($(this).hasClass("videomp")) {
            	    url += "&mp";
            	}
                jQuery(".list-cr-tabs").mask("");
                jQuery("#siteContent").load(url, function() {
                    jQuery(".list-cr-tabs").unmask();
                });
                return;
            }

            var current = jQuery(".main-view-mode-" + view_mode_type + ".active").attr("id");
            var current_sort = jQuery(".main-view-mode-" + view_mode_type + ".active").val();
            var cnr = current.split("-");
            var type_all = current_sort + "-" + view_mode_type;
            var ct = "";
            var url = _rel + "?s=" + jQuery(".menu-panel-entry-active").attr("id") + "&p=0&l=1&m=" + cnr[3] + "&sort=" + current_sort + "&t=" + view_mode_type;
            if (jQuery(".menu-panel-entry-active").attr("id") == "file-menu-entry6" || $("#section-playlists").hasClass("active") || $("#ch-pl").hasClass("tab-current") || $("#ch-bl").hasClass("tab-current") || $("#wrapper").hasClass("tpl_search")) {
                url = _rel + "?s=" + jQuery(".menu-panel-entry-active").attr("id") + "&p=0&m=4&sort=" + current_sort + "&t=" + view_mode_type;
                if ($("#section-playlists").hasClass("active") || $("#ch-pl").hasClass("tab-current") || $("#ch-bl").hasClass("tab-current") || $("#wrapper").hasClass("tpl_search")) {
                    url += "&pp=1";
                }
                if (typeof ch_id != "undefined") {
                    url += "&u=" + ch_id;
                }
            }
            if (typeof jQuery("#categories-accordion li a.selected").attr("rel-name") != "undefined") {
                ct = "&c=" + jQuery("#categories-accordion li a.selected").attr("rel-name");
            }
            url += ct;
            if (typeof $("#sq").val() != "undefined" && $("#sq").val().length > 3) {
                url += "&sq=" + $("#sq").val();
            }
            if ($(this).hasClass("videomp")) {
            	url += "&mp";
            }
            $(".pl-menu").addClass("hidden");
            $("#playlist-" + view_mode_type + "-add, #playlist-" + view_mode_type + "-remove").removeClass("hidden");
            if (typeof jQuery("#" + view_mode_type + "-content").html() != "undefined" && $("#main-view-mode-" + cnr[3] + "-" + type_all + "-list ul:not(.no-content)").length > 0) {
                var current_tab = $("#tab-" + view_mode_type).val();
                jQuery(".section-h3").hide();
                jQuery(".section-h3#" + view_mode_type + "-h3").show();
                jQuery("#" + view_mode_type_current + "-content").hide();
                jQuery("#" + view_mode_type + "-content").show();
                jQuery("#section-" + current_tab).addClass("content-current");

                l1 = jQuery("#main-view-mode-" + cnr[3] + "-" + type_all + "-list ul").length;
                l2 = jQuery("#main-view-mode-" + cnr[3] + "-" + type_all + "-list ul .thumbs-wrappers input:checked").length;
                if (l1 == l2) {
                    $("#select-mode").addClass("active");
                } else {
                    $("#select-mode").removeClass("active");
                }
                if ($("#main-view-mode-" + cnr[3] + "-" + type_all + "-list ul .thumbs-wrappers").css("display") == "block") {
                    $("#edit-mode").addClass("active");
                } else {
                    $("#edit-mode").removeClass("active");
                }
                    if (typeof f_lang !== "undefined") {
                    	jQuery("#new-upload").prop("title", f_lang["add_new"].replace("##TYPE##", f_lang[view_mode_type[0]]));
                    	jQuery("#new-upload span").html('<i class="icon-plus"></i>'+f_lang["add_new"].replace("##TYPE##", f_lang[view_mode_type[0]]));
                    }
            } else {
                ico = view_mode_type == "doc" ? "icon-file" : view_mode_type == "blog" ? "icon-pencil2" : "icon-" + view_mode_type;
                jQuery("#" + view_mode_type_current + "-content").mask("");
                jQuery("#view-mode-" + view_mode_type + " i").removeClass(ico).addClass("spinner icon-spinner");
                $("#edit-mode, #select-mode").removeClass("active");
                jQuery("#main-view-mode-" + cnr[3] + "-" + type_all + "-list").load(url, function() {
                    jQuery("#" + view_mode_type_current + "-content").unmask();
                    jQuery("#" + view_mode_type_current + "-content").hide();
                    jQuery("#" + view_mode_type + "-content").show();
                    jQuery("#" + view_mode_type + "-content > nav > ul > li:first").click();
                    jQuery(".section-h3").hide();
                    jQuery(".section-h3#" + view_mode_type + "-h3").show();
                    var current_tab = $("#tab-" + view_mode_type).val();
                    jQuery("#section-" + current_tab).addClass("content-current");
                    if (typeof jQuery("#main-view-mode-" + cnr[3] + "-" + type_all + "-list ul") != "undefined") {
                        /*jQuery("a[href^='#section-" + current_tab + "']").parent().addClass("tab-current").click();*/
                        /*jQuery("a[href^='#section-" + current_tab + "']").parent().addClass("tab-current");*/
                    }
                    thumbFade();
                    jQuery("#view-mode-" + view_mode_type + " i").removeClass("spinner icon-spinner").addClass(ico);
                    if (typeof f_lang !== "undefined") {
                    	jQuery("#new-upload").prop("title", f_lang["add_new"].replace("##TYPE##", f_lang[view_mode_type[0]]));
                    	jQuery("#new-upload span").html('<i class="icon-plus"></i>'+f_lang["add_new"].replace("##TYPE##", f_lang[view_mode_type[0]]));
                    }
                    if ($("#main-view-mode-" + cnr[3] + "-" + type_all + "-list ul .thumbs-wrappers").css("display") == "block") {
                    	$("#edit-mode").addClass("active");
                    }
                });
            }
        }
    }, ".view-mode-type");
});