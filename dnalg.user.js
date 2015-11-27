// ==UserScript==
// @name	Bigger anchor text.
// @namespace	file:///home/rclayton/projects/greasemonkey/scripts
// @description Make the anchor text on the next-picture link larger.
// @include	https://www.dnalounge.com/gallery/*
// @require     HTTP://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js
// ==/UserScript==

$('.navR').text('>>>>')
$('.masthead').remove()
$('#menu1').remove()

// $Log: dnalg.user.js,v $
// Revision 1.2  2012/08/12 21:52:35  rclayton
// get rid of the masthead and menu.
//
// Revision 1.1  2011/03/13 18:33:06  rclayton
// Initial revision
//

