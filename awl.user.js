// ==UserScript==
// @name	awl article remover.
// @namespace	file:///home/rclayton/projects/greasemonkey/scripts
// @description Remove un-interesting articles.
// @include	HTTP://www.theawl.com/*
// @require     HTTP://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js
// ==/UserScript==

$.each(
  [ "splitsider", "The Poetry Section", "Hooped Up", "Overheated",
    "The 90-Second Morning Blast" ], 
  function (_, v) { $('a:contains("' + v + '")').parent().parent().remove() }
  )

// $Log: awl.user.js,v $
// Revision 1.2  2011/09/08 19:57:24  rclayton
// replace for over list with $.each().
//
// Revision 1.1  2011/03/18 02:26:14  rclayton
// Initial revision
//
