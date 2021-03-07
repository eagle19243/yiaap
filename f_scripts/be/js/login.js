$('.icheck-box input').each(function () {
                        var self = $(this);
                        self.iCheck({
                                checkboxClass: 'icheckbox_square-blue',
                                radioClass: 'iradio_square-blue',
                                increaseArea: '20%'
                        });
                });

function oldSafariCSSfixlogin() {
    if (isOldSafari()) {
        var tabnr = $(".login-page .tabs nav ul li").length;
        var width = jQuery('.login-page').width();

        jQuery(".login-page .tabs nav ul li").width((width / tabnr)).css({"float": "left"});
        jQuery(".login-page .tabs nav").css({"width": width, "display": "inline-block"});
    }
}

jQuery(window).load(function () {
    oldSafariCSSfixlogin();
});

jQuery(window).resize(function () {
    oldSafariCSSfixlogin();
});
