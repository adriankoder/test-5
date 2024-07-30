import { teamswitshFunction } from "./js/teamswitshtoggle.js";
import { teamswitshBUTTON } from "./js/KNAPP.JS";

const TryllingID = document.getElementById("TryllingID");

let menyknapper = document.getElementsByClassName("menyvalg");
let bildeSomByttes = document.getElementById("andini_med_kanin");
let kontaktInfo = document.getElementById("kontaktinfo");

for (let i = 0; i < menyknapper.length; i++) {
  menyknapper[i].addEventListener("mouseover", (e) => {
    if (e.target.id === "Hovedside") {
      //HOVEDSIDEKNAPP
      bildeSomByttes.src = "./asset/andini-med-kanin.jpg";
      TryllingID.innerHTML = `
          <h2>Hovedside</h2>
          <p>Bor du i Bergen eller omegn og skal feire bursdag, holde firmafest,
          lage til juletrefest eller andre barnearrangement Jeg har drevet med
          Sett prikken over i-en med et fortryllende barne- og familieshow.</p>
          `;
    }

    if (e.target.id === "Trylling") {
      //TRYLLINGKNAPP
      bildeSomByttes.src = "/asset/andini-med-kanin.jpg";
      bildeSomByttes.style.opacity = 0;
      TryllingID.innerHTML = `
          <h2>Trylleshow</h2>
          <p>Trylleshowene mine varer ca. 30-40 minutter, og inneholder mye humor
          og gimmicks der barna sitter igjen med en opplevelse av at det var de
          som tryllet. Jeg aktiviserer dem mye, bruker dem som assistenter og
          til å rope trylleord etc. Alle som hjelper til får ballongdyr, og om
          ønskelig kan alle barna få hvert sitt, etter showet. Showets klimaks
          er fremtrylling av en sprell levende hvit kanin, og den får barna
          klappe. Etter showet er det veldig populært med ballongdyrbretting til
          alle barna, gjerne i kombinasjon med at alle får klappe Pelle kanin
          og/eller trylleduene Trylleliten og Spirrevippen. Jeg bretter ca 50-60
          ballonger pr halvtime. Ved behov, medbringer jeg eget trådløst
          mini-micanlegg</p>
          `;
    } else {
      bildeSomByttes.style.opacity = 1;
    }

    if (e.target.id === "Balonggjøgling") {
      //GJØGLINGKNAPP
      bildeSomByttes.src = "./asset/ballonggj.jpg";
      TryllingID.innerHTML = `
          <h2>Ballonggjøgling</h2>
          <p>Jeg har drevet med barneunderholdning siden 1994, da jeg som 14-åring
          vant min første lokale talentiade. Siden den gang er tryllingen blitt
          en del av meg, en livsstil som jeg aldri kan slutte med</p>
          `;
    }

    if (e.target.id === "Sukkerspinn") {
      //SUKKERSPINNKNAPP
      bildeSomByttes.src = "./asset/sukkerspinn (1).bmp";
      TryllingID.innerHTML = `
          <h2>Sukkerspinnmaskin</h2>
          <p>Da jeg var liten var sukkerspinn noe av det beste og mest
          stemningsskapende jeg visste. Jeg har derfor anskaffet meg en meget
          produksjonseffektiv og solid maskin som jeg leier ut i kombinasjon med
          mine opptredener. Sukkerspinn er en original og populær erstatning for
          den tradisjonelle godteposen. Til større arrangementer, kan salg av
          sukkerspinn i forkant av min opptreden også være meget innbringende
          for arrangøren, og kan i praksis regnes som avslag i prisen for showet
          jeg leverer. Leveres komplett med maskin, rosa sukkermix, pinner og
          lynkurs i betjening.</p>
          `;
    }

    if (e.target.id === "Kontakt") {
      //KONTAKTKNAPP
      bildeSomByttes.style.display = "none";
      TryllingID.innerHTML = ``;

      const num1 = "neren";
      const num2 = "anders";
      const num3 = "@";
      const num4 = "try";
      const num5 = "kunst";
      const num6 = "lle";
      const num7 = ".no";
      const kontakt = "kontakt";
      const tegn = ":";
      const mellomroim = " ";
      const forBestiling =
        "For bestilling, forespørsler eller annen informasjon kan jeg kontaktes på";
      const tlf = "tlf nmr +47 40834567";
      // Kombinerer strenger
      const combined =
        kontakt +
        tegn +
        mellomroim +
        num2 +
        num3 +
        num4 +
        num6 +
        num5 +
        num1 +
        num7 +
        mellomroim +
        forBestiling +
        mellomroim +
        tlf;

      kontaktInfo.innerHTML = combined;
    } else {
      bildeSomByttes.style.display = "block";
      kontaktInfo.innerHTML = "";
    }
  });
}

// Setter display-stil på de ulike elementene
// andini_med_kanin.style.opacity = 1;
// pElement.style.display = "none";
// iframe.style.display = "Block";
// // KontaktIfo.style.display = "none";
// KontaktConteiner.style.display = "none"; // Sjekk om dette er korrekt ID
// telefon.style.display = "none";
// TrylleshowID.style.display = "none";
// TryllingID.style.display = "none";
// ballonggjimgid.style.display = "none"; // Endret fra ballonggjimg til ballonggjimgid
// Sukkerspinnmaskinp.style.display = "none";
// Ballonggjøgling.style.display = "none";
// Ballonggjøglingh2.style.display = "none";
// Sukkerspinnmaskin.style.display = "none";

// footer.style.display = "block";
// Bor_du_i_Bergen.style.display = "block";
// hvor_lenge_har_holt_poID.style.display = "block";

// Lytte etter klikk på hamburgermeny-knappen
const hamburgerimg = document.getElementById("hamburgermeny");
// console.log(hamburgerimg);

hamburgerimg.addEventListener("click", function () {
  hamburgertoggle("active", "hidden");
  function hamburgertoggle(active, hidden) {
    //get  a element from html
    const ul = document.getElementById("buttondiv");
    // console.log(ul)
    //set up a if/else statment to check wat
    if (ul.classList.contains(active)) {
      ul.classList.remove(active);
      ul.classList.add(hidden);
      console.log("active");
    } else if (ul.classList.contains(hidden)) {
      ul.classList.remove(hidden);
      ul.classList.add(active);
      console.log("hidden");
    } else {
      console.log("somting is wrong");
    }
  }
});
const teamSwitch = document.getElementById("teamSwitch");

teamSwitch.addEventListener("click", function () {
  teamswitshFunction("sun", "moon");
});

const Hovedside = document.getElementById("Hovedside");
Hovedside.addEventListener("click", function () {
  //teamswitshBUTTON("buttonClass", "HovedsideButtonClass");
});
// Import av funksjoner

// // Kall på funksjoner
// BalonggjøglingFunction();
// hovedsideKnappfunction();
// kontaktKnappfunction();
// sukkerspinnKnappFunction();
// tryllingKnappFunction();
// teamswitshFunction();
// teamswitshBUTTON();
// hamburgertoggle();
//test();
