// ==UserScript==
// @author         friendly-trenchcoat
// @name           Lost and Pound - VWN finder
// @description    Find all names in format Xxxxx and print to console; hide others
// @include        http://lost.quiggle.org*
// @require	       http://code.jquery.com/jquery-latest.min.js
// ==/UserScript==

$("a[class='list']").each(function(k,v) {
    var name = $(v).attr("title");
    var vwn = name.match(/^[A-S][a-z]*$/); //Change letters in first [] for names that start with certian letters   
    if (vwn != null){
        console.log(""+vwn);
    }
    else{
        $(v).parent().parent().hide();
    }
});
