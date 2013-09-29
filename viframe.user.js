// ==UserScript==
// @name	viframe
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
      var url = this.src
      var i = url.indexOf('?')
      if (i > -1)
	url = url.slice(0, i)
      var a = '<a href="' + url + '">' + url + '</a>'
      $(this).after(jQuery('<p>Embedded video:  ' + a + '</p>'))
      }
    ).remove()
  })()
