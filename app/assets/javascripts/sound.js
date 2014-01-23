$(document).ready(function() {

  for(var i=1; i<17; i++) {
    $('#pad' + i).droppable({
      accept: "#ordered > div",
      hoverClass: "ui-state-active",
      drop: function(event, ui) {
        event.preventDefault();
        ui.draggable.addClass("dropped_sound");

        // finds the audio element
        var theSound = ui.draggable.context.childNodes[11].childNodes[3];

        var soundArray = [];
        soundArray.push(theSound);
        // var soundName = ui.draggable.context.
        console.log(ui.draggable);

        // add sounds that are selected to the sample board
        for (var s = 0; s<soundArray.length; s++) {
          this.appendChild(soundArray[s]);
        }
        console.log('dropped!');
      }
    })
  };

  document.body.onkeydown = function(event) {
    event.preventDefault();

    function changeColor(pad_num) {
      // define original color
      var currentColor = document.getElementById("pad1").style.backgroundColor;
      // change color and set it back to og color after a little bit
      document.getElementById(pad_num).style.background="#ecb842";
      setTimeout(function () {
        document.getElementById(pad_num).style.backgroundColor = currentColor
      }, 100);
    }

    switch(event.which) {
      // q
      case 81:
        var sound = document.getElementById("pad1").childNodes[1];
        sound.load();
        sound.play();
        changeColor("pad1");              
      break;
      // w
      case 87:
        var sound = document.getElementById("pad2").childNodes[1];
        sound.load();
        sound.play();
        changeColor("pad2");
      break;
      // e
      case 69:
        var sound = document.getElementById("pad3").childNodes[1];
        sound.load();
        sound.play();
        changeColor("pad3");
      break;
      // r
      case 82:
        var sound = document.getElementById("pad4").childNodes[1];
        sound.load();
        sound.play();
        changeColor("pad4");
      break;
      // p
      case 80:
        var sound = document.getElementById("pad5").childNodes[1];
        sound.load();
        sound.play();
        changeColor("pad5");
      break;
      // o
      case 79:
        var sound = document.getElementById("pad6").childNodes[1];
        sound.load();
        sound.play();
        changeColor("pad6");
      break;
      // i
      case 73:
        var sound = document.getElementById("pad7").childNodes[1];
        sound.load();
        sound.play();
        changeColor("pad7");
      break;
      // u
      case 85:
        var sound = document.getElementById("pad8").childNodes[1];
        sound.load();
        sound.play();
        changeColor("pad8");
      break;

      // ============================

      // a
      case 65:
        var sound = document.getElementById("pad9").childNodes[1];
        sound.load();
        sound.play();
        changeColor("pad9");
      break;
      // s
      case 83:
        var sound = document.getElementById("pad10").childNodes[1];
        sound.load();
        sound.play();
        changeColor("pad10");
      break;
      // d
      case 68:
        var sound = document.getElementById("pad11").childNodes[1];
        sound.load();
        sound.play();
        changeColor("pad11");
      break;
      // f
      case 70:
        var sound = document.getElementById("pad12").childNodes[1];
        sound.load();
        sound.play();
        changeColor("pad12");
      break;
      // ;
      case 186:
        var sound = document.getElementById("pad16").childNodes[1];
        sound.load();
        sound.play();
        changeColor("pad16");
      break;
      // s
      case 76:
        var sound = document.getElementById("pad15").childNodes[1];
        sound.load();
        sound.play();
        changeColor("pad15");
      break;
      // k
      case 75:
        var sound = document.getElementById("pad14").childNodes[1];
        sound.load();
        sound.play();
        changeColor("pad14");          
      break;
      // j
      case 74:
        var sound = document.getElementById("pad13").childNodes[1];
        sound.load();
        sound.play();
        changeColor("pad13");
      break;
    };
  };

  // }

  

  var panel = document.getElementById("wx-uipanel");

  // a simple drum sampler with compressor, reverb, and delay
  var workit   = new WX.Sampler({ source:"assets/1workit.mp3" }),
      makeit   = new WX.Sampler({ source:"assets/2makeit.mp3" }),
      doit     = new WX.Sampler({ source:"assets/3doit.mp3" }),
      makesus  = new WX.Sampler({ source:"assets/4makesus.mp3" }),
      harder   = new WX.Sampler({ source:"assets/5harder.mp3" }),
      better   = new WX.Sampler({ source:"assets/6better.mp3" }),
      faster   = new WX.Sampler({ source:"assets/7faster.mp3" }),
      stronger = new WX.Sampler({ source:"assets/8stronger.mp3" }),
      morethan = new WX.Sampler({ source:"assets/9morethan.mp3" }),
      our      = new WX.Sampler({ source:"assets/10our.mp3" }),
      power    = new WX.Sampler({ source:"assets/11power.mp3" }),
      never    = new WX.Sampler({ source:"assets/12never.mp3" }),
      ever     = new WX.Sampler({ source:"assets/13ever.mp3" }),
      after    = new WX.Sampler({ source:"assets/14after.mp3" }),
      workis   = new WX.Sampler({ source:"assets/15workis.mp3" }),
      over     = new WX.Sampler({ source:"assets/16over.mp3" }),
      comp     = new WX.Comp({ threshold:1.0, ratio:2.0, gain:2.0 });

  // patching one-liner
  WX.link(workit, comp, WX.DAC);
  WX.link(makeit, comp, WX.DAC);
  WX.link(doit, comp, WX.DAC);
  WX.link(makesus, comp, WX.DAC);
  WX.link(harder, comp, WX.DAC);
  WX.link(harder, comp, WX.DAC);
  WX.link(better, comp, WX.DAC);
  WX.link(faster, comp, WX.DAC);
  WX.link(stronger, comp, WX.DAC);
  WX.link(morethan, comp, WX.DAC);
  WX.link(our, comp, WX.DAC);
  WX.link(power, comp, WX.DAC);
  WX.link(never, comp, WX.DAC);
  WX.link(ever, comp, WX.DAC);
  WX.link(after, comp, WX.DAC);
  WX.link(workis, comp, WX.DAC);
  WX.link(over, comp, WX.DAC);
  // WX.link(sd, td, lpf, comp, WX.DAC);  
  // WX.link(hh, td, lpf, comp, WX.DAC);
  // workit.to(adsr).to(WX.DAC);
  // additional connection
  // sd.to(filt).to(comp);
  // hh.to(filt).to(comp);
  // summing 2 KDs for solid bottom
  workit  .gain = 0.3;
  makeit  .gain = 0.3;
  doit    .gain = 0.3;
  makesus .gain = 0.3;
  harder  .gain = 0.3;
  better  .gain = 0.3;
  faster  .gain = 0.3;
  stronger.gain = 0.3;
  morethan.gain = 0.3;
  our     .gain = 0.3;
  power   .gain = 0.3;
  never   .gain = 0.3;
  ever    .gain = 0.3;
  after   .gain = 0.3;
  workis  .gain = 0.3;
  over    .gain = 0.3;

  // visualization from compressor
  var canvas = document.getElementById("wx-waveform");
  var context2D = canvas.getContext("2d");
  var waveform = new WX.Spectrum({ context:context2D });
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

  var playbtn = $("#play_song_btn_wrapper");
  var stopbtn = $("#stop_song_btn_wrapper");

  stopbtn.hide();

  $('#song_selection').change(function(event) {
    event.preventDefault();

    

    if($(this).val() == "1") {

      $('#playback_controls').append('<%= audio_tag "trunc_HBFS.mp3", id: "daft_punk" %>');

      $("#play_song_btn_wrapper").click(function(event) {
        event.preventDefault();
        $("#daft_punk")[0].play();
        $("#play_song_btn_wrapper").hide();
        $("#stop_song_btn_wrapper").show();
        return false;
      })

      $("#stop_song_btn_wrapper").click(function(event) {
        event.preventDefault();
        $("#daft_punk")[0].pause();
        $("#play_song_btn_wrapper").show();
        $("#stop_song_btn_wrapper").hide();
        return false;
      })

      document.body.onkeydown = function(event) {
        event.preventDefault();
        
        function changeColor(pad_num) {
          // define original color
          var currentColor = document.getElementById("pad1").style.backgroundColor;
          // change color and set it back to og color after a little bit
          document.getElementById(pad_num).style.background="#ecb842";
          setTimeout(function () {
            document.getElementById(pad_num).style.backgroundColor = currentColor
          }, 100);
        }

        switch(event.which) {
          // q
          case 81:
            workit.noteOn();
            changeColor("pad1");              
          break;
          // w
          case 87:
            makeit.noteOn();
            changeColor("pad2");
          break;
          // e
          case 69:
            doit.noteOn();
            changeColor("pad3");
          break;
          // r
          case 82:
            makesus.noteOn();
            changeColor("pad4");
          break;
          // p
          case 80:
            harder.noteOn();
            changeColor("pad5");
          break;
          // o
          case 79:
            better.noteOn();
            changeColor("pad6");
          break;
          // i
          case 73:
            faster.noteOn();
            changeColor("pad7");
          break;
          // u
          case 85:
            stronger.noteOn();
            changeColor("pad8");
          break;

          // ============================

          // a
          case 65:
            morethan.noteOn();
            changeColor("pad9");
          break;
          // s
          case 83:
            our.noteOn();
            changeColor("pad10");
          break;
          // d
          case 68:
            power.noteOn();
            changeColor("pad11");
          break;
          // f
          case 70:
            never.noteOn();
             changeColor("pad12");
          break;
          // ;
          case 186:
            ever.noteOn();
            changeColor("pad16");
          break;
          // s
          case 76:
            after.noteOn();
            changeColor("pad15");
          break;
          // k
          case 75:
            workis.noteOn();
            changeColor("pad14");            
          break;
          // j
          case 74:
            over.noteOn();
            changeColor("pad13");
          break;
        };
      };
    };
  });
});