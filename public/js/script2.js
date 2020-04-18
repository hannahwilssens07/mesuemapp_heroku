let mijnMenu = document.querySelector(".menu");
let mijnNav = document.querySelector("nav");
mijnMenu.addEventListener("click", function() {
  mijnNav.classList.toggle("zichtbaar");
});


var iso = new Isotope( '.raster', {
  itemSelector: '.element-item',
  layoutMode: 'fitRows',
});

var qsRegex;


var $raster = $('.raster').isotope({
  itemSelector: '.element-item',
  layoutMode: 'fitRows',
  filter: function() {
    return qsRegex ? $(this).text().match( qsRegex ) : true;
  },
  getSortData: {
      category: '[data-category]',
  }
});


$('#filters').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});

// change is-checked class on buttons
var buttonGroups = document.querySelectorAll('.button-group');
for ( var i=0; i < buttonGroups.length; i++ ) {
  buttonGroups[i].addEventListener( 'click', onButtonGroupClick );
}

function onButtonGroupClick( event ) {
  // only button clicks
  if ( !matchesSelector( event.target, '.button' ) ) {
    return;
  }
  var button = event.target;
  button.parentNode.querySelector('.is-checked').classList.remove('is-checked');
  button.classList.add('is-checked');
}
