
$(function () {
    function resize() {
        var $ulContainer = $(".header .nav-tabs");
        var width = 0;
        /*  var smWinsow = $(window).width();
         var smWidth = smWinsow < 600; */
        $ulContainer.children().each(function (index, element) {
            width += element.clientWidth;
        })
        if (width > $(window).width()) {
            $ulContainer.css("width", width).parent().css("overflow-x", "scroll")
        } else {
            $ulContainer.css("width", "auto").parent().css("overflow", "hidden")
        }
        // 顶部渐变
        var top = document.getElementsByClassName("top")[0];
        var header = document.getElementsByClassName("header")[0];
        var loop = document.getElementsByClassName("loop")[0];
        var height = header.offsetHeight + loop.offsetHeight;

        window.onscroll = function () {
            var scrollHeight = document.documentElement.scrollTop;
            if (scrollHeight == 0) {
                top.style.background = " rgba(192, 192, 192,1)";
            } else if (top > height) {
                top.style.background = " rgba(192, 192, 192,1)";
            } else {
                var opacty = scrollHeight / height * 0.95;
                top.style.background = 'rgba(192, 192, 192,' + opacty + ')'
            }
        }
    }
    $(window).on('resize', resize).trigger('resize');



})
