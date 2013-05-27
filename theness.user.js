// ==UserScript==
// @name	theness
// @namespace	file:///mnt/projects/greasemonkey-scripts
// @description Get rid of the width declarations for neurologica pages.
// @include	http://theness.com/neurologicablog/*
// @require     HTTP://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js
// ==/UserScript==

$.each(

    [ $("div#main"), $("div#content") ],

    function(_, v) {
      v.each(function(_) { $(this).css({ width : "97%" }) })
      })



