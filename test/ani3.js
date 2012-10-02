storyBoard = {
	step1 : {
		delay : 10,
		target : '.box1',
		addClass : 'ani1'
	},
	step2 : {
		delay : 800,
		target : '.box1',
		addClass : 'ani2'
	},
	step3 : {
		delay : 200,
		target : '.box2',
		addClass : 'ani1'
	},
	step4 : {
		delay : 1000,
		target : '.box2',
		addClass : 'ani2'
	},

	step5 : {
		delay : 1500,
		target : '.box1',
		removeClass : 'ani1'
	},
	step6 : {
		delay : 1700,
		target : '.box1',
		removeClass : 'ani2'
	},
	step7 : {
		delay : 1600,
		target : '.box2',
		removeClass : 'ani1'
	},
	step8 : {
		delay : 1800,
		target : '.box2',
		removeClass : 'ani2'
	},
};

$(function(){
	(startAni=function(){
		$.tween(storyBoard);
	})();
	setInterval(startAni,3000);
})