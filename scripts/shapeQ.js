var group1 = ['resources/full-moon.png', 'resources/oval.png', 'resources/rectangle.png'];
var group2 = ['resources/star.png', 'resources/stop.png', 'resources/triangle.png'];
var group3 = ['resources/parallelogram.png', 'resources/priority.png'];

var items = ["oval", "circle", "rectangle", "triangle", "star", "priority", "square", "parallelogram"];

var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var nameOfShape = document.getElementById("nameOfShape");
var play = document.getElementById("play");
var trying = document.createElement("img");
var imgDiv = document.getElementById("img");

// imgDiv.appendChild(trying);

play.addEventListener("click", startGame)

// function startGame() {

//      one.style.display = 'inline';
//      two.style.display = 'inline';
//      three.style.display = 'inline';
//      trying.remove();

//      var num1 = Math.floor(Math.random() * (group1.length));
//      var num2 = Math.floor(Math.random() * (group2.length));
//      var num3 = Math.floor(Math.random() * (group3.length));
//      //     var num4 = Math.floor(Math.random() * (items.length));


//      //   nameOfShape.textContent = items[num4];
//      if (nameOfShape.textContent === 'oval') {

//           one.src = group1[1]
//           two.src = group2[num2];
//           three.src = group3[num3];
//      } else if (nameOfShape.textContent === 'circle') {
//           one.src = group1[0];
//           two.src = group2[num2];
//           three.src = group3[num3];
//      } else if (nameOfShape.textContent === 'rectangle') {
//           one.src = group1[2];
//           two.src = group2[num2];
//           three.src = group3[num3];
//      } else if (nameOfShape.textContent === 'triangle') {
//           one.src = group1[num1];
//           two.src = group2[2];
//           three.src = group3[num3];
//      } else if (nameOfShape.textContent === 'star') {
//           one.src = group1[num1];
//           two.src = group2[0];
//           three.src = group3[num3];
//      } else if (nameOfShape.textContent === 'priority') {
//           one.src = group1[num1];
//           two.src = group2[num2];
//           three.src = group3[1];
//      } else if (nameOfShape.textContent === 'parallelogram') {
//           one.src = group1[num1];
//           two.src = group2[num2];
//           three.src = group3[0];
//      } else if (nameOfShape.textContent === 'square') {
//           one.src = group1[num1];
//           two.src = group2[1];
//           three.src = group3[num3];
//      }

// }

function startGame() {
     one.style.display = 'inline';
     two.style.display = 'inline';
     three.style.display = 'inline';
     trying.remove();
      var num1 = Math.floor(Math.random() * (group1.length));
     var num2 = Math.floor(Math.random() * (group2.length));
     var num3 = Math.floor(Math.random() * (group3.length));
     var num4 = Math.floor(Math.random() * (items.length));
     nameOfShape.textContent = items[num4];
     if (nameOfShape.textContent === 'oval') {
          one.src = group1[1]
          two.src = group2[num2];
          three.src = group3[num3];
     } else if (nameOfShape.textContent === 'circle') {
          one.src = group1[0];
          two.src = group2[num2];
          three.src = group3[num3];
     } else if (nameOfShape.textContent === 'rectangle') {
          one.src = group1[2];
          two.src = group2[num2];
          three.src = group3[num3];
     } else if (nameOfShape.textContent === 'triangle') {
          one.src = group1[num1];
          two.src = group2[2];
          three.src = group3[num3];
     } else if (nameOfShape.textContent === 'star') {
          one.src = group1[num1];
          two.src = group2[0];
          three.src = group3[num3];
     } else if (nameOfShape.textContent === 'priority') {
          one.src = group1[num1];
          two.src = group2[num2];
          three.src = group3[1];
     } else if (nameOfShape.textContent === 'parallelogram') {
          one.src = group1[num1];
          two.src = group2[num2];
          three.src = group3[0];
     } else if (nameOfShape.textContent === 'square') {
          one.src = group1[num1];
          two.src = group2[1];
          three.src = group3[num3];
     }
}
function check(value) {
     //http://localhost/kids/resources/11.jpg
     if (nameOfShape.textContent === 'circle' && value.src == "http://localhost/kids/" + group1[0]) {

          if (one.src == "http://localhost/kids/" + group1[0]) {
               two.style.display = "none";
               three.style.display = "none";
               playSoundTry("spongebob-yippee-by-voicemod.mp3");
               imgDiv.appendChild(trying);
               trying.src = "https://em-content.zobj.net/source/animated-noto-color-emoji/356/clapping-hands_1f44f.gif";

          } else if (two.src == "http://localhost/kids/" + group1[0]) {
               one.style.display = "none";
               three.style.display = "none";
               playSoundTry("spongebob-yippee-by-voicemod.mp3");
               imgDiv.appendChild(trying);
               trying.src = "https://em-content.zobj.net/source/animated-noto-color-emoji/356/clapping-hands_1f44f.gif";

          } else {
               one.style.display = "none";
               two.style.display = "none";
               playSoundTry("spongebob-yippee-by-voicemod.mp3");
               imgDiv.appendChild(trying);
               trying.src = "https://em-content.zobj.net/source/animated-noto-color-emoji/356/clapping-hands_1f44f.gif";


          }

     } else if (nameOfShape.textContent === 'oval' && value.src == "http://localhost/kids/" + group1[1]) {

          if (one.src == "http://localhost/kids/" + group1[1]) {
               two.style.display = "none";
               three.style.display = "none";
               playSoundTry("spongebob-yippee-by-voicemod.mp3");
               imgDiv.appendChild(trying);
               trying.src = "https://em-content.zobj.net/source/animated-noto-color-emoji/356/clapping-hands_1f44f.gif";

          } else if (two.src == "http://localhost/kids/" + group1[1]) {
               one.style.display = "none";
               three.style.display = "none";
               playSoundTry("spongebob-yippee-by-voicemod.mp3");
               imgDiv.appendChild(trying);
               trying.src = "https://em-content.zobj.net/source/animated-noto-color-emoji/356/clapping-hands_1f44f.gif";

          } else {
               one.style.display = "none";
               two.style.display = "none";
               playSoundTry("spongebob-yippee-by-voicemod.mp3");
               imgDiv.appendChild(trying);
               trying.src = "https://em-content.zobj.net/source/animated-noto-color-emoji/356/clapping-hands_1f44f.gif";

          }

     } else if (nameOfShape.textContent === 'rectangle' && value.src == "http://localhost/kids/" + group1[2]) {

          if (one.src == "http://localhost/kids/" + group1[2]) {
               two.style.display = "none";
               three.style.display = "none";
               playSoundTry("spongebob-yippee-by-voicemod.mp3");
               imgDiv.appendChild(trying);
               trying.src = "https://em-content.zobj.net/source/animated-noto-color-emoji/356/clapping-hands_1f44f.gif";

          } else if (two.src == "http://localhost/kids/" + group1[2]) {
               one.style.display = "none";
               three.style.display = "none";
               playSoundTry("spongebob-yippee-by-voicemod.mp3");
               imgDiv.appendChild(trying);
               trying.src = "https://em-content.zobj.net/source/animated-noto-color-emoji/356/clapping-hands_1f44f.gif";


          } else {
               one.style.display = "none";
               two.style.display = "none";
               playSoundTry("spongebob-yippee-by-voicemod.mp3");
               imgDiv.appendChild(trying);
               trying.src = "https://em-content.zobj.net/source/animated-noto-color-emoji/356/clapping-hands_1f44f.gif";

          }

     } else if (nameOfShape.textContent === 'triangle' && value.src == "http://localhost/kids/" + group2[2]) {

          if (one.src == "http://localhost/kids/" + group2[2]) {
               two.style.display = "none";
               three.style.display = "none";
               playSoundTry("spongebob-yippee-by-voicemod.mp3");
               imgDiv.appendChild(trying);
               trying.src = "https://em-content.zobj.net/source/animated-noto-color-emoji/356/clapping-hands_1f44f.gif";

          } else if (two.src == "http://localhost/kids/" + group2[2]) {
               one.style.display = "none";
               three.style.display = "none";
               playSoundTry("spongebob-yippee-by-voicemod.mp3");
               imgDiv.appendChild(trying);
               trying.src = "https://em-content.zobj.net/source/animated-noto-color-emoji/356/clapping-hands_1f44f.gif";

          } else {
               one.style.display = "none";
               two.style.display = "none";
               playSoundTry("spongebob-yippee-by-voicemod.mp3");
               imgDiv.appendChild(trying);
               trying.src = "https://em-content.zobj.net/source/animated-noto-color-emoji/356/clapping-hands_1f44f.gif";


          }

     } else if (nameOfShape.textContent === 'star' && value.src == "http://localhost/kids/" + group2[0]) {

          if (one.src == "http://localhost/kids/" + group2[0]) {
               two.style.display = "none";
               three.style.display = "none";
               playSoundTry("spongebob-yippee-by-voicemod.mp3");
               imgDiv.appendChild(trying);
               trying.src = "https://em-content.zobj.net/source/animated-noto-color-emoji/356/clapping-hands_1f44f.gif";

          } else if (two.src == "http://localhost/kids/" + group2[0]) {
               one.style.display = "none";
               three.style.display = "none";
               playSoundTry("spongebob-yippee-by-voicemod.mp3");
               imgDiv.appendChild(trying);
               trying.src = "https://em-content.zobj.net/source/animated-noto-color-emoji/356/clapping-hands_1f44f.gif";

          } else {
               one.style.display = "none";
               two.style.display = "none";
               playSoundTry("spongebob-yippee-by-voicemod.mp3");
               imgDiv.appendChild(trying);
               trying.src = "https://em-content.zobj.net/source/animated-noto-color-emoji/356/clapping-hands_1f44f.gif";

          }

     } else if (nameOfShape.textContent === 'square' && value.src == "http://localhost/kids/" + group2[1]) {

          if (one.src == "http://localhost/kids/" + group2[1]) {
               two.style.display = "none";
               three.style.display = "none";
               playSoundTry("spongebob-yippee-by-voicemod.mp3");
               imgDiv.appendChild(trying);
               trying.src = "https://em-content.zobj.net/source/animated-noto-color-emoji/356/clapping-hands_1f44f.gif";

          } else if (two.src == "http://localhost/kids/" + group2[1]) {
               one.style.display = "none";
               three.style.display = "none";
               playSoundTry("spongebob-yippee-by-voicemod.mp3");
               imgDiv.appendChild(trying);
               trying.src = "https://em-content.zobj.net/source/animated-noto-color-emoji/356/clapping-hands_1f44f.gif";

          } else {
               one.style.display = "none";
               two.style.display = "none";
               playSoundTry("spongebob-yippee-by-voicemod.mp3");
               imgDiv.appendChild(trying);
               trying.src = "https://em-content.zobj.net/source/animated-noto-color-emoji/356/clapping-hands_1f44f.gif";


          }

     } else if (nameOfShape.textContent === 'parallelogram' && value.src == "http://localhost/kids/" + group3[0]) {

          if (one.src == "http://localhost/kids/" + group3[0]) {
               two.style.display = "none";
               three.style.display = "none";
               playSoundTry("spongebob-yippee-by-voicemod.mp3");
               imgDiv.appendChild(trying);
               trying.src = "https://em-content.zobj.net/source/animated-noto-color-emoji/356/clapping-hands_1f44f.gif";

          } else if (two.src == "http://localhost/kids/" + group3[0]) {
               one.style.display = "none";
               three.style.display = "none";
               playSoundTry("spongebob-yippee-by-voicemod.mp3");
               imgDiv.appendChild(trying);
               trying.src = "https://em-content.zobj.net/source/animated-noto-color-emoji/356/clapping-hands_1f44f.gif";

          } else {
               one.style.display = "none";
               two.style.display = "none";
               playSoundTry("spongebob-yippee-by-voicemod.mp3");
               imgDiv.appendChild(trying);
               trying.src = "https://em-content.zobj.net/source/animated-noto-color-emoji/356/clapping-hands_1f44f.gif";


          }

     } else if (nameOfShape.textContent === 'priority' && value.src == "http://localhost/kids/" + group3[1]) {

          if (one.src == "http://localhost/kids/" + group3[1]) {
               two.style.display = "none";
               three.style.display = "none";
               playSoundTry("spongebob-yippee-by-voicemod.mp3");
               imgDiv.appendChild(trying);
               trying.src = "https://em-content.zobj.net/source/animated-noto-color-emoji/356/clapping-hands_1f44f.gif";

          } else if (two.src == "http://localhost/kids/" + group3[1]) {
               one.style.display = "none";
               three.style.display = "none";
               playSoundTry("spongebob-yippee-by-voicemod.mp3");
               imgDiv.appendChild(trying);
               trying.src = "https://em-content.zobj.net/source/animated-noto-color-emoji/356/clapping-hands_1f44f.gif";

          } else if (three.src == "http://localhost/kids/" + group3[1]) {
               one.style.display = "none";
               two.style.display = "none";
               playSoundTry("spongebob-yippee-by-voicemod.mp3");
               imgDiv.appendChild(trying);
               trying.src = "https://em-content.zobj.net/source/animated-noto-color-emoji/356/clapping-hands_1f44f.gif";

          }



     } else {
          playSoundTry("spongebob-no-by-voicemod.mp3");
          imgDiv.appendChild(trying);
          trying.src = "https://icon-library.com/images/try-again-icon/try-again-icon-3.jpg";
     }


}



function playSoundTry(sound) {
     let audio = new Audio(sound);
     audio.play();
     // imgDiv.appendChild(trying);
     // trying.src = "https://icon-library.com/images/try-again-icon/try-again-icon-3.jpg";

}