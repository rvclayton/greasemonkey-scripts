// ==UserScript==
// @name	tbogg
// @namespace	file:///home/rclayton/projects/greasemonkey/scripts
// @include     HTTP://tbogg.firedoglake.com/*
// @require     HTTP://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js
// ==/UserScript==

var classes = new Array('header', 'rightColWrapper')

for (var i = classes.length - 1; i > -1; i--)
  $("." + classes[i]).remove()

// $Log: tbogg.user.js,v $
// Revision 1.1  2010/08/25 19:22:06  rclayton
// Initial revision
//
// Revision 1.1  2010/08/23 22:58:44  rclayton
// Initial revision
//
