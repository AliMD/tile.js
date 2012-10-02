storyBoard = {
	ani1 : {
		delay : 1000,
		target : '.box1',
		keyframe : 'ani1',
		due : 4000,
		ease : 'ease-out'
	},
	ani2 : {
		delay : 5000,
		target : '.box2',
		keyframe : 'ani2',
		due : 1000,
		ease : 'ease-out'
	},
	ani3 : {
		delay : 5500,
		target : '.box3',
		keyframe : 'ani2',
		due : 1000,
		ease : 'ease-out'
	}
};

$(function(){
	$.tween(storyBoard);
})