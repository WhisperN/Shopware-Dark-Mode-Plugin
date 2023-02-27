import Plugin from 'src/plugin-system/plugin.class';

export default class DarkModeBannerPlugin extends Plugin {

    static options = {
        headerBannerClose: '.banner-close',
        headerDarkModeButton: '.dark-mode-btn',
        headerBannerDescription: '.banner-text',
        baseBackground: '.dmp-base'
    };
    init() {
        try {
        this._closeBanner = document.body.querySelector(this.options.headerBannerClose);
        this._darkModeBtn = document.body.querySelector(this.options.headerDarkModeButton);
        this._bgColor = document.body.querySelector(this.options.baseBackground);
        } catch (e) {
            // just for debugging
            alert(e);
            return;
        }
        // super.init(); --> needed?
        this._setDarkLightMode();
        this._dmbEventListener();
    }
    _dmbEventListener() {
        this._closeBanner.addEventListener('click', this._hideHeaderBanner);
        this._darkModeBtn.addEventListener('click', this._switchDarkLightMode);
    }
    _hideHeaderBanner() {
        document.body.querySelector('[dark-mode-banner]').classList.add("banner-hide")
    }
    _setDarkLightMode() {
        var theme="light";    //default to light

        //local storage is used to override OS theme settings
        if(localStorage.getItem("theme")){
            if(localStorage.getItem("theme") == "dark"){
                theme = "dark";
            }
        } else if(!window.matchMedia) {
            //matchMedia method not supported
            return false;
        } else if(window.matchMedia("(prefers-color-scheme: dark)").matches) {
            //OS theme setting detected as dark
            theme = "dark";
        }

        //dark theme preferred, set document with a `data-theme` attribute
        if (theme=="dark") {
            document.documentElement.setAttribute("data-theme", "dark");
        }
    }
    _switchDarkLightMode() {
        let isDark = null;

        try {
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                isDark = true;
            } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
                isDark = false;
            }
        } catch (e) {
            return;
        }
        if (isDark) {
            localStorage.setItem('theme', 'dark');
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
            document.documentElement.setAttribute('data-theme', 'light');
        }
    }
}
