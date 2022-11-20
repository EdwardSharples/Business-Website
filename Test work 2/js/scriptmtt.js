$(window).scroll(function() {
  
  // selectors
  var $window = $(window),
      $body = $('body'),
      $panel = $('.panel');
  
  // Change 33% earlier than scroll position so colour is there when you arrive.
  var scroll = $window.scrollTop() + ($window.height() / 1); //original 3
 
  $panel.each(function () {
    var $this = $(this);
    
    // if position is within range of this panel.
    // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
    // Remember we set the scroll to 33% earlier in scroll var.
    // NOTE: We use offset() instead of position() so that it will work universally even in child containers.
    if ($this.offset().top <= scroll && $this.offset().top + $this.height() > scroll) {
      $body.css("background-color", $this.data('color'));
    }
  });    
  
}).scroll();