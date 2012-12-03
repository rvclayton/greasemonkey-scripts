// ==UserScript==
// @name	vv
// @namespace	file:///home/rclayton/projects/greasemonkey/scripts
// @description Match hosts and delete elements with particular ids or classes.
// @include     http://wiki.answers.com/*
// @include     http://www.americanelf.com/*
// @include     HTTP://arstechnica.com/*
// @include     http://betterbooktitles.com/*
// @include     HTTP://comics.com/pearls_before_swine/*
// @include     HTTP://c.urvy.org/*
// @include     http://delong.typepad.com/*
// @include     http://blogs.discovermagazine.com/*
// @include	http://www.dieselsweeties.com/*
// @include	http://blog.drawn.ca/*
// @include	http://eroticaleedaily.blogspot.com/*
// @include	http://www.esquire.com/*
// @include     HTTP://*firedoglake.com/*
// @include     http://www.firstthings.com/blogs/drboli/*
// @include	HTTP://www.flickr.com/*
// @include     HTTP://freshmeat.net/*
// @include	http://www.gocomics.com/*
// @include	http://gramponante.com/*
// @include	http://infoworld.com/*
// @include	http://www.javaworld.com/*
// @include	http://www.lawyersgunsmoneyblog.com/*
// @include	http://lazybookreviews.tumblr.com/*
// @include	http://www.lunchstudio.com/*
// @include     HTTP://www.mailinator.com/*
// @include     http://www.nakedcapitalism.com/*
// @include     HTTP://*blogs.nytimes.com/*
// @include     http://prospect.org/blog/*
// @include     HTTP://www.reddit.com/r/*
// @include     http://www.ritholtz.com/*
// @include     http://www.sylvanmigdal.com/*
// @include	HTTP://blogs.villagevoice.com/*
// @include     http://www.smbc-comics.com/*
// @include     HTTP://www.theawl.com/*
// @include	HTTP://thisisnthappiness.com/*
// @include     http://tinypic.com/*
// @include     http://www.xkcd.com/*
// @include     http://www.washingtonmonthly.com/*
// @include     http://wonkette.com/*
// @include     http://www.wwtdd.com/*
// @include     http://www.youjizz.com/*
// @require     HTTP://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js
// ==/UserScript==

(function () {

  // This list should contain jquery selectors (including .classes and #ids); 
  // all elements matching the selectors are removed().

  var ids = {
      "americanelf": [ 'table:first', '.frequency' ]

    , "answers.com": [ '#left-column', '#header', '#headerSection2' ]

    , "arstech": [ 
        'div.microsoft', 'div.gaming', '#links-bar', '#read-more-stories',
        'header', 'nav' ]

    , "betterbooktitles": [ 'table.container td:first' ]

    , "comics": [ 
        '.Header', '.SRCH_AdvancedOptions', '.SRCH_Options', '.SRCH_Logo',
        '.STR_Date', '.ui_datepicker-trigger' ]

    , "discoverm": [ '#mainBanner', '#header' ]

    , "delong": [ '#banner', '#nav', '#footer', '#beta', '#gamma' ]

    , "diesels": [ '.scoop', 'body div table:first' ]

    , "drawn": [ '#header' ]

    , "eroticalee": [ 
        '#navbar', '.body-fauxcolumns', '.content-cap-top', '.cap-top' ]

    , "esquire": [ 
        '#ad_banner', '#blog_header_gen', '.article_nav', '#blog_branding',
        '#CNTR_blog_search', '#trending_links' ]

    , "firedoglake": [ 
        '.header', '.rightColWrapper', '#topNavLinks' , '.clearing',
        '#wp-admin-bar' ]

    , "firstthings": [ '#siteHeading', '#masterNav' ]

    , "flickr": [ '#TopBar', '#head', 'noscript', '#nav' ]

    , "freshmeat": [
        '#topnav', '#leaderboard', '#mashup', '#footer', '.banner-imu']

    , "gocom": [ '#header' ]

    , "gramponante": [ 
        '#nav1-container', '#nav2-container', '#header-container',
        '#sb-container', '.tweetthis', '#subscribe', '#author-info',
        '.post-meta' ]

    , "infoworld": [ 
        '#block-infoworld-infoworld_header_domains', '#ad_ticker', '#rightcol',
        '#block-infoworld_nav-navigation_domain', '#breadcrumbs', 
        '#block-block-20', '#block-block-21', '#sponsored1', '#sponsored2',
        '.addResources', '.relatedContent', '#block-idg_twitter-idg_twitter',
        '#edit-promo' ]

    , "javaworld": [ 
        '#bannerarea', '.wideticker', '#toolbar', '#id_storytools_top',
        '#d-e_col2b' ]

    , "lawyersgunsmoneyblog": [ '.addthis_toolbox', '.addthis_default_style' ]

    , "lazybookreviews": [ '#header' ]

    , "lunchstudio": [ 
        '#navbar', '#left-sidebar-wrapper', '#crosscol-wrapper' ]

    , "mailinator": [ '.termsdiv', '#footer' ]

    , "nakedcapitalism": [ 
        '#crosscol-wrapper', '#header-wrapper', '.post-footer' ]

    , "nytimes": [ '#login', '#masthead', '#navigation', '#TopAd' ]

    , "reddit": [ 
        'div.side', 'div.header', 'p.tagline', '.infobar', '.flat-list',
        '.rank', '.midcol'
        ]

    , "prospect": [ '#ad-top', '#navigation', '#content-header' ]

    , "ritholtz": [ 
        '#header', '.post_sub_header', '.post_meta_stuff', '.post_share_stuff',
        '#sidebar' ]

    , "smbc": [ 'table:eq(1) td:first' ]

    , "sylvanmigdal": [ '#theLeaderboard', '#thePWBannerAd' ]

    , "theawl": 
        [ '.comment-meta', '#header', '#ad1', '#sidebar', '.social-media',
          '.facebook-recommend', '#ad4', 'h3.date', '.outbrain-related',
          '#comment-sort', '.tags', '#comments', '.network-header' ]

    , "thisisnthappiness": [  ]

    , "tinypic": [ '.header-container', '.member-container', '.content-sec' ]

    , "urvy": [ '#theLeaderboard', '#theArt_curvy' ]

    , "villagevoice":
        [ '.leaderboard', '.sitenav', '#blog_header', '#top_stories_container',
          'iframe' ]

    , "xkcd": [ '#topContainer' ]

    , "washingtonmonthly": [ 
        '#featured', '#sidebar', '#ads', '#sidebar-content' ]

    , "wonkette": [ 
        '#topmenuContainer', '#header', '#idc-noscript' , '#sidebars',
        '#post-supplement', '.headline_meta', '#footer', '#sharethis_0',
        '#idc-container-parent', '#view_counter', '#topLeaderboard', 
        '.OUTBRAIN' ]

    , "wwtdd": [ 
        '#header', '.ad-homepage', '.post_insert', '.postmetadata',
        '#menu_container', '.ad-misc' ]

    , "youjizz": [ 
        '#login', '#top', '#sub', '#fotter', '#fotter2', 'div#main td:eq(1)' 
        ]
    }
	
  for (var key in ids)
    if (location.host.indexOf(key) > -1) {
      $.each(ids[key], function(_, v) { $(v).remove(); });
      return
      }
	
  GM_log('No ids found for matched page ' + location.host)

  })()


// $Log: vv.user.js,v $
// Revision 1.24  2012/05/11 01:03:53  rclayton
// delete more awl.
//
// Revision 1.23  2012/04/09 23:38:13  rclayton
// delete more stuff from awl pages.
//
// Revision 1.22  2011/10/13 01:38:42  rclayton
// trim nakedcapitalism.
//
// Revision 1.21  2011/10/01 14:13:45  rclayton
// add gram p
//
// Revision 1.20  2011/09/30 23:41:52  rclayton
// scrub esquire blogs.
//
// Revision 1.19  2011/09/08 19:03:12  rclayton
// replace for over lists with $.each().
//
// Revision 1.18  2011/07/11 16:52:58  rclayton
// trim mailinator pages
//
// Revision 1.17  2011/07/03 13:10:30  rclayton
// added freshmeat from trimpages.
//
// Revision 1.16  2011/04/28 23:14:51  rclayton
// trim what would tyler durden do?
//
// Revision 1.15  2011/03/26 00:03:07  rclayton
// Change the lunch studio url, delete some more cruft.
//
// Revision 1.14  2011/03/24 14:55:32  rclayton
// trim the big picture.
//
// Revision 1.13  2011/03/15 04:50:13  rclayton
// Clean up new lunchstudio format, clean up more wonkette.
//
// Revision 1.12  2011/03/10 16:14:17  rclayton
// Trim infoworld.
//
// Revision 1.11  2010/12/12 15:18:59  rclayton
// Trim more delong; trim sylvanmigdal.
//
// Revision 1.10  2010/11/09 02:23:18  rclayton
// Generalize tbogg to firedoglake; remove more cruft.
//
// Revision 1.9  2010/10/31 23:09:10  rclayton
// Clean up tinypic pages.
//
// Revision 1.8  2010/10/31 01:14:45  rclayton
// Trim drawn pages.
//
// Revision 1.7  2010/10/26 18:47:45  rclayton
// Trim answers.com pages.
//
// Revision 1.6  2010/10/26 18:45:17  rclayton
// Delete wonkette sidebars.
//
// Revision 1.5  2010/10/21 01:04:11  rclayton
// Drop more cruft from awl pages.
//
// Revision 1.4  2010/10/03 13:52:08  rclayton
// drop microsoft and gamer items in ars tech.
//
// Revision 1.3  2010/09/23 23:44:23  rclayton
// Get rid of awl headlines too
//
// Revision 1.2  2010/09/13 22:11:01  rclayton
// added diesel sweeties.
//
// Revision 1.1  2010/08/27 23:42:01  rclayton
// Initial revision
//
