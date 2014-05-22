//= require jquery/dist/jquery.js
//= require fastclick/lib/fastclick.js
//= require foundation/js/foundation.js
//= include app.js

// foundation

$(document).foundation();

// FastClick

window.addEventListener('load', function() {
    FastClick.attach(document.body);
    FastClick.attach(document.getElementByCLass('selection'));
    FastClick.attach(document.getElementByCLass('agree'));
    FastClick.attach(document.getElementByCLass('disagree'));
    FastClick.attach(document.getElementByCLass('none'));
    FastClick.attach(document.getElementByTagName('input'));
    FastClick.attach(document.getElementByTagName('label'));
}, false);
