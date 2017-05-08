$('.slider').each(function()) {
  var $this = $(this),
  var $group = $this.find('.slider-group'),
  var $sliders = $this.find('.slide'),
  var buttonArray = [],
  var currentIndex = 0,
  var timeout;
}

// move() - The function to move the slides goes here

function advance() {
  clearTimeout(timeout);
  timeout = setTimeout(function() {
    if (currentIndex < ($slides.length - 1)) {
      move(currentIndex + 1);
    } else {
      move(0);
    }
  }, 4000);
}

$.each($slides, function(index) {
  var $button = $('<button type="button" class="slide-btn">&bull;</button>');
  if (index === currentIndex) {
    $button.addClass('active');
  }
  $
}
