// ==UserScript==
// @name	munge video iframes.
// @namespace	file:///home/rclayton/projects/greasemonkey/scripts
// @description Replace video iframes with a link to the video.
// @include	http://*
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js
// ==/UserScript==

(function () {

  var re = new RegExp('(http:)?//(www.youtube|player.vimeo)')

  jQuery('iframe').filter(
    function () {
      return re.test(this.src)
      }
    ).each(
    function () {
      var a = '<a href="' + this.src + '">' + this.src + '</a>'
      $(this).after(jQuery('<p>Embedded video:  ' + a + '</p>'))
      }
    ).remove()
  })()
