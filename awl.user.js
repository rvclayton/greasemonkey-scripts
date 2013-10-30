// ==UserScript==
// @name	awl article remover.
// @namespace	file:///home/rclayton/projects/greasemonkey/scripts
// @description Remove un-interesting articles.
// @include	HTTP://www.theawl.com/*
// @require     HTTP://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js
// ==/UserScript==

$.each(
  [ "splitsider", "The Poetry Section", "Hooped Up", "Overheated",
    "The 90-Second Morning Blast", "SPONSORED POST", "Bears" ], 
  function (_, v) { $('a:contains("' + v + '")').parent().parent().remove() }
  )

$.each(
  [ "#nfooter", "#comment-reply" ], 
  function (_, v) { $(v).remove() }
  )
