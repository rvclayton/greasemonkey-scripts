// ==UserScript==
// @name	trim y-combinator news
// @namespace	file:///home/rclayton/projects/greasemonkey/scripts
// @description Trim some junk off y-combinator news
// @include     HTTP://news.ycombinator.com/*
// @require     HTTP://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js
// ==/UserScript==

$('.subtext').remove()
$('a:contains("startup")').parent().parent().remove()
$('a:contains("Startup")').parent().parent().remove()
$('a:contains("founder")').parent().parent().remove()
$('a:contains("Founder")').parent().parent().remove()
$('a:contains("entrepren")').parent().parent().remove()
$('a:contains("Entrepren")').parent().parent().remove()
$('a:contains("Review my")').parent().parent().remove()
$('a:contains("Y Combinator")').parent().parent().remove()
$('a:contains("Show HN")').parent().parent().remove()
$('a:contains("Ask HN")').parent().parent().remove()
$('a:contains("Tell HN")').parent().parent().remove()
$('a:contains("YC ")').parent().parent().remove()

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
