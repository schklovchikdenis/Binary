$(document).ready(function(){function i(t,e){$(".popup").removeClass("active").hide(),$(".header-menu").hasClass("active")||$("body").data("scroll",$(window).scrollTop()),c.any()?setTimeout(function(){$("body").addClass("lock")},300):($("body").css({paddingRight:$(window).outerWidth()-$(".wrapper").outerWidth()}).addClass("lock"),$(".pdb").css({paddingRight:$(window).outerWidth()-$(".wrapper").outerWidth()})),history.pushState("","","#"+t),""!=e&&null!=e&&$(".popup-"+t+" .popup-video__value").html('<iframe src="https://www.youtube.com/embed/'+e+'?autoplay=1"  allow="autoplay; encrypted-media" allowfullscreen></iframe>'),$(".popup-"+t).fadeIn(300).delay(300).addClass("active"),0<$(".popup-"+t).find(".slick-slider").length&&$(".popup-"+t).find(".slick-slider").slick("setPosition")}function e(){$(".popup").removeClass("active").fadeOut(300),$(".header-menu").hasClass("active")||(c.any()?($("body").removeClass("lock"),$("body,html").scrollTop(parseInt($("body").data("scroll")))):(setTimeout(function(){$("body").css({paddingRight:0}),$(".pdb").css({paddingRight:0})},200),setTimeout(function(){$("body").removeClass("lock"),$("body,html").scrollTop(parseInt($("body").data("scroll")))},200))),$(".popup-video__value").html(""),history.pushState("","",window.location.href.split("#")[0])}function s(){var t=$(window).outerHeight();$(".mainblock").css("min-height",t)}function l(t){if(t.addClass("err"),t.parent().addClass("err"),t.parent().find(".form__error").remove(),t.hasClass("email")){var e="";null!=(e=(""==t.val()||(t.val(),t.attr("data-value")),t.data("error")))&&t.parent().append('<div class="form__error">'+e+"</div>")}else null!=t.data("error")&&0==t.parent().find(".form__error").length&&t.parent().append('<div class="form__error">'+t.data("error")+"</div>");0<t.parents(".select-block").length&&(t.parents(".select-block").parent().addClass("err"),t.parents(".select-block").find(".select").addClass("err"))}function n(t){t.removeClass("err"),t.parent().removeClass("err"),t.parent().find(".form__error").remove(),0<t.parents(".select-block").length&&(t.parents(".select-block").parent().removeClass("err"),t.parents(".select-block").find(".select").removeClass("err").removeClass("active"))}function o(t){""==t.val()&&(t.inputmask("remove"),t.val(t.attr("data-value")),t.removeClass("focus"),t.parent().removeClass("focus"))}function r(){$.each($('.select[data-type="search"]'),function(t,e){var s=$(this).parent(),a=$(this).parent().find("select");1==$(this).find(".select-options__value:visible").length?($(this).addClass("focus"),$(this).parents(".select-block").find("select").val($(".select-options__value:visible").data("value")),$(this).find(".select-title__value").val($(".select-options__value:visible").html()),$(this).find(".select-title__value").attr("data-value",$(".select-options__value:visible").html())):""==a.val()&&($(this).removeClass("focus"),s.find("input.select-title__value").val(a.find('option[selected="selected"]').html()),s.find("input.select-title__value").attr("data-value",a.find('option[selected="selected"]').html()))})}$(window).outerWidth(),$(window).outerHeight();var t=window.navigator.userAgent,c=(t.indexOf("MSIE "),{Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return c.Android()||c.BlackBerry()||c.iOS()||c.Opera()||c.Windows()}});if((-1<(t=navigator.userAgent).indexOf("MSIE ")||-1<t.indexOf("Trident/"))&&$("body").addClass("ie"),c.any()&&$("body").addClass("touch"),(c={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return c.Android()||c.BlackBerry()||c.iOS()||c.Opera()||c.Windows()}}).any(),location.hash){var a=location.hash.replace("#","");0<$(".popup-"+a).length?i(a):0<$("div."+a).length&&$("body,html").animate({scrollTop:$("div."+a).offset().top},500,function(){})}$(".wrapper").addClass("loaded");var d,h,p;if(c.iOS());$(".header-menu__icon").click(function(t){$(this).toggleClass("active"),$(".header-menu").toggleClass("active"),$(this).hasClass("active")&&$("body").data("scroll",$(window).scrollTop()),$("body").toggleClass("lock"),$(this).hasClass("active")||$("body,html").scrollTop(parseInt($("body").data("scroll")))}),0<$(".gallery").length&&baguetteBox.run(".gallery",{}),$(".pl").click(function(t){return i($(this).attr("href").replace("#",""),$(this).data("vid")),!1}),$(".popup-close,.popup__close").click(function(t){return e(),!1}),$(".popup").click(function(t){if(!$(t.target).is(".popup>.popup-table>.cell *")||$(t.target).is(".popup-close")||$(t.target).is(".popup__close"))return e(),!1}),$(document).on("keydown",function(t){27==t.which&&e()}),$(".goto").click(function(){var t=$(this).attr("href").replace("#","");return $("body,html").animate({scrollTop:$("."+t).offset().top+0},500,function(){}),$(".header-menu").hasClass("active")&&($(".header-menu,.header-menu__icon").removeClass("active"),$("body").removeClass("lock")),!1}),$.each($(".ibg"),function(t,e){0<$(this).find("img").length&&$(this).css("background-image",'url("'+$(this).find("img").attr("src")+'")')}),$(document).on("click touchstart",function(t){$(t.target).is(".select *")||$(".select").removeClass("active")}),$(window).scroll(function(){$(window).width();50<$(window).scrollTop()?$("#up").fadeIn(300):$("#up").fadeOut(300)}),$("#up").click(function(t){$("body,html").animate({scrollTop:0},300)}),$("body").on("click",".tab__navitem",function(t){var e=$(this).index();if($(this).hasClass("parent"))e=$(this).parent().index();$(this).hasClass("active")||($(this).closest(".tabs").find(".tab__navitem").removeClass("active"),$(this).addClass("active"),$(this).closest(".tabs").find(".tab__item").removeClass("active").eq(e).addClass("active"),0<$(this).closest(".tabs").find(".slick-slider").length&&$(this).closest(".tabs").find(".slick-slider").slick("setPosition"))}),$.each($(".spoller.active"),function(t,e){$(this).next().show()}),$("body").on("click",".spoller",function(t){return $(this).hasClass("mob")&&!c.any()||($(this).hasClass("closeall")&&!$(this).hasClass("active")&&$.each($(this).closest(".spollers").find(".spoller"),function(t,e){$(this).removeClass("active"),$(this).next().slideUp(300)}),$(this).toggleClass("active").next().slideToggle(300,function(t,e){0<$(this).parent().find(".slick-slider").length&&$(this).parent().find(".slick-slider").slick("setPosition")})),!1}),-1!=navigator.appVersion.indexOf("Mac")||0<$(".scroll-body").length&&$(".scroll-body").niceScroll(".scroll-list",(d=100,p=!(h=50),c.any()&&(d=10,h=1,p=!0),{cursorcolor:"#fff",cursorwidth:"4px",background:"",autohidemode:!0,cursoropacitymax:.4,bouncescroll:p,cursorborderradius:"0px",scrollspeed:d,mousescrollstep:h,directionlockdeadzone:0,cursorborder:"0px solid #fff"})),0<$(".t,.tip").length&&$(".t,.tip").webuiPopover({placement:"top",trigger:"hover",backdrop:!1,animation:"fade",dismissible:!0,padding:!1,onShow:function(t){},onHide:function(t){}}).on("show.webui.popover hide.webui.popover",function(t){$(this).toggleClass("active")}),$(window).resize(function(t){s()}),s(),function(){function t(){$.each($("select"),function(t,e){var s=t;$(this).hide(),0==$(this).parent(".select-block").length?$(this).wrap("<div class='select-block "+$(this).attr("class")+"-select-block'></div>"):$(this).parent(".select-block").find(".select").remove();var a,i,l="",n="",o=$(this).parent(".select-block"),r="<div class='select-options'><div class='select-options-scroll'><div class='select-options-list'>";"multiple"==$(this).attr("multiple")&&(l="multiple",n="check"),$.each($(this).find("option"),function(t,e){""!=$(this).attr("value")?r=r+"<div data-value='"+$(this).attr("value")+"' class='select-options__value_"+s+" select-options__value value_"+$(this).val()+" "+$(this).attr("class")+" "+n+"'>"+$(this).html()+"</div>":"on"==$(this).parent().attr("data-label")&&0==o.find(".select__label").length&&o.prepend('<div class="select__label">'+$(this).html()+"</div>")}),r+="</div></div></div>","search"==$(this).attr("data-type")?(o.append("<div data-type='search' class='select_"+s+" select "+$(this).attr("class")+"__select "+l+"'><div class='select-title'><div class='select-title__arrow ion-ios-arrow-down'></div><input data-value='"+$(this).find('option[selected="selected"]').html()+"' class='select-title__value value_"+$(this).find('option[selected="selected"]').val()+"' /></div>"+r+"</div>"),$(".select_"+s).find("input.select-title__value").jcOnPageFilter({parentSectionClass:"select-options_"+s,parentLookupClass:"select-options__value_"+s,childBlockClass:"select-options__value_"+s})):o.append("<div class='select_"+s+" select "+$(this).attr("class")+"__select "+l+"'><div class='select-title'><div class='select-title__arrow ion-ios-arrow-down'></div><div class='select-title__value value_"+$(this).find('option[selected="selected"]').val()+"'>"+$(this).find('option[selected="selected"]').html()+"</div></div>"+r+"</div>"),""!=$(this).find('option[selected="selected"]').val()&&o.find(".select").addClass("focus"),"on"==$(this).attr("data-req")&&$(this).addClass("req"),$(".select_"+s+" .select-options-scroll").niceScroll(".select-options-list",(a=100,i=50,c.any()&&(a=10,i=1),{cursorcolor:"#2078e5",cursorwidth:"3px",background:"",autohidemode:!1,bouncescroll:!1,cursorborderradius:"0px",scrollspeed:a,mousescrollstep:i,directionlockdeadzone:0,cursorborder:"0px solid #fff"}))})}function a(t,e){t.find(".rating__activeline").css({width:e+"%"})}0<$("select").length&&(t(),$("body").on("keyup","input.select-title__value",function(){$(".select").not($(this).parents(".select")).removeClass("active").find(".select-options").slideUp(50),$(this).parents(".select").addClass("active"),$(this).parents(".select").find(".select-options").slideDown(50,function(){$(this).find(".select-options-scroll").getNiceScroll().resize()}),$(this).parents(".select-block").find("select").val("")}),$("body").on("click",".select",function(){$(this).hasClass("disabled")||($(".select").not(this).removeClass("active").find(".select-options").slideUp(50),$(this).toggleClass("active"),$(this).find(".select-options").slideToggle(50,function(){$(this).find(".select-options-scroll").getNiceScroll().resize()}),"search"==$(this).attr("data-type")&&($(this).hasClass("active")||r(),$(this).find(".select-options__value").show()))}),$("body").on("click",".select-options__value",function(){if($(this).parents(".select").hasClass("multiple"))return $(this).hasClass("active")?(0<$(this).parents(".select").find(".select-title__value span").length?$(this).parents(".select").find(".select-title__value").append('<span data-value="'+$(this).data("value")+'">, '+$(this).html()+"</span>"):($(this).parents(".select").find(".select-title__value").data("label",$(this).parents(".select").find(".select-title__value").html()),$(this).parents(".select").find(".select-title__value").html('<span data-value="'+$(this).data("value")+'">'+$(this).html()+"</span>")),$(this).parents(".select-block").find("select").find("option").eq($(this).index()+1).prop("selected",!0),$(this).parents(".select").addClass("focus")):($(this).parents(".select").find(".select-title__value").find('span[data-value="'+$(this).data("value")+'"]').remove(),0==$(this).parents(".select").find(".select-title__value span").length&&($(this).parents(".select").find(".select-title__value").html($(this).parents(".select").find(".select-title__value").data("label")),$(this).parents(".select").removeClass("focus")),$(this).parents(".select-block").find("select").find("option").eq($(this).index()+1).prop("selected",!1)),!1;"search"==$(this).parents(".select").attr("data-type")?($(this).parents(".select").find(".select-title__value").val($(this).html()),$(this).parents(".select").find(".select-title__value").attr("data-value",$(this).html())):($(this).parents(".select").find(".select-title__value").attr("class","select-title__value value_"+$(this).data("value")),$(this).parents(".select").find(".select-title__value").html($(this).html())),$(this).parents(".select-block").find("select").find("option").removeAttr("selected"),""!=$.trim($(this).data("value"))?($(this).parents(".select-block").find("select").val($(this).data("value")),$(this).parents(".select-block").find("select").find('option[value="'+$(this).data("value")+'"]').attr("selected","selected")):($(this).parents(".select-block").find("select").val($(this).html()),$(this).parents(".select-block").find("select").find('option[value="'+$(this).html()+'"]').attr("selected","selected")),""!=$(this).parents(".select-block").find("select").val()?$(this).parents(".select-block").find(".select").addClass("focus"):($(this).parents(".select-block").find(".select").removeClass("focus"),$(this).parents(".select-block").find(".select").removeClass("err"),$(this).parents(".select-block").parent().removeClass("err"),$(this).parents(".select-block").removeClass("err").find(".form__error").remove()),""!=!$(this).parents(".select").data("tags")&&0==$(this).parents(".form-tags").find('.form-tags__item[data-value="'+$(this).data("value")+'"]').length&&$(this).parents(".form-tags").find(".form-tags-items").append('<a data-value="'+$(this).data("value")+'" href="" class="form-tags__item">'+$(this).html()+'<span class="fa fa-times"></span></a>'),$(this).parents(".select-block").find("select").change(),"on"==$(this).parents(".select-block").find("select").data("update")&&t()}),$(document).on("click touchstart",function(t){$(t.target).is(".select *")||$(t.target).is(".select")||($(".select").removeClass("active"),$(".select-options").slideUp(50,function(){}),r())}),$(document).on("keydown",function(t){27==t.which&&($(".select").removeClass("active"),$(".select-options").slideUp(50,function(){}),r())})),$("input,textarea").focus(function(){$(this).val()==$(this).attr("data-value")&&($(this).addClass("focus"),$(this).parent().addClass("focus"),"pass"==$(this).attr("data-type")&&$(this).attr("type","password"),$(this).val("")),n($(this))}),$("input[data-value], textarea[data-value]").each(function(){""!=this.value&&this.value!=$(this).attr("data-value")||(this.value=$(this).attr("data-value"),$(this).hasClass("l")&&0==$(this).parent().find(".form__label").length&&$(this).parent().append('<div class="form__label">'+$(this).attr("data-value")+"</div>")),this.value!=$(this).attr("data-value")&&""!=this.value&&($(this).addClass("focus"),$(this).parent().addClass("focus"),$(this).hasClass("l")&&0==$(this).parent().find(".form__label").length&&$(this).parent().append('<div class="form__label">'+$(this).attr("data-value")+"</div>")),$(this).click(function(){this.value==$(this).attr("data-value")&&("pass"==$(this).attr("data-type")&&$(this).attr("type","password"),this.value="")}),$(this).blur(function(){""==this.value&&(this.value=$(this).attr("data-value"),$(this).removeClass("focus"),$(this).parent().removeClass("focus"),"pass"==$(this).attr("data-type")&&$(this).attr("type","text"))})}),$(".form-input__viewpass").click(function(t){$(this).hasClass("active")?$(this).parent().find("input").attr("type","password"):$(this).parent().find("input").attr("type","text"),$(this).toggleClass("active")}),$.each($("input.phone"),function(t,e){$(this).attr("type","tel"),$(this).focus(function(){$(this).inputmask("+7(999) 999 9999",{clearIncomplete:!0,clearMaskOnLostFocus:!0,onincomplete:function(){o($(this))}}),$(this).addClass("focus"),$(this).parent().addClass("focus"),$(this).parent().removeClass("err"),$(this).removeClass("err")})}),$("input.phone").focusout(function(t){o($(this))}),$.each($("input.num"),function(t,e){$(this).focus(function(){$(this).inputmask("9{1,1000}",{clearIncomplete:!0,placeholder:"",clearMaskOnLostFocus:!0,onincomplete:function(){o($(this))}}),$(this).addClass("focus"),$(this).parent().addClass("focus"),$(this).parent().removeClass("err"),$(this).removeClass("err")})}),$("input.num").focusout(function(t){o($(this))}),$.each($(".check"),function(t,e){1==$(this).find("input").prop("checked")&&$(this).addClass("active")}),$("body").off("click",".check",function(t){}),$("body").on("click",".check",function(t){$(this).hasClass("disable")||$(t.target).is("a")||($(this).toggleClass("active"),$(this).hasClass("active")?$(this).find("input").prop("checked",!0):$(this).find("input").prop("checked",!1))}),$.each($(".option.active"),function(t,e){$(this).find("input").prop("checked",!0)}),$(".option").click(function(t){$(this).hasClass("disable")||($(this).hasClass("active")&&$(this).hasClass("order")&&$(this).toggleClass("orderactive"),$(this).parents(".options").find(".option").removeClass("active"),$(this).toggleClass("active"),$(this).children("input").prop("checked",!0))}),$(".rating.edit .star").hover(function(){var t=$(this).parents(".rating");t.find(".rating__activeline").css({width:"0%"}),a(t,($(this).index()+1)/t.find(".star").length*100)},function(){var t=$(this).parents(".rating");t.find(".star").removeClass("active"),a(t,t.find("input").val()/t.find(".star").length*100)}),$(".rating.edit .star").click(function(t){var e=$(this).parents(".rating"),s=$(this).index()+1;e.find("input").val(s),a(e,s/e.find(".star").length*100)}),$.each($(".rating"),function(t,e){var s=$(this).find("input").val()/$(this).parent().find(".star").length*100;a($(this),s)}),$(".quantity__btn").click(function(t){var e=parseInt($(this).parent().find(".quantity__input").val());return $(this).hasClass("dwn")?(e-=1)<1&&(e=1):e+=1,$(this).parent().find(".quantity__input").val(e),!1}),0<$("#range").length&&($("#range").slider({range:!0,min:0,max:5e3,values:[0,5e3],slide:function(t,e){$("#rangefrom").val(e.values[0]),$("#rangeto").val(e.values[1]),$(this).find(".ui-slider-handle").eq(0).html("<span>"+e.values[0]+"</span>"),$(this).find(".ui-slider-handle").eq(1).html("<span>"+e.values[1]+"</span>")},change:function(t,e){e.values[0]!=$("#range").slider("option","min")||e.values[1]!=$("#range").slider("option","max")?$("#range").addClass("act"):$("#range").removeClass("act")}}),$("#rangefrom").val($("#range").slider("values",0)),$("#rangeto").val($("#range").slider("values",1)),$("#range").find(".ui-slider-handle").eq(0).html("<span>"+$("#range").slider("option","min")+"</span>"),$("#range").find(".ui-slider-handle").eq(1).html("<span>"+$("#range").slider("option","max")+"</span>"),$("#rangefrom").bind("change",function(){1*$(this).val()>1*$("#range").slider("option","max")&&$(this).val($("#range").slider("option","max")),1*$(this).val()<1*$("#range").slider("option","min")&&$(this).val($("#range").slider("option","min")),$("#range").slider("values",0,$(this).val())}),$("#rangeto").bind("change",function(){1*$(this).val()>1*$("#range").slider("option","max")&&$(this).val($("#range").slider("option","max")),1*$(this).val()<1*$("#range").slider("option","min")&&$(this).val($("#range").slider("option","min")),$("#range").slider("values",1,$(this).val())}),$("#range").find(".ui-slider-handle").eq(0).addClass("left"),$("#range").find(".ui-slider-handle").eq(1).addClass("right")),$(".form-addfile__input").change(function(s){if(""!=$(this).val()){var a=$(this);a.parents(".form-addfile").find("ul.form-addfile-list").html(""),$.each(s.target.files,function(t,e){0==a.parents(".form-addfile").find('ul.form-addfile-list>li:contains("'+s.target.files[t].name+'")').length&&a.parents(".form-addfile").find("ul.form-addfile-list").append("<li>"+s.target.files[t].name+"</li>")})}})}(),$("form button[type=submit]").click(function(){var t,s=0,e=$(this).parents("form"),a=e.data("ms");return $.each(e.find(".req"),function(t,e){s+=function(t){var e=0,s=t.parents("form");if("email"==t.attr("name")||t.hasClass("email")){if(t.val()!=t.attr("data-value")){var a=t.val().replace(" ","");t.val(a)}/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(t.val())&&t.val()!=t.attr("data-value")?n(t):(e++,l(t))}else""==t.val()||t.val()==t.attr("data-value")?(e++,l(t)):n(t);return"checkbox"==t.attr("type")&&(1==t.prop("checked")?t.removeClass("err").parent().removeClass("err"):(e++,t.addClass("err").parent().addClass("err"))),t.hasClass("name")&&(/^[А-Яа-яa-zA-Z-]+( [А-Яа-яa-zA-Z-]+)$/.test(t.val())||(e++,l(t))),t.hasClass("pass-2")&&(s.find(".pass-1").val()!=s.find(".pass-2").val()?l(t):n(t)),e}($(this))}),0==s&&(e.find(".form__generalerror").hide().html(""),null!=a&&""!=a?(t=a,$(".popup").hide(),i("message."+t,""),!1):void 0)})});