!function(t,e,n){"use strict";Foundation.libs.section={name:"section",version:"4.3.2",settings:{deep_linking:!1,small_breakpoint:768,one_up:!0,multi_expand:!1,section_selector:"[data-section]",region_selector:"section, .section, [data-section-region]",title_selector:".title, [data-section-title]",resized_data_attr:"data-section-resized",small_style_data_attr:"data-section-small-style",content_selector:".content, [data-section-content]",nav_selector:'[data-section="vertical-nav"], [data-section="horizontal-nav"]',active_class:"active",callback:function(){}},init:function(e,n,r){var i=this;return Foundation.inherit(this,"throttle data_options position_right offset_right"),"object"==typeof n&&t.extend(!0,i.settings,n),"string"!=typeof n?(this.events(),!0):this[n].call(this,r)},events:function(){for(var r=this,i=[],a=r.settings.section_selector,o=r.settings.region_selector.split(","),s=r.settings.title_selector.split(","),u=0,c=o.length;c>u;u++)for(var l=o[u],f=0,h=s.length;h>f;f++){var d=a+">"+l+">"+s[f];i.push(d+" a"),i.push(d)}t(r.scope).on("click.fndtn.section",i.join(","),function(e){var n=t(this).closest(r.settings.title_selector);r.close_navs(n),n.siblings(r.settings.content_selector).length>0&&r.toggle_active.call(n[0],e)}),t(e).on("resize.fndtn.section",r.throttle(function(){r.resize()},30)).on("hashchange.fndtn.section",r.set_active_from_hash),t(n).on("click.fndtn.section",function(e){e.isPropagationStopped&&e.isPropagationStopped()||e.target!==n&&r.close_navs(t(e.target).closest(r.settings.title_selector))}),t(e).triggerHandler("resize.fndtn.section"),t(e).triggerHandler("hashchange.fndtn.section")},close_navs:function(e){var n=Foundation.libs.section,r=t(n.settings.nav_selector).filter(function(){return!t.extend({},n.settings,n.data_options(t(this))).one_up});if(e.length>0){var i=e.parent().parent();(n.is_horizontal_nav(i)||n.is_vertical_nav(i))&&(r=r.filter(function(){return this!==i[0]}))}r.children(n.settings.region_selector).removeClass(n.settings.active_class)},toggle_active:function(e){var n=t(this),r=Foundation.libs.section,i=n.parent(),a=n.siblings(r.settings.content_selector),o=i.parent(),s=t.extend({},r.settings,r.data_options(o)),u=o.children(r.settings.region_selector).filter("."+r.settings.active_class);!s.deep_linking&&a.length>0&&e.preventDefault(),e.stopPropagation(),i.hasClass(r.settings.active_class)?(i.hasClass(r.settings.active_class)&&r.is_accordion(o)||!s.one_up&&(r.small(o)||r.is_vertical_nav(o)||r.is_horizontal_nav(o)||r.is_accordion(o)))&&(i.removeClass(r.settings.active_class),i.trigger("closed.fndtn.section")):((!r.is_accordion(o)||r.is_accordion(o)&&!r.settings.multi_expand)&&(u.removeClass(r.settings.active_class),u.trigger("closed.fndtn.section")),i.addClass(r.settings.active_class),r.resize(i.find(r.settings.section_selector).not("["+r.settings.resized_data_attr+"]"),!0),i.trigger("opened.fndtn.section")),s.callback(o)},check_resize_timer:null,resize:function(e,n){var r=Foundation.libs.section,i=t(r.settings.section_selector),a=r.small(i),o=function(t,e){return!(r.is_accordion(t)||t.is("["+r.settings.resized_data_attr+"]")||a&&!r.is_horizontal_tabs(t)||e!==("none"===t.css("display")||!t.parent().is(":visible")))};e=e||t(r.settings.section_selector),clearTimeout(r.check_resize_timer),a||e.removeAttr(r.settings.small_style_data_attr),e.filter(function(){return o(t(this),!1)}).each(function(){var e=t(this),i=e.children(r.settings.region_selector),a=i.children(r.settings.title_selector),o=i.children(r.settings.content_selector),s=0;if(n&&0==e.children(r.settings.region_selector).filter("."+r.settings.active_class).length){var u=t.extend({},r.settings,r.data_options(e));u.deep_linking||!u.one_up&&(r.is_horizontal_nav(e)||r.is_vertical_nav(e)||r.is_accordion(e))||i.filter(":visible").first().addClass(r.settings.active_class)}if(r.is_horizontal_tabs(e)||r.is_auto(e)){var c=0;a.each(function(){var e=t(this);if(e.is(":visible")){e.css(r.rtl?"right":"left",c);var n=parseInt(e.css("border-"+(r.rtl?"left":"right")+"-width"),10);"Nan"===n.toString()&&(n=0),c+=r.outerWidth(e)-n,s=Math.max(s,r.outerHeight(e))}}),a.css("height",s),i.each(function(){var e=t(this),n=e.children(r.settings.content_selector),i=parseInt(n.css("border-top-width"),10);"Nan"===i.toString()&&(i=0),e.css("padding-top",s-i)}),e.css("min-height",s)}else if(r.is_horizontal_nav(e)){var l=!0;a.each(function(){s=Math.max(s,r.outerHeight(t(this)))}),i.each(function(){var n=t(this);n.css("margin-left","-"+(l?e:n.children(r.settings.title_selector)).css("border-left-width")),l=!1}),i.css("margin-top","-"+e.css("border-top-width")),a.css("height",s),o.css("top",s),e.css("min-height",s)}else if(r.is_vertical_tabs(e)){var f=0;a.each(function(){var e=t(this);if(e.is(":visible")){e.css("top",f);var n=parseInt(e.css("border-top-width"),10);"Nan"===n.toString()&&(n=0),f+=r.outerHeight(e)-n}}),o.css("min-height",f+1)}else if(r.is_vertical_nav(e)){var h=0,d=!0;a.each(function(){h=Math.max(h,r.outerWidth(t(this)))}),i.each(function(){var n=t(this);n.css("margin-top","-"+(d?e:n.children(r.settings.title_selector)).css("border-top-width")),d=!1}),a.css("width",h),o.css(r.rtl?"right":"left",h),e.css("width",h)}e.attr(r.settings.resized_data_attr,!0)}),t(r.settings.section_selector).filter(function(){return o(t(this),!0)}).length>0&&(r.check_resize_timer=setTimeout(function(){r.resize(e.filter(function(){return o(t(this),!1)}),!0)},700)),a&&e.attr(r.settings.small_style_data_attr,!0)},is_vertical_nav:function(t){return/vertical-nav/i.test(t.data("section"))},is_horizontal_nav:function(t){return/horizontal-nav/i.test(t.data("section"))},is_accordion:function(t){return/accordion/i.test(t.data("section"))},is_horizontal_tabs:function(t){return/^tabs$/i.test(t.data("section"))},is_vertical_tabs:function(t){return/vertical-tabs/i.test(t.data("section"))},is_auto:function(t){var e=t.data("section");return""===e||/auto/i.test(e)},set_active_from_hash:function(){var n,r=Foundation.libs.section,i=e.location.hash.substring(1),a=t(r.settings.section_selector);a.each(function(){var e=t(this),a=e.children(r.settings.region_selector);return a.each(function(){var a=t(this),o=a.children(r.settings.content_selector).data("slug");return new RegExp(o,"i").test(i)?(n=e,!1):void 0}),null!=n?!1:void 0}),null!=n&&a.each(function(){if(n==t(this)){var e=t(this),a=t.extend({},r.settings,r.data_options(e)),o=e.children(r.settings.region_selector),s=a.deep_linking&&i.length>0,u=!1;o.each(function(){var e=t(this);if(u)e.removeClass(r.settings.active_class);else if(s){var n=e.children(r.settings.content_selector).data("slug");n&&new RegExp(n,"i").test(i)?(e.hasClass(r.settings.active_class)||e.addClass(r.settings.active_class),u=!0):e.removeClass(r.settings.active_class)}else e.hasClass(r.settings.active_class)&&(u=!0)}),u||!a.one_up&&(r.is_horizontal_nav(e)||r.is_vertical_nav(e)||r.is_accordion(e))||o.filter(":visible").first().addClass(r.settings.active_class)}})},reflow:function(){var e=Foundation.libs.section;t(e.settings.section_selector).removeAttr(e.settings.resized_data_attr),e.throttle(function(){e.resize()},30)()},small:function(e){var n=t.extend({},this.settings,this.data_options(e));return this.is_horizontal_tabs(e)?!1:e&&this.is_accordion(e)?!0:t("html").hasClass("lt-ie9")?!0:t("html").hasClass("ie8compat")?!0:t(this.scope).width()<n.small_breakpoint},off:function(){t(this.scope).off(".fndtn.section"),t(e).off(".fndtn.section"),t(n).off(".fndtn.section")}},t.fn.reflow_section=function(t){var e=this,n=Foundation.libs.section;return e.removeAttr(n.settings.resized_data_attr),n.throttle(function(){n.resize(e,t)},30)(),this}}(Foundation.zj,window,document);