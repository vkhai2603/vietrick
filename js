var target=window.location.hash.replace("#","");function copyFunction(){document.getElementById("getlink").style.display="inline-block",document.getElementById("getlink").select(),document.execCommand("copy"),document.getElementById("getlink").style.display="none",document.getElementById("LinkCopy").classList.add("copied"),setTimeout(function(){document.getElementById("LinkCopy").classList.remove("copied")},3e3)}function shortCodeIfy(e,t,a){for(var s=e.split("$"),o=/[^{\}]+(?=})/g,r=0;r<s.length;r++){var i=s[r].split("=");if(i[0].trim()==t)return null!=(a=i[1]).match(o)&&String(a.match(o)).trim()}return!1}function msgError(){return'<span class="error-msg"><b>Error:</b>&nbsp;No Results Found</span>'}function beforeLoader(){return'<div class="loader"></div>'}function getFeedUrl(e,t,a,s){return"recent"===a?"/feeds/posts/default?alt=json&max-results="+t:"comments"==e?"/feeds/comments/default?alt=json&max-results="+t:"/feeds/posts/default/-/"+a+"?alt=json&max-results="+t}function getPostLink(e,t){for(var a=0;a<e[t].link.length;a++)if("alternate"==e[t].link[a].rel){var s=e[t].link[a].href;break}return s}function getPostTitle(e,t,a){return e[t].title.$t||exportify.noTitle}function getPostTag(e,t,a){return e[t].category?'<span class="entry-category">'+e[t].category[0].term+"</span>":""}function getPostAuthor(e,t,a,s){return s=""!=exportify.postAuthorLabel?'<span class="sp">'+exportify.postAuthorLabel+"</span>":"",exportify.postAuthor?'<span class="entry-author mi">'+s+'<span class="author-name">'+e[t].author[0].name.$t+"</span></span>":""}function getPostDate(e,t,a,s,o,r){monthNames="undefined"!=typeof monthNames?monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],dateFormat="undefined"!=typeof dateFormat?dateFormat:"{m} {d}, {y}";var i=e[t].published.$t,n=i.substring(0,4),e=i.substring(5,7),t=i.substring(8,10),n=dateFormat.replace("{m}",monthNames[parseInt(e,10)-1]).replace("{d}",t).replace("{y}",n);return r=exportify.postAuthor&&""!=exportify.postDateLabel?'<span class="sp">'+exportify.postDateLabel+"</span>":"",[1==exportify.postDate?'<span class="entry-time mi">'+r+'<time class="published" datetime="'+i+'">'+n+"</time></span>":"",1==exportify.postDate?'<span class="entry-time mi"><time class="published" datetime="'+i+'">'+n+"</time></span>":""]}function getPostMeta(e,t,a,s,o){var r;return void 0!==a[s].thr$total?(r="",("related"==o||"block"==o)&&0<a[s].thr$total.$t&&(r="<span class='cmt-count'>"+a[s].thr$total.$t+"</span>")):r="",[1==exportify.postAuthor||1==exportify.postDate?'<div class="entry-meta">'+e+t[0]+"</div>":"",1==exportify.postDate?'<div class="entry-meta">'+t[1]+r+"</div>":""]}function getFirstImage(e,t){var a=$("<div>").html(e).find("img:first").attr("src"),s=a.lastIndexOf("/")||0,o=a.lastIndexOf("/",s-1)||0,e=a.substring(0,o),o=a.substring(o,s),s=a.substring(s);return(o.match(/\/s[0-9]+/g)||o.match(/\/w[0-9]+/g)||"/d"==o)&&(o="/w72-h72-p-k-no-nu"),e+o+s}function getPostImage(e,t,a,s){var o=null!=e[t].content?e[t].content.$t:"";return a=e[t].media$thumbnail?e[t].media$thumbnail.url:"https://resources.blogblog.com/img/blank.gif",-1<o.indexOf(o.match(/<iframe(?:.+)?src=(?:.+)?(?:www.youtube.com)/g))?!(-1<o.indexOf("<img"))||o.indexOf(o.match(/<iframe(?:.+)?src=(?:.+)?(?:www.youtube.com)/g))<o.indexOf("<img")?a.replace("img.youtube.com","i.ytimg.com").replace("/default.","/maxresdefault."):getFirstImage(o):-1<o.indexOf("<img")?getFirstImage(o):"https://resources.blogblog.com/img/blank.gif"}function getPostImageType(e,t){return e.match("i.ytimg.com")?"is-video":"is-image"}function getPostSummary(e,t,a,s,o,r){return e[t].content?'<span class="entry-excerpt excerpt">'+$("<div>").html(e[t].content.$t).text().trim().substr(0,a)+"&#8230;</span>":""}function getPostComments(e,t,a,s){var o=e[t].author[0].name.$t,r=e[t].author[0].gd$image.src.replace("/s113","/s72-c").replace("/s220","/s72-c"),e=e[t].title.$t;return(r.match("//img1.blogblog.com/img/blank.gif")||r.match("//img1.blogblog.com/img/b16-rounded.gif"))&&(r="//4.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/w72-h72-p-k-no-nu/avatar.jpg"),'<div class="cmm1-item item-'+t+'"><a class="entry-inner wrap-all-link" href="'+a+'" title="'+o+'"><span class="entry-image-wrap cmm-avatar"><span class="entry-thumb" data-image="'+r+'"></span></span><div class="entry-header"><h2 class="entry-title cmm-title">'+o+'</h2><p class="cmm-snippet excerpt">'+e+"</p></div></a></div>"}function getAjax(p,u,e,g,t){switch("related"==u&&(e=parseInt(e)+1),u){case"msimple":case"ticker":case"featured":case"block":case"grid":case"video":case"list":case"default":case"mini":case"comments":case"related":0==g&&(g="geterror404");var a=getFeedUrl(u,e,g);$.ajax({url:a,type:"GET",dataType:"json",cache:!0,beforeSend:function(e){switch(u){case"ticker":case"featured":case"block":case"grid":case"video":case"list":case"default":case"mini":case"comments":case"related":p.html(beforeLoader()).parent().addClass("type-"+u)}},success:function(e){var t="",a=-1,s=e.feed.entry;if("related"==u&&null!=s)for(var o=0,r=s;o<r.length;o++)clink==r[o].link.slice(-1)[0].href&&(a=o);switch(u){case"msimple":t='<div class="ul mega-items">';break;case"ticker":t='<div class="ticker-items">';break;case"featured":t='<div class="featured-items">';break;case"block":case"grid":case"list":case"video":t='<div class="content-block '+u+'-items">';break;case"default":t='<div class="default-items">';break;case"mini":t='<div class="mini-items">';break;case"comments":t='<div class="cmm1-items">';break;case"related":t='<div class="related-posts">'}e=e.feed.entry;if(null!=e)for(var i=0,r=e;i<r.length;i++){r.length,s=getPostLink(r,i),o=getPostTitle(r,i);var n=getPostTag(r,i),l=getPostAuthor(r,i),c=getPostDate(r,i,n),d=getPostImage(r,i),m=getPostImageType(d,i),h=getPostMeta(l,c,r,i,u),f="";switch(u){case"msimple":f+='<div class="mega-item post"><a title="'+o+'" class="entry-image-wrap  '+m+'" href="'+s+'"><svg class="entry-thumb" viewBox="0 0 16 9" data-image="'+d+'"/></a><h2 class="entry-title"><a href="'+s+'" title="'+o+'">'+o+"</a></h2>"+h[1]+"</div>";break;case"ticker":f+='<div class="ticker-item item-'+i+'"><h2 class="entry-title"><a href="'+s+'" title="'+o+'">'+o+"</a></h2></div>";break;case"featured":f+='<div class="featured-item cs item-'+i+'"><a class="featured-inner" href="'+s+'" title="'+o+'"><span class="entry-image-wrap before-mask '+m+'"><span class="entry-thumb" data-image="'+d+'"></span></span><div class="entry-header entry-info">'+n+'<h2 class="entry-title">'+o+"</h2>"+h[0]+"</div></a></div>";break;case"block":f+=1===i?'<div class="block-item item-'+i+'"><a title="'+o+'" class="entry-image-wrap  '+m+'" href="'+s+'"><svg class="entry-thumb" viewBox="0 0 16 9" data-image="'+d+'"/></a><div class="entry-header">'+h[1]+'<h2 class="entry-title"><a href="'+s+'" title="'+o+'">'+o+"</a></h2>"+getPostSummary(r,i,160)+"</div></div>":'<div class="block-item item-'+i+'"><a title="'+o+'" class="entry-image-wrap  '+m+'" href="'+s+'"><svg class="entry-thumb" viewBox="0 0 16 9" data-image="'+d+'"/></a><div class="entry-header">'+h[1]+'<h2 class="entry-title"><a href="'+s+'" title="'+o+'">'+o+"</a></h2></div></div>";break;case"grid":f+='<div class="grid-item item-'+i+'"><a title="'+o+'" class="entry-image-wrap  '+m+'" href="'+s+'"><svg class="entry-thumb" viewBox="0 0 16 9" data-image="'+d+'"/></a><div class="entry-header"><h2 class="entry-title"><a title="'+o+'" href="'+s+'">'+o+"</a></h2>"+h[1]+"</div></div>";break;case"list":f+='<div class="list-item item-'+i+'"><a title="'+o+'" class="entry-image-wrap  '+m+'" href="'+s+'"><svg class="entry-thumb" viewBox="0 0 16 9" data-image="'+d+'"/></a><div class="entry-header"><h2 class="entry-title"><a title="'+o+'" href="'+s+'">'+o+"</a></h2>"+getPostSummary(r,i,120)+h[0]+"</div></div>";break;case"video":f+='<div class="video-item item-'+i+'"><a title="'+o+'" class="entry-image-wrap  is-video" href="'+s+'"><svg class="entry-thumb" viewBox="0 0 16 9" data-image="'+d+'"/></a><div class="entry-header"><h2 class="entry-title"><a title="'+o+'" href="'+s+'">'+o+"</a></h2>"+h[1]+"</div></div>";break;case"default":f+='<div class="default-item ds item-'+i+'"><a title="'+o+'" class="entry-image-wrap  '+m+'" href="'+s+'"><svg class="entry-thumb" viewBox="0 0 16 9" data-image="'+d+'"/></a><div class="entry-header"><h2 class="entry-title"><a href="'+s+'" title="'+o+'">'+o+"</a></h2>"+h[1]+"</div></div>";break;case"mini":f+='<div class="mini-item item-'+i+'"><a title="'+o+'" class="entry-image-wrap  '+m+'" href="'+s+'"><svg class="entry-thumb" viewBox="0 0 16 9" data-image="'+d+'"/></a><div class="entry-header"><h2 class="entry-title"><a href="'+s+'" title="'+o+'">'+o+"</a></h2>"+h[1]+"</div></div>";break;case"comments":f+=getPostComments(r,i,s);break;case"related":if(1<r.length&&(i==a||a<0&&i==r.length-1))continue;f+='<div class="related-item item-'+i+'"><a title="'+o+'" class="entry-image-wrap  '+m+'" href="'+s+'"><svg class="entry-thumb" width="100" height="62.5" viewBox="0 0 16 9" width="" data-image="'+d+'"/></a><div class="entry-header"><h2 class="entry-title"><a href="'+s+'" title="'+o+'">'+o+"</a></h2>"+h[1]+"</div></div>"}t+=f}else t="msimple"===u?'<div class="ul mega-items no-items">'+msgError()+"</div>":msgError();switch(u){case"msimple":t+="</div>",p.append(t).addClass("msimple"),p.find("a:first").attr("href",function(e,t){return t="recent"===g?t.replace(t,"/search"):t.replace(t,"/search/label/"+g)});break;case"ticker":t+="</div>",p.html(t).tickerify();break;default:t+="</div>",p.html(t)}p.find("span.entry-thumb,svg.entry-thumb").lazyify()},error:function(){"msimple"===u?p.append('<div class="ul mega-items no-items">'+msgError()+"</div>"):p.html(msgError())}})}}function ajaxMega(e,t,a,s,o){if(o.match("getcontent")){if("msimple"==t)return getAjax(e,t,a,s);e.append('<div class="ul mega-items no-items">'+msgError()+"</div>")}}function ajaxTicker(e,t,a,s,o){if(o.match("getcontent")){if("ticker"==t)return getAjax(e,t,a,s);e.html(msgError())}}function ajaxFeatured(e,t,a,s,o){if(o.match("getcontent")){if("featured"==t)return getAjax(e,t,a,s);e.html(msgError())}}function ajaxBlock(e,t,a,s,o,r,i){if(o.match("getcontent")){if("block"==t||"grid"==t||"list"==t||"video"==t)return 0!=s&&(r="recent"==s?"/search":"/search/label/"+s,i=""!=viewAllText.trim()?viewAllText:exportify.viewAll,e.parent().find(".widget-title").append('<a href="'+r+'" class="wt-l">'+i+"</a>")),getAjax(e,t,a,s);e.html(msgError())}}function ajaxWidget(e,t,a,s,o){if(o.match("getcontent")){if("default"==t||"mini"==t||"comments"==t)return getAjax(e,t,a,s);e.html(msgError())}}function ajaxRelated(e,t,a,s,o){return getAjax(e,t,a,s,o)}function disqusComments(e){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src="//"+e+".disqus.com/blogger_item.js",(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(t)}function beautiAvatar(e){$(e).attr("src",function(e,t){return(t=(t=t.replace("//resources.blogblog.com/img/blank.gif","//4.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/s39/avatar.jpg")).replace("//lh3.googleusercontent.com/zFdxGE77vvD2w5xHy6jkVuElKv-U9_9qLkRYK8OnbDeJPtjSZ82UPq5w6hJ-SA=s35","//4.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/s39/avatar.jpg")).replace("/s35","/s39")})}function fixedSidebarIfy(e){$(e).each(function(e){fixedSidebar="undefined"==typeof fixedSidebar||fixedSidebar,1==fixedSidebar&&(e=1==fixedMenu?89:30,$(this).theiaStickySidebar({containerSelector:"#content-wrapper > .container",additionalMarginTop:e,additionalMarginBottom:30}))})}window.location.hash="",$(window).on("load",function(){target&&$("html, body").animate({scrollTop:$("#"+target).offset().top},700,"swing",function(){}),$('a[href*="#"]:not(".tocify-wrap a")').on("click",function(e){let t=this.hash,a=new URL(this.href),s=new URL(window.location.href);a.hash="",s.hash="",t&&$(t).length&&a.href==s.href&&(e.preventDefault(),$("html, body").animate({scrollTop:$(t).offset().top-10},750))})}),fixedMenu="undefined"==typeof fixedMenu||fixedMenu,viewAllText="undefined"!=typeof viewAllText?viewAllText:exportify.viewAll,$("#vtrick-pro-main-nav").menuify(),$("#vtrick-pro-main-nav .widget").addClass("show-menu"),$(".show-search").on("click",function(){$("body").addClass("search-active"),$("#main-search-wrap").fadeIn(170).find("input").focus()}),$(".search-close").on("click",function(){$("body").removeClass("search-active"),$("#main-search-wrap").fadeOut(170).find("input").blur()}),$("html").each(function(){var e=$(this);darkMode="undefined"!=typeof darkMode&&darkMode,userDarkMode="undefined"==typeof userDarkMode||userDarkMode,1!=darkMode&&0!=userDarkMode&&("dark"==localStorage.themeColor&&e.addClass("is-dark"),$(".darkmode-toggle").on("click",function(){"dark"!=localStorage.themeColor?(e.addClass("is-dark"),localStorage.themeColor="dark"):(e.removeClass("is-dark"),localStorage.themeColor="light")}))}),$("#ticker .PopularPosts .widget-content").tickerify(),$(".bp-title a.wt-l").each(function(){""!=viewAllText.trim()&&$(this).text(viewAllText)}),$(".sidebar .social-icons li a").each(function(e){var t=$(this),a=t.attr("href").split("#");null!=a[1]&&""!=(e=a[1].trim())&&t.append('<span class="text">'+e+"</span>"),t.attr("href",a[0].trim())}),$(".FollowByEmail .widget-content").each(function(e,t){var a=$(this),s=a.data("shortcode");null!=s&&(e=shortCodeIfy(s,"title"),t=shortCodeIfy(s,"text"),0!=e&&a.find(".follow-by-email-title").text(e),0!=t&&a.find(".follow-by-email-text").text(t))}),$(".post-body a").each(function(){var e=$(this),t=e.html(),a=t.toLowerCase(),s=shortCodeIfy(t,"text"),o=shortCodeIfy(t,"icon"),t=shortCodeIfy(t,"color");a.match("getbutton")&&0!=s&&(e.addClass("button btn").text(s),0!=o&&e.addClass(o),0!=t&&e.addClass("colored-button").attr("style","background-color:"+t+";"))}),$(".post-body b").each(function(){var e=$(this),t=e.text().toLowerCase().trim();t.match("{contactform}")&&(e.replaceWith('<div class="contact-form"/>'),$(".contact-form").append($("#ContactForm1"))),t.match("{leftsidebar}")&&($("body").addClass("is-left"),e.remove()),t.match("{rightsidebar}")&&($("body").addClass("is-right").removeClass("is-left"),e.remove()),t.match("{fullwidth}")&&($("body").addClass("no-sidebar"),e.remove())}),$("#vtrick-pro-new-before-ad").each(function(){var e=$(this);e.length&&$("#before-ad").appendTo(e)}),$("#vtrick-pro-new-after-ad").each(function(){var e=$(this);e.length&&$("#after-ad").appendTo(e)}),$("#vtrick-pro-main-before-ad .widget").each(function(){var e=$(this);e.length&&e.appendTo($("#before-ad"))}),$("#vtrick-pro-main-after-ad .widget").each(function(){var e=$(this);e.length&&e.appendTo($("#after-ad"))}),$("#vtrick-pro-post-footer-ads .widget").each(function(){var e=$(this);e.length&&e.appendTo($("#post-footer-ads"))}),$(".post-body blockquote").each(function(){var e=$(this),t=e.text().toLowerCase().trim(),a=e.html();if(t.match("{alertsuccess}")){const t=a.replace("{alertSuccess}","");e.replaceWith('<div class="alert-message alert-success">'+t+"</div>")}if(t.match("{alertinfo}")){const t=a.replace("{alertInfo}","");e.replaceWith('<div class="alert-message alert-info">'+t+"</div>")}if(t.match("{alertwarning}")){const t=a.replace("{alertWarning}","");e.replaceWith('<div class="alert-message alert-warning">'+t+"</div>")}if(t.match("{alerterror}")){const t=a.replace("{alertError}","");e.replaceWith('<div class="alert-message alert-error">'+t+"</div>")}if(t.match("{codebox}")){const t=a.replace("{codeBox}","");e.replaceWith('<pre class="code-box">'+t+"</pre>")}}),$(".post-body pre").each(function(){var e=$(this),t=(e.text().toLowerCase().trim(),e.html()),a=e.attr("lang")||"html";e.is("[lang]")&&e.replaceWith('<pre class="language-'+a+'"><code>'+t+"</code></pre>")}),$(".entry-share-links .window-ify,.post-share .window-ify").on("click",function(){var e=$(this),t=e.data("url"),a=e.data("width"),s=e.data("height"),o=window.screen.width,e=window.screen.height,o=Math.round(o/2-a/2),e=Math.round(e/2-s/2);window.open(t,"_blank","scrollbars=yes,resizable=yes,toolbar=no,location=yes,width="+a+",height="+s+",left="+o+",top="+e).focus()}),$(".vtrick-pro-share-links").each(function(){var e=$(this);e.find(".show-hid a").on("click",function(){e.toggleClass("show-hidden")})}),$(".about-author .author-text").each(function(){var e=$(this),t=e.find("a");t.each(function(){var e=$(this),t=e.text().trim(),a=e.attr("href");e.replaceWith('<li class="'+t+'"><a href="'+a+'" title="'+t+'" rel="noopener noreferrer" target="_blank"/></li>')}),t.length&&e.parent().append('<ul class="author-links social social-color"></ul>'),e.find("li").appendTo(".author-links")}),$("#vtrick-pro-main-nav-menu li.mega-menu").each(function(e,t){var a=$(this),s=a.find("a").data("shortcode");null!=s&&(e=s.toLowerCase(),ajaxMega(a,"msimple",5,shortCodeIfy(s,"label"),e))}),$("#ticker .HTML .widget-content").each(function(t,a){var s=$(this),o=$(window),e=s.data("shortcode");null!=e&&(mtc=e.toLowerCase(),t=shortCodeIfy(e,"results"),a=shortCodeIfy(e,"label"),o.on("load resize scroll",function e(){o.scrollTop()+o.height()>=s.offset().top&&(o.off("load resize scroll",e),ajaxTicker(s,"ticker",t,a,mtc))}).trigger("scroll"))}),$("#featured .HTML .widget-content").each(function(t){var a=$(this),s=$(window),e=a.data("shortcode");null!=e&&(mtc=e.toLowerCase(),t=shortCodeIfy(e,"label"),s.on("load resize scroll",function e(){s.scrollTop()+s.height()>=a.offset().top&&(s.off("load resize scroll",e),ajaxFeatured(a,"featured",3,t,mtc))}).trigger("scroll"))}),$(".content-section .HTML .widget-content").each(function(t,a,s){var o=$(this),r=$(window),e=o.data("shortcode");null!=e&&(mtc=e.toLowerCase(),t=shortCodeIfy(e,"results"),a=shortCodeIfy(e,"label"),s=shortCodeIfy(e,"type"),r.on("load resize scroll",function e(){r.scrollTop()+r.height()>=o.offset().top&&(r.off("load resize scroll",e),ajaxBlock(o,s,t,a,mtc))}).trigger("scroll"))}),$(".vtrick-pro-widget-ready .HTML .widget-content").each(function(t,a,s,o){var r=$(this),i=$(window),e=r.data("shortcode");null!=e&&(t=e.toLowerCase(),a=shortCodeIfy(e,"results"),s=shortCodeIfy(e,"label"),o=shortCodeIfy(e,"type"),i.on("load resize scroll",function e(){i.scrollTop()+i.height()>=r.offset().top&&(i.off("load resize scroll",e),ajaxWidget(r,o,a,s,t))}).trigger("scroll"))}),$("#vtrick-pro-related-posts .HTML").each(function(i,n){var l=[];$(".vtrick-pro-related-content meta").each(function(){l.push($(this).attr("content"))});var c=$(this).data("shortcode");null!=c&&$("#related-wrap").each(function(t,a){var e=$(this),s=$(window),o=e.find(".vtrick-pro-related-content"),r=(i=shortCodeIfy(c,"title"),n=shortCodeIfy(c,"results"),[i,n]);t=0!=r[1]?r[1]:3,0!=r[0]&&e.find(".related-title .title > span").text(r[0]),a=e.find(".related-tag").data("label"),s.on("load resize scroll",function e(){s.scrollTop()+s.height()>=o.offset().top&&(s.off("load resize scroll",e),ajaxRelated(o,"related",t,a,l))}).trigger("scroll")})}),$(".vtrick-pro-blog-post-comments").each(function(){var e=$(this),t=e.data("shortcode"),a=shortCodeIfy(t,"type"),s="comments-system-"+a,o=e.find("#top-continue .comment-reply");switch(a){case"disqus":var r=shortCodeIfy(t,"shortname");0!=r&&(disqus_shortname=r),disqusComments(disqus_shortname),e.addClass(s).show();break;case"facebook":e.addClass(s).find("#comments").html('<div class="fb-comments" data-width="100%" data-href="'+disqus_blogger_current_url+'" order_by="time" data-numposts="5" data-lazy="true"></div>'),e.show();break;case"hide":e.hide();break;default:e.addClass("comments-system-blogger").show(),$(".entry-meta .entry-comments-link").addClass("show"),o.addClass("btn")}}),$(function(){$(".entry-image-wrap .entry-thumb,.author-avatar-wrap .author-avatar,#particle, .ratio-16-10").lazyify(),$("#vtrick-pro-mobile-menu").each(function(){var e=$(this),t=$("#vtrick-pro-main-nav-menu").clone();t.attr("id","main-mobile-nav"),t.find(".mega-items").remove(),t.find(".mega-menu > a").each(function(e,t){var a=$(this),s=a.data("shortcode");null!=s&&(t="recent"==(e=shortCodeIfy(s.trim(),"label"))?"/search":"/search/label/"+e,a.attr("href",t))}),t.appendTo(e),$(".mobile-menu-toggle, .hide-vtrick-pro-mobile-menu, .overlay").on("click",function(){$("body").toggleClass("nav-active")}),$(".vtrick-pro-mobile-menu .has-sub").append('<div class="submenu-toggle"/>'),$(".vtrick-pro-mobile-menu .mega-menu").find(".submenu-toggle").remove(),$(".vtrick-pro-mobile-menu ul li .submenu-toggle").on("click",function(e){$(this).parent().hasClass("has-sub")&&(e.preventDefault(),($(this).parent().hasClass("show")?$(this).parent().removeClass("show").find("> .m-sub"):$(this).parent().addClass("show").children(".m-sub")).slideToggle(170))})}),$(".mm-footer .mm-social").each(function(){var e=$(this),t=$("#vtrick-pro-about-section ul.social").clone();t.removeClass("social-bg-hover"),t.appendTo(e)}),$(".mm-footer .mm-menu").each(function(){var e=$(this);$("#footer-menu ul.link-list").clone().appendTo(e)}),$(".header-inner").each(function(){var t,a,e,s,o=$(this);1==fixedMenu&&0<o.length&&(t=$(document).scrollTop(),a=o.offset().top,e=o.height(),s=a+e+e,$(window).scroll(function(){var e=$(document).scrollTop();s<e?o.addClass("is-fixed"):(e<a||e<=1)&&o.removeClass("is-fixed"),t<e?o.removeClass("show"):o.addClass("show"),t=e}))}),fixedSidebarIfy("#main-wrapper, #sidebar-wrapper"),$("#post-body iframe").each(function(){var e=$(this);e.attr("src").match("www.youtube.com")&&e.wrap('<div class="responsive-video-wrap"/>')}),$("p.comment-content").each(function(){var e=$(this);e.replaceText(/(https:\/\/\S+(\.png|\.jpeg|\.jpg|\.gif))/g,'<img src="$1"/>'),e.replaceText(/(?:https:\/\/)?(?:www\.)?(?:youtube\.com)\/(?:watch\?v=)?(.+)/g,'<div class="responsive-video-wrap"><iframe id="youtube" width="100%" height="358" class="lazyload" data-src="https://www.youtube.com/embed/$1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>')}),$("#vtrick-pro-load-more-link").each(function(){var a=$(this).data("load");a&&$("#vtrick-pro-load-more-link").show(),$("#vtrick-pro-load-more-link").on("click",function(e){$("#vtrick-pro-load-more-link").hide(),$.ajax({url:a,success:function(e){var t=$(e).find(".blog-posts");t.find(".index-post").addClass("post-animated post-fadeInUp"),$(".blog-posts").append(t.html()),(a=$(e).find("#vtrick-pro-load-more-link").data("load"))?$("#vtrick-pro-load-more-link").show():($("#vtrick-pro-load-more-link").hide(),$("#blog-pager .no-more").addClass("show"))},beforeSend:function(){$("#blog-pager .loading").show()},complete:function(){$("#blog-pager .loading").hide(),$(".index-post .entry-image-wrap .entry-thumb,.author-avatar-wrap .author-avatar").lazyify(),fixedSidebarIfy("#main-wrapper")}}),e.preventDefault()})}),$("#vtrick-pro-cookie-ify").each(function(){var t=$(this),e=t.find(".widget.Text").data("shortcode");null!=e&&(ok=shortCodeIfy(e,"ok"),days=shortCodeIfy(e,"days"),0!=ok&&t.find("#vtrick-pro-cookie-ify-accept").text(ok),days=0!=days?Number(days):7),0<t.length&&("1"!==$.cookie("vtrick_pro_cookie_ify_consent")&&(t.css("display","block"),$(window).on("load",function(){t.addClass("is-visible")})),$("#vtrick-pro-cookie-ify-accept").off("click").on("click",function(e){e.preventDefault(),e.stopPropagation(),$.cookie("vtrick_pro_cookie_ify_consent","1",{expires:days,path:"/"}),t.removeClass("is-visible"),setTimeout(function(){t.css("display","none")},500)}),cookieChoices={})}),$("#back-top").each(function(){var a=$(this);$(window).on("scroll",function(){var e=window.innerHeight,t=$("#vtrick-pro-cta2-section ul.cta-containter");100<=$(this).scrollTop()?(a.fadeIn(170),t.hasClass("has-backtop")||(t.animate({bottom:"+=46px"},170),t.addClass("has-backtop"))):(a.fadeOut(170),t.hasClass("has-backtop")&&(t.animate({bottom:"-=46px"},170),t.removeClass("has-backtop"))),a.hasClass("on-footer")&&!t.hasClass("get-footer")&&(t.animate({bottom:"-=46px"},170),t.addClass("get-footer")),!a.hasClass("on-footer")&&t.hasClass("get-footer")&&(t.animate({bottom:"+=46px"},170),t.removeClass("get-footer")),$(this).scrollTop()+e>=$("#footer-wrapper").offset().top+36?a.addClass("on-footer"):a.removeClass("on-footer")}),a.on("click",function(){$("html, body").animate({scrollTop:0},500)})})});