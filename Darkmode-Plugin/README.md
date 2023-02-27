## Aktuelles:

---
### Bugs
_None_

### TODO:
1. html beschreiben.
2. Actions verlinken.
3. Css Klasse einbauen mit css code.
4. Cookie für den Banner.

### Ideas:

- filter function in css
- change pictures, when dark?


Where am I now? I have...

- The header banner
- base.html with the linkage
- The theme manager settings
- The button to change to dark-mode

I dont have...

- Any connections between button and theme manager settings

When the button is clicked then the Storefront should take the current dark mode settings in the theme manager.

config.xml file? What for? (connection to base-classes.html.twig)

## Dark Mode Code

````
@media (prefers-color-scheme: dark) {
    // body code
    // other
}
````

Sektor aus der Klasse ThemeManagerController wird schonmal gefunden, wird aber nicht korrekt ausgegeben. Diesen Fehler beheben.

TODO:
- Js setDarkLightMode()
- Scss funktioniert?
- Button animation
- Button container flexbox



