(function(window){
	var helloSpeaker ={}
	//helloSpeaker.name =[];
	var speakWord = "Hello";
	helloSpeaker.speak = function(names) {
  		console.log(speakWord +names);
	}
	window.helloSpeaker =helloSpeaker;
})(window);