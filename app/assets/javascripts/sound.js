function Sound(source) {
	if(!window.audioContext) {
		audioContext = new webkitAudioContext;
	}

	var that = this;
	that.source = source;
	that.buffer = null;
	that.isLoaded = false;

	var getSound = new XMLHttpRequest();
	getSound.open("GET", that.source, true);
	getSound.responseType = "arraybuffer";
	getSound.onload = function() {
		audioContext.decodeAudioData(getSound.response,function(buffer) {
			that.buffer = buffer;
			that.isLoaded = true;
		});
	}
	getSound.send();
}

Sound.prototype.play = function() {
	if(this.isLoaded === true) {
		var playAudio = audioContext.createBufferSource();
		var filter = audioContext.createBiquadFilter();
	  filter.type = 0; // LOWPASS
	  filter.frequency.value = 5000;
	  // Connect source to filter, filter to destination.
	  playAudio.connect(filter);
	  filter.connect(audioContext.destination);
		playAudio.buffer = this.buffer;
		playAudio.connect(audioContext.destination);
		playAudio.noteOn(0);
		this.playAudio = playAudio;
	  this.filter = filter;
	}
}

var Sound = {
	FREQ_MUL: 7000,
  QUAL_MUL: 30,
  playing: false
};

Sound.changeFrequency = function(element) {
  // Clamp the frequency between the minimum value (40 Hz) and half of the
  // sampling rate.
  var minValue = 40;
  var maxValue = context.sampleRate / 2;
  // Logarithm (base 2) to compute how many octaves fall in the range.
  var numberOfOctaves = Math.log(maxValue / minValue) / Math.LN2;
  // Compute a multiplier from 0 to 1 based on an exponential scale.
  var multiplier = Math.pow(2, numberOfOctaves * (element.value - 1.0));
  // Get back to the frequency value between min and max.
  this.filter.frequency.value = maxValue * multiplier;
};

Sound.changeQuality = function(element) {
  this.filter.Q.value = element.value * this.QUAL_MUL;
};

Sound.toggleFilter = function(element) {
  this.source.disconnect(0);
  this.filter.disconnect(0);
  // Check if we want to enable the filter.
  if (element.checked) {
    // Connect through the filter.
    this.source.connect(this.filter);
    this.filter.connect(context.destination);
  } else {
    // Otherwise, connect directly.
    this.source.connect(context.destination);
  }
};
