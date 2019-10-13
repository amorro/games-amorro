let lGames = [];

function printTableGames(lGames) {
  let bodyGameList = document.getElementById("tableJocs")
  bodyGameList.innerHTML = "";
  lGames.forEach((e) => {
    let currentGame = e;
    bodyGameList.innerHTML += `
                <tr>
                  <td scope="row">${currentGame.id}</td>
                  <td>${currentGame.titol}</td>
                  <td>${currentGame.data}</td>
                  <td>${currentGame.pegi}</td>
                  <td>${currentGame.empresa}</td>
                  <td>${currentGame.genere}</td>
                </tr>
                `;
  })
}

$(function() {
  lGames.push(new Game(1, "League of legends", "2009", "12", "Riot Games", "MOBA"));
  lGames.push(new Game(2, "GTA V", "2013", "18", "Rockstar Games", "Acció"))

  printTableGames(lGames);
});

function validaIgual(titol) {
  for (i = 0; i < lGames.length; i++) {
    let game = lGames[i]
    if (game.titol == titol) {
      return true;
    }
  }
  return false;
}

function message(msg) {
  $("#txt-message").html(msg);
  $("#modal-message").modal("show");
}

function validateForm() {

  let titol = document.getElementById("titol").value;
  let data = document.getElementById("data").value;
  let empresa = document.getElementById("empresa").value;
  let genere = document.getElementById("genere").value;
  let pegi = document.getElementById("pegi").options[document.getElementById("pegi").selectedIndex].value;
  //let pegi = pe.options[pe.selectedIndex].value;

  if (titol == "" || data == "" || empresa == "" || genere == "" || pegi == "" || data < "1980" || data > "2099") {
    message("Tots els camps son obligatoris.");
    return false;
  } else {
    if (!validaIgual(titol)) {
      lGames.push(new Game(lGames.length + 1, titol, data, pegi, empresa, genere));
      printTableGames(lGames);
      message("Nou joc afegit.");
      document.form.reset();
    } else {
      message("Aquest joc ja esta registrat.");
    }
  }
}
