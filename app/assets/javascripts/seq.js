$(document).ready(function(){
// var startOffset = 0;
// var startTime = 0;

// function pause() {
//   source.stop();
//   // Measure how much time passed since the last pause.
//   startOffset += context.currentTime - startTime;
// }

// function play() {
//   startTime = context.currentTime;
//   var source = context.createBufferSource();
//   // Connect graph
//   source.buffer = this.buffer;
//   source.loop = true;
//   source.connect(context.destination);
//   // Start playback, but make sure we stay in bound of the buffer.
//   source.start(0, startOffset % buffer.duration);
// }


// var RhythmSample = function() {
//   loadSounds(this, {
//     kick: 'sounds/kick.mp3',
//     claps: 'sounds/claps.wav',
//     hihat: 'sounds/hihat.wav'
//   });
// };

// RhythmSample.prototype.play = function() {
//   // We'll start playing the rhythm 100 milliseconds from "now"
//   var startTime = context.currentTime + 0.100;
//   var tempo = 128; // BPM (beats per minute)
//   var eighthNoteTime = (60 / tempo) / 2;


//   // Play 2 bars of the following:
//   for (var bar = 0; bar < 2; bar++) {
//     var time = startTime + bar * 8 * eighthNoteTime;
//     // Play the bass (kick) drum on beats 1, 5
//     playSound(this.kick, time, "1");
//     playSound(this.kick, time + 4 * eighthNoteTime, "5");
//     // Play the snare drum on beats 3, 7
//     playSound(this.claps, time + 3 * eighthNoteTime, "19");
//     playSound(this.claps, time + 6 * eighthNoteTime);

//     // Play the hi-hat every eighthh note.
//     for (var i = 0; i < 8; ++i) {
//       playSound(this.hihat, time + i * eighthNoteTime);
//     }
//   }
// };

var panel = document.getElementById("wx-uipanel");

// a simple drum sampler with compressor, reverb, and delay
var kd1 = new WX.Sampler({ source:"http://sep800.mine.nu/files/sounds/kickdoor.wav" }),
    // sd = new WX.Sampler({ source:"claps.wav" }),
    // hh = new WX.Sampler({ source:"hihat.wav" }),
    comp = new WX.Comp({ threshold:1.0, ratio:2.0, gain:2.0 });
    // lpf = new WX.LPF(),
    // td = new WX.TwinDelay({
    //     delayTimeLeft: 0.01,
    //     delayTimeRight: 0,
    //     feedbackLeft: 0,
    //     feedbackRight: 0,
    //     crosstalk: 0.1,
    //     mix: 0.5 });
    // adsr = new WX.ADSR({ a:0.2, d:0.4, s:0.5, r:1.5});

// patching one-liner
WX.link(kd1, comp, WX.DAC);
// WX.link(sd, td, lpf, comp, WX.DAC);
// WX.link(hh, td, lpf, comp, WX.DAC);
// kd1.to(adsr).to(WX.DAC);
// additional connection
// sd.to(filt).to(comp);
// hh.to(filt).to(comp);
// summing 2 KDs for solid bottom
kd1.gain = 0.5;

// visualization from compressor
var canvas = document.getElementById("wx-waveform");
var context2D = canvas.getContext("2d");
var waveform = new WX.Waveform({ context:context2D });
// a bit of styling
context2D.strokeStyle = "#dd524c";
context2D.lineWidth = 1;
// draw audio stream from compressor
// lpf.to(waveform);
comp.to(waveform);

(function draw() {
  requestAnimationFrame(draw);
  waveform.draw();
})();

// // visualization from compressor
// var canvas = document.getElementById("wx-waveform2");
// var context2D2 = canvas.getContext('2d');
// var waveform2 = new WX.Waveform({ context:context2D2 });
// // a bit of styling
// context2D.strokeStyle = "#ea95ed";
// context2D.lineWidth = 1;
// // draw audio stream from compressor

// comp.to(waveform2);

// (function draw() {
//   requestAnimationFrame(draw);
//   waveform2.draw();
// })();


// GUI: sliders and knobs
  // var panel = document.getElementById("wx-uipanel");

  // var s1 = new WX.UISliderH({ 
  //   targetDiv:panel, label:"Frequency", 
  //   x:10, y:500, offset:60, scale:1000, value:440 
  // });
  // var s2 = new WX.UISliderH({ 
  //   targetDiv:panel, label:"Gain", 
  //   x:10, y:550, value: 0.3 
  // });
  // var lpfilter = new WX.UIKnob({ 
  //   targetDiv:panel, label:"Filter", 
  //   x:250, y:485, offset: 0.001, scale: 2500, value: 0
  // });
  // var twinD = new WX.UIKnob({ 
  //   targetDiv:panel, label:"Twin Delay", 
  //   x:330, y:485, offset:0.001, scale: 5, value: 0
  // });
  // var ks = new WX.UIKnob({ 
  //   targetDiv:panel, label:"Sustain", 
  //   x:410, y:485, value: 0.5 
  // });
  // var kr = new WX.UIKnob({ 
  //   targetDiv:panel, label:"Release", 
  //   x:490, y:485, offset:0.01, scale:2.0, value: 1.5
  // });

  // mapping GUI components to parameter (temporary solution for r5)
  // s1.target = kd1.filt.frequency;
  // lpfilter.setTargetValue(lpf, "cutoff");
  // twinD.setTargetValue(td, "delayTimeRight");
  // ks.setTargetValue(adsr, "s");
  // kr.setTargetValue(adsr, "r");

  //   // shoot
  // function shoot(next, i) {
  //   filt.noteOn(next);
  //   filt.noteOff(next + 2.0);
  // }

// // visualization driver
// (function draw() {
//   requestAnimationFrame(draw);
//   waveform.draw();
// })();

// key input handling
document.body.onkeydown = function(event){
  event.preventDefault(); 
  switch(event.which) {
    // noteOn with pitches (60 is default base pitch)
    case 90:  
      kd1.noteOn(55); 
      break;
    case 16:
      sd.noteOn(67);  
      break;
    case 191:
      hh.noteOn(67);  
      break;
  }
}

});