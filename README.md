TD4W — Turn Down For What

A tiny, single-page party button. Load the page (or click anywhere) and the background strobes through neon colors for a few seconds while the track plays.

How it works
index.html: the page: a big "TURN DOWN FOR WHAT" heading and a flying-money image. It calls playSong() on load.
styles.css: defines the td4w keyframe animation, which cycles the background through purple (
#613dc1), green (
#89fc00), pink (
#f20089) and yellow (
#e3fc03).
scripts.js:
playSong() starts the 3.5s td4w animation on the <html> element and calls addSong().
addSong() creates a fresh <audio> element pointing at assets/td4w.mp3, adds it to the page and plays it. Any earlier audio element is removed first, so clicking again restarts the effect.
An animationend listener leaves the background on green once the strobe finishes.
A click listener on the page runs playSong() again.
Project structure
td4w/
├── assets/
│   ├── flyingmoney.png
│   └── td4w.mp3
├── index.html
├── scripts.js
└── styles.css
Running it

There's no build step and nothing to install.

Clone the repo:
bash
   git clone https://github.com/corynnem/td4w.git
   cd td4w
Open index.html in a browser, or serve the folder locally (for example with the VS Code Live Server extension, or npx serve .).

Note: Most browsers block audio autoplay until the user has interacted with the page. If the music doesn't start on load, click anywhere on the page.

Built with
HTML, CSS (keyframe animations) and vanilla JavaScript
Google Fonts: Roboto, Raleway, Titillium Web
