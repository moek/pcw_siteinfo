/*
 * Reads and returns information of currently loaded WebSite.
 * Depends on jQuery and currently loaded WebSite.
 */
function Page () {

    this.getAds = function() {
      var adArray = [];
      jQuery('.ads script:first-child').each(function(){
        var script = jQuery(this).text();
        if (script.length > 0) {
          var match = script.match(/src="http:\/\/ad.de.doubleclick.net\/adj\/pcwelt5.de\/(.*?);.*?;pos=(.*?);.*?"/);
          var adStruct = {
            'dart': match[1],
            'pos': match[2]
          };
          adArray.push(adStruct);
        }
      });
      return adArray;
  };

}
