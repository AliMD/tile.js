storyBoard = {
	step1 : {
		delay : 500,
		target : '.box1',
		addClass : 'ani1'
	},
	step2 : {
		delay : 1200,
		target : '.box2',
		addClass : 'ani1'
	},
	step3 : {
		delay : 1500,
		target : '.box3',
		addClass : 'ani1'
	},
	step4 : {
		delay : 1600,
		target : '.box2',
		addClass : 'ani2'
	},
	step5 : {
		delay : 2000,
		target : '.box3',
		addClass : 'ani2'
	}
};

$(function(){
	$.tween(storyBoard);
})