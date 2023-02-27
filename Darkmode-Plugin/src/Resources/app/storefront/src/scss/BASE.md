## TODO

Problematik: Scss wird nur einmal kompiliert, während der Laufzeit kann es nicht mehr beeinflusst werden.

Vorgehen:

- JS funktion schreiben. Idee:
```
// SCSS-Code
$primary-color: #007bff;

:root {
  --primary-color: $primary-color;
}

.button {
  background-color: var(--primary-color);
  color: #fff;
  padding: 10px 20px;
}

// JavaScript-Code
document.documentElement.style.setProperty('--primary-color', '#ff0000');
```
- Zweite Idee mit Mixins von OpenAI.
- Dritte Idee manuell alle sw-variablen suchen und umbenennen.

Further:
To optimize speed use: preloading in the header.

beautiful solution on StackOverflow:
https://stackoverflow.com/questions/56300132/how-to-override-css-prefers-color-scheme-setting