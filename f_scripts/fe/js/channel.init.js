(function(){[].slice.call(document.querySelectorAll(".tabs")).forEach(function(el){new CBPFWTabs(el)})})();function isOldSafari(){return!!navigator.userAgent.match(" Safari/")&&!navigator.userAgent.match(" Chrome")&&(!!navigator.userAgent.match(" Version/6.0")||!!navigator.userAgent.match(" Version/5."))}function oldSafariCSSfix(){return}(function(){jQuery(document).on({click:function(){}},"#channel-tabs ul:not(#main-content ul):not(.fileThumbs) li")})();jQuery(window).load(function(){oldSafariCSSfix()});jQuery(window).resize(function(){oldSafariCSSfix()});function html2amp(str){return str.replace(/&amp;/g,"&")}