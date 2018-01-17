// https://github.com/knsv/mermaid/issues/360#issuecomment-255526258
mermaid.initialize({
  startOnLoad: false,
  cloneCssStyles: false,
  theme: 'forest',
  // htmlLabels: false,
  htmlLabels: true,
});
function initMermaid(s) {
  console.log(111, s);
  console.log(222, diagrams);
  var diagrams = document.querySelectorAll('.mermaid');
  var i;
  for (i = 0; i < diagrams.length; i++) {
    if (diagrams[i].offsetWidth > 0) {
      mermaid.init(undefined, diagrams[i]);
    }
  }
}
function runMermaid() {
  var slideshow = window.slideshow;
  slideshow.on('afterShowSlide', initMermaid);
  initMermaid(slideshow.getSlides()[slideshow.getCurrentSlideIndex()]);
}
