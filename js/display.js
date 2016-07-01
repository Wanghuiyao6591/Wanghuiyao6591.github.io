$(function(){
	setInterval(function(){

	})

	$('.leftBtn').on('click',function(e){
		e.prevebtDefault();
		var index=parseInt($('fist').attr('index'));
		index-=1;
		if(index==-1){
			index=0;
		}
		$('.fist').addClass('left');
	})
})