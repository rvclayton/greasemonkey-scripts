// ==UserScript==
// @name	trim y-combinator news
// @namespace	file:///home/rclayton/projects/greasemonkey/scripts
// @description Trim some junk off y-combinator news
// @include     https://news.ycombinator.com/*
// @require     HTTP://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js
// ==/UserScript==

$.each(
  [ 'subtext', 'comhead' ], 
  function(_, v) { $('td.' + v).remove() })

$.each(
  [ 'startup', 'Startup', 'founder', 'Founder', 'entrepren', 'Entrepren', 
    'Review my', 'Y Combinator', 'Show HN', 'Ask HN', 'Tell HN', 'YC '],
  function(_, v) { $('a:contains("' + v + '")').parent().parent().remove() }
  )
