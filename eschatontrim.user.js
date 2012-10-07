// ==UserScript==
// @name	eschaton trimmer
// @namespace	file:///home/rclayton/projects/greasemonkey/scripts
// @description Trim some junk on the eschaton page.
// @include	HTTP://www.eschatonblog.com/*
// @require     HTTP://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js
// ==/UserScript==

(function() {

  var ifs = document.getElementsByTagName('iframe');
  while (ifs.length > 0)
    ifs[0].parentNode.removeChild(ifs[0]);

  $('#byline').remove()
  $('.tabs-outer').remove()
  $('.fauxcolumn-left-outer').remove()
  $('#navbar').remove()
  $('body').children('table:eq(1)').remove()
  })()

// $Log: eschatontrim.user.js,v $
// Revision 1.1  2010/09/21 03:24:52  rclayton
// Initial revision
//
