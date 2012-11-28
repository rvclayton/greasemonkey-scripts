// ==UserScript==
// @name	trim y-combinator news
// @namespace	file:///home/rclayton/projects/greasemonkey/scripts
// @description Trim some junk off y-combinator news
// @include     HTTP://news.ycombinator.com/*
// @require     HTTP://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js
// ==/UserScript==

$.each(
  [ 'subtext', 'comhead' ], 
  function(_, v) { $('.' + v).remove() })

$.each(
  [ 'startup', 'Startup', 'founder', 'Founder', 'entrepren', 'Entrepren', 
    'Review my', 'Y Combinator', 'Show HN', 'Ask HN', 'Tell HN', 'YC '],
  function(_, v) { $('a:contains("' + v + '")').parent().parent().remove() }
  )

// $Log: ycom.user.js,v $
// Revision 1.6  2011/08/01 19:56:13  rclayton
// delete items that ask|tell|show hn.
//
// Revision 1.5  2010/11/03 03:20:51  rclayton
// Delete items referencing various forms of "Y Combinator"
//
// Revision 1.4  2010/10/01 21:50:46  rclayton
// Drop "Review my" items.
//
// Revision 1.3  2010/09/19 17:19:52  rclayton
// Kill Entrepreneurs too.
//
// Revision 1.2  2010/09/02 18:02:05  rclayton
// kill entrepreneurs too.
//
// Revision 1.1  2010/08/27 19:17:57  rclayton
// Initial revision
//
