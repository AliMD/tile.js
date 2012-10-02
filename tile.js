(function(zepto,undefined){

	var vendors = { Webkit: 'webkit', Moz: '', O: 'o', ms: 'MS' },
		prfx = '';

	// find browser perfix
	testEl = document.createElement('div');
	$.each(vendors, function(vendor){
		if (testEl.style[vendor + 'TransitionProperty'] !== undefined) {
			prfx = '-' + vendor.toLowerCase() + '-';
			alert(prfx);
			return false
		}
	});

	zepto.tween = function(tweenJson){
		$.each(tweenJson,function(i,tweeen){
			var cssAni = {};
			if(tweeen.due && tweeen.keyframe){
				cssAni[prfx+"animation-name"] = tweeen.keyframe;
				cssAni[prfx+"animation-duration"] = tweeen.due+'ms';
				cssAni[prfx+"animation-timing-function"] = tweeen.ease || 'linear';
				cssAni[prfx+"animation-play-state"] = "paused";
				$(tweeen.target).css(cssAni);
			}
			tweeen.id = setTimeout(function() {
				var target = $(tweeen.target);
				tweeen.addClass && target.addClass(tweeen.addClass);
				tweeen.removeClass && target.removeClass(tweeen.removeClass);
				cssAni = {}; cssAni[prfx+"animation-play-state"] = "running"; target.css(cssAni);
			},tweeen.delay);
		});
	}

})(window.Zepto)