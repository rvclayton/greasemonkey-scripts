// ==UserScript==
// @name	vv
// @namespace	file:///mnt/projects/greasemonkey-scripts/
// @description Match hosts and delete elements with particular ids or classes.
// @include     http://www.3quarksdaily.com/*
// @include     HTTP://arstechnica.com/*
// @include     http://betterbooktitles.com/*
// @include     http://www.boomantribune.com/*
// @include     http://buttersafe.com/*
// @include     http://charleshughsmith.blogspot.com/*
// @include     HTTP://c.urvy.org/*
// @include     http://blogs.discovermagazine.com/*
// @include	http://www.dieselsweeties.com/*
// @include	http://www.economicprincipals.com/*
// @include	http://www.esquire.com/*
// @include     http://www.firstthings.com/blogs/drboli/*
// @include	http://freethoughtblogs.com/*
// @include	http://www.ginandtacos.com/*
// @include	http://www.gocomics.com/*
// @include	http://www.google.com/*
// @include	http://gramponante.com/*
// @include	http://www.lawyersgunsmoneyblog.com/*
// @include	http://www.lunchstudio.com/*
// @include     HTTP://www.mailinator.com/*
// @include     http://www.nakedcapitalism.com/*
// @include     http://theness.com/neurologicablog/*
// @include     http://nonadventures.com/*
// @include     HTTP://*blogs.nytimes.com/*
// @include     https://pinboard.in/recent/*
// @include     http://www.planetscala.com/*
// @include     http://planet.haskell.org/*
// @include     http://poorlydrawnlines.com/comic/*
// @include     http://prospect.org/blog/*
// @include     http://questionablecontent.net/*
// @include	http://www.qwantz.com/*
// @include     http://www.ramblinwreck.com/*
// @include     https://www.reddit.com/r/*
// @include     http://www.ritholtz.com/*
// @include     http://www.scheme.dk/planet/*
// @include     http://www.sciencebasedmedicine.org/index.php/*
// @include     http://www.smbc-comics.com/*
// @include     http://smittenkitchen.com/*
// @include     http://www.sylvanmigdal.com/*
// @include     http://tacchans.blog.jp/*
// @include	http://www.vanityfair.com/*
// @include	http://www.villagevoice.com/*
// @include	HTTP://thisisnthappiness.com/*
// @include     http://tinypic.com/*
// @include     http://2paragraphs.com/*
// @include     http://xkcd.com/*
// @include     http://www.washingtonmonthly.com/*
// @include     http://www.washingtonpost.com/*
// @include     http://wonkette.com/*
// @include     http://www.wwtdd.com/*
// @include     http://www.youtube.com/*
// @require     HTTP://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js
// ==/UserScript==

(function () {

  // This list should contain jquery selectors (including .classes and #ids); 
  // all elements matching the selectors are removed().

  var ids = {
      "3quarksdaily": [ '.posted',  '#sidebar-left' ]

    , "arstech": [ 
        'div.microsoft', 'div.gaming', '#links-bar', '#read-more-stories',
        'header', 'nav' ]

    , "betterbooktitles": [ 'table.container td:first' ]

    , "booman": [ '.sharing' ]

    , "buttersafe": [ '#logoheader2', '#menubar' ]

    , "charleshughsmith": [ '#side-wrapper1', '#middleads-wrapper',
	'#linkbar-wrapper', '#header-wrapper' ]

    , "comics": [ 
        '.Header', '.SRCH_AdvancedOptions', '.SRCH_Options', '.SRCH_Logo',
        '.STR_Date', '.ui_datepicker-trigger' ]

    , "discoverm": [ '#mainBanner', '#header' ]

    , "diesels": [ '.scoop', 'body div table:first' ]

    , "economicprincipals": [ '#sidebar', '#header' ]

    , "esquire": [ 
        '#ad_banner', '.header-content', '.article_nav', '#blog_branding',
        '#CNTR_blog_search', '#trending_links', '.ad-gpt-main',
        '.ad-gpt-vertical', '.ad-gpt-sharethrough' ]

    , "firstthings": [ '#siteHeading', '#masterNav' ]

    , "freethoughtblogs": [ '.site-container' ]

    , "ginandtacos": [ '.sociable', '.postmetadata' ]

    , "gocom": [ '#header', '.ad' ]

    , "google": [ '#gb', '#tads' ]

    , "gramponante": [ 
        '#nav1-container', '#nav2-container', '#header-container',
        '#sb-container', '.tweetthis', '#subscribe', '#author-info',
        '.post-meta', '#sb2', '#copyright', '#footer-container', '#respond' ]

    , "lawyersgunsmoneyblog": [ 
         '.addthis_toolbox', '.addthis_default_style', '#topnav', '#header',
         '#catnav', '.sociable' ]

    , "lunchstudio": [ 
        '#left-sidebar-wrapper', '#header-wrapper', '.post-footer' ]

    , "mailinator": [ '.termsdiv', '#footer' ]

    , "nakedcapitalism": [ 
        '#crosscol-wrapper', '#header-wrapper', '.post-footer' ]

    , "theness": [ '#header', '#sidebar1', '#sidebar2' ]

    , "nonadventures": [ '#header' ]

    , "nytimes": [ '#login', '#masthead', '#navigation', '#TopAd' ]

    , "ramblinwreck": [ '#cdown-main', '#sticky-footer', '#sticky-header',
        '#main-wrap', '#headline-wrap', '#money-wrap', '#nav-wrap',
        '#access-wrap', '#mast', '#lg-ad', '#footer-disclaimer', '#btm-ads', 
        '#footer-promo-wrap', '#title-wrap', '#storyNav', '.tablecontent',
        '.schedhist'
        ]

    , "reddit": [ 
        '.side', 'div#header', 'p.tagline', '.infobar', '.flat-list', '.rank',
        '.midcol', '#siteTable_promoted', '.expando-button', '.domain',
        '#siteTable_organic'
        ]

    , "pinboard": [ '.description', '.source' ]

    , "planetscala": [ '.sidebar' ]

    , "planet.haskell": [ '.sidebar' ]

    , "poorlydrawnlines": [ '.logo' ]

    , "prospect": [ '#ad-top', '#navigation', '#content-header' ]

    , "questionablecontent": [ '#topline' ]

    , "qwantz": [ '#header', '.headertext' ]

    , "ritholtz": [ 
        '#header', '.post_sub_header', '.post_meta_stuff', '.post_share_stuff',
        '#sidebar' ]

    , "scheme": [ '.sidebar' ]

    , "sciencebasedmedicine": [ '#sidebar1', '#sidebar2' ]

    , "smbc": [ '#header' ]

    , "smittenkitchen": [ '#sidebar', ['body', 'width'] ]

    , "sylvanmigdal": [ '#theLeaderboard', '#thePWBannerAd' ]

    , "tacchans": [
        '#blog-header', '.ldb_menu-wrapper', '.message-board-outer'
        ]

    , "thisisnthappiness": [  ]

    , "tinypic": [ '.header-container', '.member-container', '.content-sec' ]

    , "2parag": [
        '#category_nav_area', '#sub_nav_area', '.post_sharing', 
        '.recent_posts_category' ]

    , "urvy": [ '#theLeaderboard', '#theArt_curvy' ]

    , "vanityfair":
        [ '.cn_page_header', '#top-rail' ]

    , "villagevoice": [
        '.ads', '.sde-shadow', '.rail-container', '.rel-stories'
        ]

    , "xkcd": [ '#topContainer' ]

    , "washingtonmonthly": [ 
        '#featured', '#sidebar', '#ads', '#sidebar-content', '#header-ad',
        '#header']

    , "washingtonpost": [ 
        '.ad-top', '.ads', '#blog-tag-search-subnav', '#header-v3' ]

    , "wonkette": [ 
        '#topmenuContainer', '.td-header-container', '#idc-noscript' , '#sidebars',
        '#post-supplement', '.headline_meta', '#footer', '#sharethis_0',
        '#idc-container-parent', '#view_counter', '#topLeaderboard', 
        '.OUTBRAIN', '#IDCommentPopup', '#IDCommentsHead', '#idc-cover',
        '#idc-container-parent', '.header-author', '.entry-share',
        '.entry-date', '.updated', '.headerDateFix', '.pw', '#ctx-module',
        '.entry-meta', '.pw-widget', '.td-tags', '.insert-post-ads',
        '.td-a-rec' ]

    , "wwtdd": [ 
        '#header', '.ad-homepage', '.post_insert', '.postmetadata',
        '#menu_container', '.ad-misc' ]

    , "youtube": [ '.promoted-videos', '.pyv-promoted-videos' ]
    }
	
  for (var key in ids)
    if (location.host.indexOf(key) > -1) {
      $.each(ids[key], function(_, v) {
	if (Array.isArray(v)) {
	  alert('v[1] = "' + v[1] + '"');
	  $(v[0]).removeAttr(v[1])
	  }
	else
  	  $(v).remove();
        });
      return
      }
	
  GM_log('No ids found for matched page ' + location.host)

  })()
