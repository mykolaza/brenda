/* 
 * Author: Udit Kulshrestha 
 * TimeStamp: 1 Jan 2016
 * Javascript to load the fonts
 * Fonts can be loaded locally or from remote (google fonts)
 * The 
 */
var WebFontConfig = {
    google: { 
        families: 
                [ 'Playball::latin', 'Tangerine::latin', 'Pinyon+Script::latin', 'Alex+Brush::latin', 'Allura::latin' ], 
        urls: 
                ['../font-awesome/css/font-awesome.min.css']
    },
    timeout: 2000 // Set the timeout to two seconds
  };
  
(function() {
  var wf = document.createElement('script');
  wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
    '://ajax.googleapis.com/ajax/libs/webfont/1.5.18/webfont.js';
  wf.type = 'text/javascript';
  wf.async = 'true';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);
})(); 
