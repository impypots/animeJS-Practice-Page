let header2 = document.querySelector('#header2');

let showFirst = anime({
  targets: '#header1 path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 1500,
  delay: function(el, i) { return i * 150 },
  direction: 'alternate',
  loop: 1,
  complete: function(anim) {
    display: 'none'
    showSecond()
  }
});

function showSecond() {
    anime({
      begin: function(anim) {
        display: 'block',
        header2.style.display = 'block'
      },
    targets: '#header2 path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1500,
    delay: function(el, i) { return i * 150 },
    direction: 'alternate',
    loop: 1
  });
}