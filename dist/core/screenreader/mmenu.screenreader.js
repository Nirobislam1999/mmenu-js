Mmenu.addons.screenReader=function(){var n=this.opts.screenReader,r=this.conf.screenReader;"boolean"==typeof n&&(n={aria:n,text:n}),"object"!=typeof n&&(n={}),this.opts.screenReader=Mmenu.extend(n,Mmenu.options.screenReader),n.aria&&(this.bind("initAddons:after",function(){this.bind("initMenu:after",function(){this.trigger("initMenu:after:sr-aria",[].slice.call(arguments))}),this.bind("initNavbar:after",function(){this.trigger("initNavbar:after:sr-aria",[].slice.call(arguments))}),this.bind("openPanel:start",function(){this.trigger("openPanel:start:sr-aria",[].slice.call(arguments))}),this.bind("close:start",function(){this.trigger("close:start:sr-aria",[].slice.call(arguments))}),this.bind("close:finish",function(){this.trigger("close:finish:sr-aria",[].slice.call(arguments))}),this.bind("open:start",function(){this.trigger("open:start:sr-aria",[].slice.call(arguments))}),this.bind("initOpened:after",function(){this.trigger("initOpened:after:sr-aria",[].slice.call(arguments))})}),this.bind("updateListview",function(){this.node.$pnls.find(".mm-listitem").each(function(n,e){var i=Mmenu.$(e);Mmenu.sr_aria(i,"hidden",i.is(".mm-hidden"))})}),this.bind("openPanel:start",function(n){var e=this.node.$menu.find(".mm-panel").not(n).not(n.parents(".mm-panel")),i=n.add(n.find(".mm-listitem_vertical .mm-listitem_opened").children(".mm-panel"));Mmenu.sr_aria(e,"hidden",!0),Mmenu.sr_aria(i,"hidden",!1)}),this.bind("closePanel",function(n){Mmenu.sr_aria(n,"hidden",!0)}),this.bind("initPanels:after",function(n){var e=n.find(".mm-btn").each(function(n,e){Mmenu.sr_aria(Mmenu.$(e),"owns",e.getAttribute("href").replace("#",""))});Mmenu.sr_aria(e,"haspopup",!0)}),this.bind("initNavbar:after",function(n){var e=n.children(".mm-navbar");Mmenu.sr_aria(e,"hidden",!n.hasClass("mm-panel_has-navbar"))}),n.text&&"parent"==this.opts.navbar.titleLink&&this.bind("initNavbar:after",function(n){var e=n.children(".mm-navbar"),i=!!e.children(".mm-btn_prev").length;Mmenu.sr_aria(e.children(".mm-title"),"hidden",i)})),n.text&&(this.bind("initAddons:after",function(){this.bind("setPage:after",function(){this.trigger("setPage:after:sr-text",arguments[0])}),this.bind("initBlocker:after",function(){this.trigger("initBlocker:after:sr-text")})}),this.bind("initNavbar:after",function(n){var e=n.children(".mm-navbar"),i=this.i18n(r.text.closeSubmenu);e.children(".mm-btn_prev").html(Mmenu.sr_text(i))}),this.bind("initListview:after",function(n){var e=n[0].mmParent;if(e&&e.length){var i=e.children(".mm-btn_next"),t=this.i18n(r.text[i.parent().is(".mm-listitem_vertical")?"toggleSubmenu":"openSubmenu"]);i.append(Mmenu.sr_text(t))}}))},Mmenu.options.screenReader={aria:!0,text:!0},Mmenu.configs.screenReader={text:{closeMenu:"Close menu",closeSubmenu:"Close submenu",openSubmenu:"Open submenu",toggleSubmenu:"Toggle submenu"}},function(){var t=function(n,e,i){n.prop(e,i),i?n.attr(e,i.toString()):n.removeAttr(e)};Mmenu.sr_aria=function(n,e,i){t(n,"aria-"+e,i)},Mmenu.sr_role=function(n,e){t(n,"role",e)},Mmenu.sr_text=function(n){return'<span class="mm-sronly">'+n+"</span>"}}();