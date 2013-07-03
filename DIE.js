/**
 * DIE IE! DIE! (because we love the web)
 * https://github.com/ryanatkn/DIE
 * MIT license
 */
(function() {

  // Call `window.DIE(n)` where `n` is the minimum version of IE you wish to support.
  // If IE is detected below `n`, this library gives friendly upgrade instructions to the user.
  // It also returns and sets `DIE.isDead`, a bool indicating if the browser is supported.
  window.DIE = function(minIEVersionSupported) {
    DIE.ieVersion = DIE.getIEVersion();
    DIE.isDead = DIE.ieVersion > -1 && (minIEVersionSupported == null || DIE.ieVersion < parseInt(minIEVersionSupported));
    if (DIE.isDead)
      DIE.killItWithIre();
    return DIE.isDead;
  };

  // Returns the version of Internet Explorer or a -1 indicating the use of another browser.
  // Taken from the lair of the beast, http://msdn.microsoft.com/en-us/library/ms537509(v=vs.85).aspx
  DIE.getIEVersion = function() {
    var version = -1;
    var ua = navigator.userAgent;
    if (navigator.appName === 'Microsoft Internet Explorer') {
      var re = new RegExp('MSIE ([0-9]{1,}[\.0-9]{0,})');
      if (re.exec(ua) != null)
        version = parseInt(RegExp.$1);
    }
    // IE!!! js will always find you! http://www.nczonline.net/blog/2013/07/02/internet-explorer-11-dont-call-me-ie/
    else if (ua.indexOf && ua.indexOf('Trident') > -1) {
      version = 11;
    }
    return version;
  };

  // Alert the townsfolk! The beast is upon us!
  DIE.killItWithIre = function() {
    var styling = 'style="font-size: 24px; line-height: 1.5; padding: 0 0 0 10px; margin: 0 0 10px 0;"';
    var html =
      '<div id="die-unsupported-message" style="position: relative;">' +
        '<p ' + styling + '>We\'re sorry, but your browser doesn\'t support the modern web.</p>' +
        '<p ' + styling + '>Please upgrade to view this website!</p>' +
        '<p ' + styling + '>These browsers should work great:</p>' +
        '<ul>' +
          '<li ' + styling + '><a target="_blank" href="https://www.mozilla.org/en-US/firefox/new/">Mozilla Firefox</a></li>' +
          '<li ' + styling + '><a target="_blank" href="https://www.google.com/chrome">Google Chrome</a></li>' +
          '<li ' + styling + '><a target="_blank" href="https://www.apple.com/safari/">Apple Safari</a></li>' +
          '<li ' + styling + '><a target="_blank" href="http://www.opera.com/">Opera</a></li>' +
        '</ul>' +
        '<p ' + styling + '>Your web browsing experience should improve significantly.</p><p style="margin-bottom: 60px;"></p>' +
        '<span style="font-size: 168px; margin: 0; line-height: 1.1; position: absolute; top: 78px; left: 460px;">:)</span>' +
      '</div>';
    document.write(html);
  };
})();