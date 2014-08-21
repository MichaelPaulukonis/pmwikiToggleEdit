// Michael Paulukonis
// September 2009
// for integration with http://www.pmwiki.org/wiki/Cookbook/Toggle
// and http://www.pmwiki.org/wiki/Cookbook/GuiEdit

function pmAddToggle(style, cls) {
    // basic toggle code for one-box on/off
    // use the (:div<n>:)...(:div<n>end:) markup to allow for toggling nested divs

	style = style || 'border:1px solid #999; padding:5px;';
	cls = cls || '';
	var div = makeDiv(style, cls, '', 'tog');
	var id = div.id;
		
    var open = '(:toggle ' + id + ' show="Show message" init=hide button=1:)\n';
	
	open += div.open + '\n';
	var close = '\n' + div.close;
	
    insMarkup(open,close,'toggle this text');
}

// create pmWiki div markup with id (optional prefix), class and style attributes
function makeDiv(style, cls, id, prefix) {

	style = (style ? 'style=\"' + style + '\"' : '' );
	cls = (cls ? 'class=\"' + cls + '\"' : '');
	prefix = prefix || '';
	
	var uniqueNbr = (new Date).getTime();
    id = id || uniqueNbr;
    var idFull = 'id=\"' + prefix + id + '\"';
		
	var builder = ['(:div' + uniqueNbr, idFull, cls, style, ':)'];	

	var open = builder.join(' ');	
    var close = '(:div'+uniqueNbr+'end:)';

	return { id: idFull,
			 open: open,
			 close: close
		    };
}