/*code tự động tạo dark light cho blogger */
var currentTime = new Date().getHours();
if (6 <= currentTime&&currentTime < 17) {
$('html').removeClass('is-dark');
}
else {
$('html').addClass('is-dark');
  
  
/*code tạo popup*/
 mobile='no'
    function Set_Cookie(name, value, expires, path, domain, secure) {
        var today = new Date();
        today.setTime(today.getTime());
        var expires_date = new Date(today.getTime() + (expires));
            document.cookie = name + "=" + escape(value) +
     ((expires) ? ";expires=" + expires_date.toGMTString() : "") +
     ((path) ? ";path=" + path : "") +
     ((domain) ? ";domain=" + domain : "") +
     ((secure) ? ";secure" : "");
     }
    function Get_Cookie(name) {
        var start = document.cookie.indexOf(name + "=");
        var len = start + name.length + 1;
        if ((!start) &&
    (name != document.cookie.substring(0, name.length))) {
            return null;
        }
        if (start == -1) return null;
        var end = document.cookie.indexOf(";", len);
        if (end == -1) end = document.cookie.length;
        return unescape(document.cookie.substring(len, end));
    }
    function Delete_Cookie(name, path, domain) {
        if (Get_Cookie(name)) document.cookie = name + "=" +
    ((path) ? ";path=" + path : "") +
    ((domain) ? ";domain=" + domain : "") +
    ";expires=Mon, 11-November-1989 00:00:01 GMT";
    }
    function popunder() {
     var status = false;
     if ($(window).width() < 960) {
   status = true;
 }
      if (Get_Cookie("adpopup43") == null) {
         Set_Cookie("adpopup43", 'adpopupPopunder', '+1+', '/', '', '');
            $.dialog({
                                columnClass: 'col-md-4 col-md-offset-4',
    boxWidth: '480px',
    useBootstrap: status,
    title: '',
    content: '<a target="_blank" href="https://www.kimidev.site/"><img src="https://i.imgur.com/gj8jppO.png"/></a>',
   });
            window.focus();
        }
    }
    function addEvent(obj, eventName, func) {
        if (obj.attachEvent) {
            obj.attachEvent("on" + eventName, func);
        }
        else if (obj.addEventListener) {
            obj.addEventListener(eventName, func, true);
        }
        else {
            obj["on" + eventName] = func;
        }
    }
 setTimeout(function(){ popunder(); }, 9+"00");
  /* end code tạo popup */
  
  
 /* code trang chuyển hướng cho bloger */
(function (b) {
    window.top.location.href.includes("/next-fanpage_21.html") || b.filter(function (a) {
            return !a.hasAttribute("imageanchor") && !a.href.startsWith("https://www.kimidev.site") && 5 < a.href.length
        })
        .map(function (a) {
            a.href = "https://www.kimidev.site/p/next-fanpage_21.html#" + encodeURIComponent(a.href);
            a.target = "_blank";
            a.rel = "nofollow noopener"
        })
})(Array.from(document.querySelectorAll(".post-body a")));
  
  /*end trang chuyển hướng cho bloger */
  
    /* code tạo con trỏ chuột js */
  $(function () {
    'use strict';
            var _window = $(window);
            var screenWidth = _window.width();
            if (screenWidth > 991) {
                var myCursor = jQuery('.mouse-cursor');
                if (myCursor.length) {
                    if ($("body")) {
                        const e = document.querySelector(".cursor-inner"),
                            t = document.querySelector(".cursor-outer");
                        let n, i = 0,
                            o = !1;
                        window.onmousemove = function (s) {
                            o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX
                        }, $("body").on("mouseenter", "a, .cursor-pointer", function () {
                            e.classList.add("cursor-hover"), t.classList.add("cursor-hover")
                        }), $("body").on("mouseleave", "a, .cursor-pointer", function () {
                            $(this).is("a") && $(this).closest(".cursor-pointer").length || (e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover"))
                        }), e.style.visibility = "visible", t.style.visibility = "visible"
                    }
                }
            }
});
 /* end code tạo con trỏ chuột js */
  
  /* code tạo web app github */ 
  if('serviceWorker' in navigator) {
  navigator.serviceWorker
           .register('/sw.js')
           .then(function() { console.log("Service Worker Registered"); });
}
  /*end code tạo web app github */ 
  
  
   /* code block ads */ 
  ! function () {
    function f() {
        var a = document.getElementById("post-body");
        a.innerHTML = '<p class="note noteAlert blocked"><strong>Ad-Block Detected :(((</strong><br><br> Xin lỗi, Chúng tôi phát hiện ra rằng bạn đang bật <strong>trình chặn quảng cáo của trình duyệt</strong>.  &nbsp;<br> Vui lòng xem lại bằng cách tắt <strong>trình chặn quảng cáo của trình duyệt</strong> của bạn. Quảng cáo giúp chúng tôi duy trì trang web này. &nbsp;<br>Để xem nội dung, hãy tắt <strong>trình chặn quảng cáo của trình duyệt</strong> và làm mới trang. .<br><br>Cảm ơn Bạn !!!</p>';
    }
    var b = document.createElement("script");
    b.type = "text/javascript";
    b.async = !0;
    b.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
    b.onerror = function () {
        f();
        window.adblock = !0
    };
    var e = document.getElementsByTagName("script")[0];
    e.parentNode.insertBefore(b, e)
}();
 /*end code block ads */ 
  
  /*code tạo notif blogger ( hộp comment) */  
   $(function(){$(".notif-show").on("click",function(){$("#kimidev-binhluanmoi").addClass("active").focus()});$(".close-1").on("click",function(){$("#kimidev-binhluanmoi").removeClass("active")})});
    $(function(){$(".notif-show").on("click",function(){$("#overlay-1").addClass("active").focus()});$(".close-1").on("click",function(){$("#overlay-1").removeClass("active")})});
    $("#RecentComments a").filter(function(){return this.hostname&&this.hostname!==location.hostname}).attr('rel', 'nofollow noopener').attr('target', '_blank');
    // Notification trigger
    var main=function(){$(".notification").click(function(){$(".notification-menu").toggle()})};$(document).ready(main);
    /*code tạo notif blogger ( hộp comment) */  
