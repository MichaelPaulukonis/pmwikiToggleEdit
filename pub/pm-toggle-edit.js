// Michael Paulukonis
// September 2009
// for integration with http://www.pmwiki.org/wiki/Cookbook/Toggle
// and http://www.pmwiki.org/wiki/Cookbook/GuiEdit

function pmAddToggle() {
    // basic toggle code for one-box on/off
    // TODO: class for better CSS handling
    // use the (:div<n>:)...(:div<n>end:) markup to allow for toggling nested divs
    var uniqueNbr = (new Date).getTime();
    var idName = 'tog'+uniqueNbr;
    var open = '(:toggle id="'+idName+'" show="Show message" init=hide button=1:)\n';
    open += '(:div'+uniqueNbr+' id="'+idName+'" style=\"border:1px solid #999; padding:5px;\":)\n';
    var close = '\n(:div'+uniqueNbr+'end:)';
    insMarkup(open,close,'toggle this text');
}