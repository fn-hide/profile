
window.onload = function() {
	document.getElementById('jumbotron-image').classList.add('pop-image');
	document.getElementById('jumbotron-name').classList.add('pop-text');
	document.getElementById('jumbotron-dream').classList.add('pop-text');

	document.getElementById('jumbotron-image').style.opacity = 1;
	document.getElementById('jumbotron-name').style.opacity = 1;
	document.getElementById('jumbotron-dream').style.opacity = 1;

	document.getElementById('jumbotron-image').style.transform = 'translate(0px,0px)';
	document.getElementById('jumbotron-name').style.transform = 'translate(0px,0px)';
	document.getElementById('jumbotron-dream').style.transform = 'translate(0px,0px)';

	setTimeout(function(){
		document.getElementById('jumbotron-image').classList.remove('pop-image');
		document.getElementById('jumbotron-name').classList.remove('pop-text');
		document.getElementById('jumbotron-dream').classList.remove('pop-text');
	}, 1500);
};

window.onscroll = function() {
	
	// debug
	// console.log(window.scrollY);
	
	document.getElementById('jumbotron-image').style.transform = 'translate(0px, '+ window.scrollY/4 +'%)';
	document.getElementById('jumbotron-name').style.transform = 'translate(0px, '+ window.scrollY/2 +'%)';
	document.getElementById('jumbotron-dream').style.transform = 'translate(0px, '+ window.scrollY/1 +'%)';



	if (window.scrollY >= 400) {
		var history = document.getElementsByClassName('para-edu');

		for(let j = 0; j < history.length; j++){
		    (function(j){
		        setTimeout(function(){
		            history[j].classList.add('pap');
		        }, 500*j);
		    })(j);
		};
	};



	if (window.scrollY >= 1000) {
		var about = document.getElementsByClassName('para-about');

		for(let k = 0; k < about.length; k++){
		    (function(k){
		        setTimeout(function(){
		            about[k].classList.add('pap');
		        }, 500*k);
		    })(k);
		};
	};



	if (window.scrollY >= 1500) {
		var porto = document.getElementsByClassName('para-porto');

		for(let l = 0; l < porto.length; l++){
		    (function(l){
		        setTimeout(function(){
		            porto[l].classList.add('pap');
		        }, 500*l);
		    })(l);
		};
	};



	if (window.scrollY >= 1700) {
		var thumbnail = document.getElementsByClassName('thumbnail');

		for(let i = 0; i < thumbnail.length; i++){
		    (function(i){
		        setTimeout(function(){
		            thumbnail[i].classList.add('pop');
		        }, 300*i);
		    })(i);
		};
	};



	if (window.scrollY >= 2300) {
		var foo = document.getElementsByClassName('para-foo');

		for(let m = 0; m < foo.length; m++){
		    (function(m){
		        setTimeout(function(){
		            foo[m].classList.add('pap');
		        }, 300*m);
		    })(m);
		};
	};
};