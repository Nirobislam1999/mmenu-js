Mmenu.addons.autoHeight=function(){var h=this.opts.autoHeight;function t(t){if(!this.opts.offCanvas||this.vars.opened){var e=Math.max(parseInt(this.node.$pnls.css("top"),10),0)||0,n=Math.max(parseInt(this.node.$pnls.css("bottom"),10),0)||0,i=0;this.node.$menu.addClass("mm-menu_autoheight-measuring"),"auto"==h.height?((t=t||this.node.$pnls.children(".mm-panel_opened")).parent(".mm-listitem_vertical").length&&(t=t.parents(".mm-panel").not(function(t,e){return!!Mmenu.$(e).parent(".mm-listitem_vertical").length})),t.length||(t=this.node.$pnls.children(".mm-panel")),i=t.first().outerHeight()):"highest"==h.height&&this.node.$pnls.children(".mm-panel").each(function(t,e){var n=Mmenu.$(e);n.parent(".mm-listitem_vertical").length&&(n=n.parents(".mm-panel").not(function(t,e){return!!Mmenu.$(e).parent(".mm-listitem_vertical").length})),i=Math.max(i,n.first().outerHeight())}),this.node.$menu.height(i+e+n).removeClass("mm-menu_autoheight-measuring")}}"boolean"==typeof h&&h&&(h={height:"auto"}),"string"==typeof h&&(h={height:h}),"object"!=typeof h&&(h={}),this.opts.autoHeight=Mmenu.extend(h,Mmenu.options.autoHeight),"auto"!=h.height&&"highest"!=h.height||(this.bind("initMenu:after",function(){this.node.$menu.addClass("mm-menu_autoheight")}),this.opts.offCanvas&&this.bind("open:start",t),"highest"==h.height&&this.bind("initPanels:after",t),"auto"==h.height&&(this.bind("updateListview",t),this.bind("openPanel:start",t),this.bind("closePanel",t)))},Mmenu.options.autoHeight={height:"default"};