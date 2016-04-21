/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Initializing Masory items
$('.grid').masonry({
  // class for item selector
  itemSelector: '.grid-item',
  // This will set the width of each item
  columnWidth: 10,
  isAnimated: true,
  // To center the Images in the parent container
  fitWidth: true,
  transitionDuration: '0.8s',
});

$( function() {

  
  var $container = $('#container');
  // hide initial items
  var $initialItems = $container.find('.item').hide();
  
  var $container = $container.masonry({
      // layout no items initially
      itemSelector: 'no-items',
      columnWidth: 200
    })
    // set proper itemSelector
    .masonry( 'option', { itemSelector: '.item' })
    .masonryImagesReveal( $initialItems );

  $('#load-images').click( function() {
    var $items = getItems();
    $container.masonryImagesReveal( $items );
  });
  
});

// reveals all items after all item images
// have been loaded
$.fn.masonryImagesReveal = function( $items ) {
  var msnry = this.data('masonry');
  var itemSelector = msnry.options.itemSelector;
  // hide by default
  $items.hide();
  // append to container
  this.append( $items );
  $items.imagesLoaded( function() {
    // un-hide items
    $items.show();
    // reveal all of them
    msnry.appended( $items );
  });
  
  return this;
};

function randomInt( min, max ) {
  return Math.floor( Math.random() * max + min );
}

function getItem() {
  var width = randomInt( 550, 900 );
  var height = randomInt( 550, 850 );
  var item = '<div class="item">'+
    '<img src="http://lorempixel.com/' + 
      width + '/' + height + '/nature" /></div>';
  return item;
}

function getItems() {
  var items = '';
  for ( var i=0; i < 12; i++ ) {
    items += getItem();
  }
  // return jQuery object
  return $( items );
}
