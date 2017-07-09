/////////////////////////////////////////
// dropdown page
$('#search').change(function() {
  var s = this.value;
  $('.flipbook').turn('page', s);
});
// keyboard
$(document).keydown(function(e) {
  var previous = 37,
    next = 39;

  switch (e.keyCode) {
    case previous:
      $('.flipbook').turn('previous');
      break;
    case next:

      $('.flipbook').turn('next');
      break;
  }
});
//dragging pre-load
//		$('.container').kinetic();
$('.flipbook').draggable();
$('.flipbook').draggable("disable");
var x = false;
//dragging listener
/* $('#navigate').on('click', function() {
  if (!x) {
    //function
    $('.flipbook').draggable("enable");
    x = true;
  } else {
    //function
    $('.flipbook').draggable("disable");
    x = false;
  }
});

// zoomin listener
$('#zoomIn').click(function() {
  var n = $('.flipbook').turn('zoom');

  if (n === 1) {
    $('.flipbook').turn('zoom', 1.5);
  } else if (n === 1.5) {
    $('.flipbook').turn('zoom', 2);
  } else {
    alert('Perbesaran sudah maksimum.');
  }

});

//zoom out click listener
$('#zoomOut').click(function() {
  var n = $('.flipbook').turn('zoom');

  if (n === 2) {
    $('.flipbook').turn('zoom', 1.5);
  } else if (n === 1.5) {
    $('.flipbook').turn('zoom', 1);

  } else {
    alert('Pengecilan sudah maksimum.');
  }
});
*/
function buttonevent(buttonid) {
  if (buttonid=='navigate') {
    if (!x) {
      //function
      $('.flipbook').draggable("enable");
      x = true;
    } else {
      //function
      $('.flipbook').draggable("disable");
      x = false;
    }
  }
  else if (buttonid=='first-box') {
    $('.flipbook').turn('page',1);
  }
  else if (buttonid=='prev-box') {
    $('.flipbook').turn('previous');
  }
  else if (buttonid=='next-box') {
    $('.flipbook').turn('next');
  }
  else if (buttonid=='last-box') {
    $('.flipbook').turn('page',16)
  }
  else if (buttonid=='zoomIn') {
    //function here
    var n = $('.flipbook').turn('zoom');

    if (n === 1) {
      $('.flipbook').turn('zoom', 1.5);
    } else if (n === 1.5) {
      $('.flipbook').turn('zoom', 2);
    } else {
      alert('Perbesaran sudah maksimum.');
    }
  }
  else if (buttonid=='zoomOut') {
    //function here
    var n = $('.flipbook').turn('zoom');

    if (n === 2) {
      $('.flipbook').turn('zoom', 1.5);
    } else if (n === 1.5) {
      $('.flipbook').turn('zoom', 1);

    } else {
      alert('Pengecilan sudah maksimum.');
    }
  }
  else if (buttonid=='zoomOut') {
    $(document).toggleFullScreen();
  }

};

$(document).ready(function() {




});

function loadApp() {

  // Create the flipbook
  var scr = window.matchMedia("(max-width:1280px)");

  if (scr.matches) {
    $('.flipbook').turn({
      // width

      width: 900,

      // Height

      height: 390,

      // Elevation

      elevation: 50,

      // Enable gradients

      gradients: true,

      // Auto center this flipbook

      autoCenter: true

    });
  } else {
    $('.flipbook').turn({
      // width

      width: 922,

      // Height

      height: 550,

      // Elevation

      elevation: 50,

      // Enable gradients

      gradients: true,

      // Auto center this flipbook

      autoCenter: true

    });
  }
}

yepnope({
  both: ['css/basic.css'],
  complete: loadApp
})

// Load the HTML4 version if there's not CSS transform

/*yepnope({
  test : Modernizr.csstransforms,
  yep: ['js/turn.js'],
  nope: ['js/turn.html4.min.js'],
  both: ['css/basic.css'],
  complete: loadApp
});*/
