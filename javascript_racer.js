var move = function(player) {
  var track = document.getElementById(player)
  var trackLength = track.childNodes.length

  if (track.childNodes[0].className === "") {
      track.childNodes[0].className += "active"
    }

  for (var i=0; i<trackLength; i++) {

    if (track.childNodes[trackLength-1].className === "active") {
      alert(player + " won!");
      window.location.reload()
      break;
    }

    if (track.childNodes[i].className === "active") {
      track.childNodes[i].className = "red";
      track.childNodes[i+1].className = "active";
      break;
    }
  }
}

document.addEventListener("keyup", function(event){
  if (event.keyCode === 80) {
    move("player1")
  }
  else if (event.keyCode === 81) {
    move("player2")
  }
  else if (event.keyCode === 66) {
    move("player3")
  }
})


// SET THE NUMBER OF RACERS
var addPlayer = function(callback) {
  var players = document.getElementById("numPlayer").value

  for (var i=1; i<=players; i++) {
    var player = document.createElement("tr")
    player.setAttribute("id","player"+i)
    document.querySelector("#racer_table").appendChild(player)
  }

  callback();
}

// SET THE LENGTH OF THE TRACK
var setTrack = function() {
  var trackLength = document.getElementById("trackLength").value
  var players = document.getElementById("numPlayer").value

  var createTd = function() {
    return document.createElement("td")
  }

  for (var i=0; i<=trackLength; i++) {

    if (players === "1") {
    document.querySelector("#player1").appendChild(createTd())
    }

    else if (players === "2") {
    document.querySelector("#player1").appendChild(createTd())
    document.querySelector("#player2").appendChild(createTd())
    }

    else if (players === "3") {
    document.querySelector("#player1").appendChild(createTd())
    document.querySelector("#player2").appendChild(createTd())
    document.querySelector("#player3").appendChild(createTd())
    }
  }
}

var start_game = function() {
  addPlayer(setTrack);
}

var submit = document.getElementById("submit")
submit.addEventListener("click", start_game)

// var makeTrack = document.getElementById("addTrack")
// makeTrack.addEventListener("click", setTrack)

// var makeRacer = document.getElementById("addPlayer")
// makeRacer.addEventListener("click", addPlayer)

// RESTART BUTTON
// var restart = document.getElementById("restart")
// restart.addEventListener("click", function() {
//   window.location.reload()
// })