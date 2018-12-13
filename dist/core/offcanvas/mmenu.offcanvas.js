Mmenu.addons.offCanvas=function(){if(this.opts.offCanvas){var e=this.opts.offCanvas,t=this.conf.offCanvas;this._api.push("open","close","setPage"),"object"!=typeof e&&(e={}),this.opts.offCanvas=Mmenu.extend(e,Mmenu.options.offCanvas),this.conf.offCanvas=Mmenu.extend(t,Mmenu.configs.offCanvas),this.vars.opened=!1,this.bind("initMenu:after",function(){var e=this;this._initBlocker(),this.setPage(Mmenu.node.$page),this._initWindow_offCanvas(),this.node.$menu.addClass("mm-menu_offcanvas").parent(".mm-wrapper").removeClass("mm-wrapper"),this.node.$menu[t.menu.insertMethod](t.menu.insertSelector);var n=window.location.hash;if(n){var o=this.vars.orgMenuId;o&&o==n.slice(1)&&setTimeout(function(){e.open()},1e3)}}),this.bind("setPage:after",function(e){Mmenu.node.$blck&&Mmenu.node.$blck.children("a").attr("href","#"+e[0].id)}),this.bind("open:start:sr-aria",function(){Mmenu.sr_aria(this.node.$menu,"hidden",!1)}),this.bind("close:finish:sr-aria",function(){Mmenu.sr_aria(this.node.$menu,"hidden",!0)}),this.bind("initMenu:after:sr-aria",function(){Mmenu.sr_aria(this.node.$menu,"hidden",!0)}),this.bind("initBlocker:after:sr-text",function(){Mmenu.node.$blck.children("a").html(Mmenu.sr_text(this.i18n(this.conf.screenReader.text.closeMenu)))}),this.clck.push(function(e,n){var o=this,t=this.vars.orgMenuId;if(t&&e.is('[href="#'+t+'"]')){if(n.inMenu)return this.open(),!0;var i=e.closest(".mm-menu");if(i.length){var s=i.mmenu;if(s&&s.close)return s.close(),Mmenu.transitionend(i,function(){o.open()},this.conf.transitionDuration),!0}return this.open(),!0}if((t=Mmenu.node.$page[0].id)&&e.is('[href="#'+t+'"]'))return this.close(),!0})}},Mmenu.options.offCanvas={blockUI:!0,moveBackground:!0},Mmenu.configs.offCanvas={menu:{insertMethod:"prependTo",insertSelector:"body"},page:{nodetype:"div",selector:null,noSelector:[],wrapIfNeeded:!0}},Mmenu.prototype.open=function(){var e=this;this.trigger("open:before"),this.vars.opened||(this._openSetup(),setTimeout(function(){e._openFinish()},this.conf.openingInterval),this.trigger("open:after"))},Mmenu.prototype._openSetup=function(){var e=this,n=this.opts.offCanvas;this.closeAllOthers(),Mmenu.node.$page.each(function(e,n){var o=Mmenu.$(n);o[0].mmStyle=o[0].getAttribute("style")||""}),Mmenu.$(window).trigger("resize.mm-offCanvas",[!0]);var o=["mm-wrapper_opened"];n.blockUI&&o.push("mm-wrapper_blocking"),"modal"==n.blockUI&&o.push("mm-wrapper_modal"),n.moveBackground&&o.push("mm-wrapper_background"),Mmenu.$("html").addClass(o.join(" ")),setTimeout(function(){e.vars.opened=!0},this.conf.openingInterval),this.node.$menu.addClass("mm-menu_opened")},Mmenu.prototype._openFinish=function(){var e=this;Mmenu.transitionend(Mmenu.node.$page.first(),function(){e.trigger("open:finish")},this.conf.transitionDuration),this.trigger("open:start"),Mmenu.$("html").addClass("mm-wrapper_opening")},Mmenu.prototype.close=function(){var e=this;this.trigger("close:before"),this.vars.opened&&(Mmenu.transitionend(Mmenu.node.$page.first(),function(){e.node.$menu.removeClass("mm-menu_opened");Mmenu.$("html").removeClass(["mm-wrapper_opened","mm-wrapper_blocking","mm-wrapper_modal","mm-wrapper_background"].join(" ")),Mmenu.node.$page.each(function(e,n){var o=Mmenu.$(n);o[0].setAttribute("style",o[0].mmStyle)}),e.vars.opened=!1,e.trigger("close:finish")},this.conf.transitionDuration),this.trigger("close:start"),Mmenu.$("html").removeClass("mm-wrapper_opening"),this.trigger("close:after"))},Mmenu.prototype.closeAllOthers=function(){Mmenu.$("body").find(".mm-menu_offcanvas").not(this.node.$menu).each(function(e,n){var o=n.mmenu;o&&o.close&&o.close()})},Mmenu.prototype.setPage=function(e){this.trigger("setPage:before",[e]);var n=this.conf.offCanvas;e&&e.length||(e=(e="string"==typeof n.page.selector?Mmenu.$("body").find(n.page.selector):Mmenu.$("body").children(n.page.nodetype)).not(".mm-menu").not(".mm-wrapper__blocker"),n.page.noSelector.length&&(e=e.not(n.page.noSelector.join(", "))),1<e.length&&n.page.wrapIfNeeded&&(e=e.wrapAll("<"+n.page.nodetype+" />").parent())),e.addClass("mm-page mm-slideout").each(function(e,n){n.id=n.id||Mmenu.getUniqueId()}),Mmenu.node.$page=e,this.trigger("setPage:after",[e])},Mmenu.prototype._initWindow_offCanvas=function(){var o,t;Mmenu.$(window).off("keydown.mm-offCanvas").on("keydown.mm--offCanvas",function(e){if(Mmenu.$("html").hasClass("mm-wrapper_opened")&&9==e.keyCode)return e.preventDefault(),!1}),Mmenu.$(window).off("resize.mm-offCanvas").on("resize.mm-offCanvas",function(e,n){1==Mmenu.node.$page.length&&(n||Mmenu.$("html").hasClass("mm-wrapper_opened"))&&(t=Mmenu.$(window).height(),(n||t!=o)&&(o=t,Mmenu.node.$page.css("minHeight",t)))})},Mmenu.prototype._initBlocker=function(){var n=this,e=this.opts.offCanvas,o=this.conf.offCanvas;this.trigger("initBlocker:before"),e.blockUI&&(Mmenu.node.$blck||(Mmenu.node.$blck=Mmenu.$('<div class="mm-wrapper__blocker mm-slideout" />').append("<a />")),Mmenu.node.$blck.appendTo(o.menu.insertSelector).off("touchstart.mm-offCanvas touchmove.mm-offCanvas").on("touchstart.mm-offCanvas touchmove.mm-offCanvas",function(e){e.preventDefault(),e.stopPropagation(),Mmenu.node.$blck.trigger("mousedown.mm-offCanvas")}).off("mousedown.mm-offCanvas").on("mousedown.mm-offCanvas",function(e){e.preventDefault(),Mmenu.$("html").hasClass("mm-wrapper_modal")||(n.closeAllOthers(),n.close())}),this.trigger("initBlocker:after"))};