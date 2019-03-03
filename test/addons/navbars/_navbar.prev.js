import Mmenu from '../../core/oncanvas/mmenu.oncanvas';
export default function (navbar) {
    //	Add content.
    var prev = Mmenu.DOM.create('a.mm-btn.mm-btn_prev.mm-navbar__btn');
    navbar.append(prev);
    this.bind('initNavbar:after', (panel) => {
        panel.classList.remove('mm-panel_has-navbar');
    });
    //	Update to opened panel.
    var org;
    var _url, _txt;
    this.bind('openPanel:start', (panel) => {
        if (panel.parentElement.matches('.mm-listitem_vertical')) {
            return;
        }
        org = panel.querySelector('.' + this.conf.classNames.navbars.panelPrev);
        if (!org) {
            org = panel.querySelector('.mm-navbar__btn.mm-btn_prev');
        }
        _url = org ? org.getAttribute('href') : '';
        _txt = org ? org.innerHTML : '';
        if (_url) {
            prev.setAttribute('href', _url);
        }
        else {
            prev.removeAttribute('href');
        }
        prev.classList[_url || _txt ? 'remove' : 'add']('mm-hidden');
        prev.innerHTML = _txt;
    });
    //	Add screenreader / aria support
    this.bind('initNavbar:after:sr-aria', (panel) => {
        Mmenu.sr_aria(panel.querySelector('.mm-navbar'), 'hidden', true);
    });
    this.bind('openPanel:start:sr-aria', (panel) => {
        Mmenu.sr_aria(prev, 'hidden', prev.matches('.mm-hidden'));
        Mmenu.sr_aria(prev, 'owns', (prev.getAttribute('href') || '').slice(1));
    });
}
;