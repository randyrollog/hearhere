$(document).ready(function() {

  // add incremental ids to each sound
  $('#ordered div').each(function(i,el){
      el.id = "sound_" + (i+1);
  }); 

 // makes each sound draggable
 for(var i = 1;  i<50; i++) {
   $('#sound_' + i).draggable(
    { revert: "invalid" }
    );
 };

 $(".playback").click(function(e) {
   e.preventDefault();
   // This next line will get the audio element
   // that is adjacent to the link that was clicked.
   var song = $(this).next('audio').get(0);
   song.load();
   song.play();
  });

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

  

  

  

});