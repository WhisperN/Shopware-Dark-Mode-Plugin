````
_setDarkLightMode() {
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
        // system preference is Dark
        if (isDark) {
            // if system preferences is 'dark' and slider is set to light
            // then change active --d[...] variables to dark equivalent.
            document.body.querySelector('.dmp-base').classList.add("light-bg")
            document.documentElement.style.setProperty('$dbg-color', '$sw-background-color');
            document.documentElement.style.setProperty('$dtext-color', '$$sw-text-color');
        }
        // system preference is Light
        else if (!isDark){
            // if system preferences is 'light' and slider is set to dark
            // then change active --l[...] variables to light equivalent.
            document.documentElement.style.setProperty('$lbg-color', '$dmp-plugin-bg-color');
            document.documentElement.style.setProperty('$ltext-color', '$dmp-plugin-text-color');
        }
    }
````