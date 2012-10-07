// ==UserScript==
// @name	cooltools margin reducer
// @namespace	file:///home/rclayton/projects/greasemonkey/scripts
// @description Get rid of the left margin.
// @include	HTTP://kk.org/cooltools/*
// @require     HTTP://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js
// ==/UserScript==

document.getElementById("CTcontentcolumns").style.marginLeft = 0

$.each(
  [ 'logo-login', 'nav', 'categoriescol', 'yellowbox' ],
  function(_, v) { $('#' + v).remove(); }
  )
