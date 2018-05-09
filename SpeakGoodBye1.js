(function(window){
	var byeSpeaker ={}
	//byeSpeaker.name =[];
	var speakWord = "Good Bye";
	byeSpeaker.speak = function(names) {
  		console.log(speakWord + " " +names);
	}
	window.byeSpeaker =byeSpeaker;
})(window);