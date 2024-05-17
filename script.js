// Få tak i knappelementene
const TrylleshowID = document.getElementById("TrylleshowID");
const telefon = document.getElementById("littImfo");
const KontaktIfo2 = document.getElementById("KontaktIfo");
const balonggjøglingKnapp = document.getElementById("Balonggjøgling");
const hovedsideKnapp = document.getElementById("Hovedside");
const kontaktKnapp = document.getElementById("Kontakt");
const sukkerspinnKnapp = document.getElementById("Sukkerspinn");
const tryllingKnapp = document.getElementById("Trylling");
const Ballonggjøgling = document.getElementById("Ballonggjøglingp");
const Sukkerspinnmaskin = document.getElementById("Sukkerspinnmaskin");
const containeridElement = document.getElementById("containerid");
const andini_med_kaninid = document.getElementById("andini_med_kaninid");
const info = document.getElementById("littImfo");
const iframe = document.getElementById("iframe");
const TryllingID = document.getElementById("TryllingID");
const Bor_du_i_Bergen = document.getElementById("Bor_du_i_Bergen?");
const Ballonggjøglingh2 = document.getElementById("Ballonggjøglingh2");
const Sukkerspinnmaskinp = document.getElementById("SukkerspinnmaskinIDp");
const footer = document.getElementById("føler_meg_privilegertP");
const ballonggjimgid = document.getElementById("ballonggjimgid"); // Riktig ID her
const pElement = document.getElementById("pElement")


// Setter display-stil på de ulike elementene
andini_med_kaninid.style.display = "block";
pElement.style.display = "none"
KontaktIfo2.style.display = "none";
KontaktConteiner.style.display = "none"; // Sjekk om dette er korrekt ID
telefon.style.display = "none";
TrylleshowID.style.display = "none";
TryllingID.style.display = "none";
ballonggjimgid.style.display = "none"; // Endret fra ballonggjimg til ballonggjimgid
Sukkerspinnmaskinp.style.display = "none";
Ballonggjøgling.style.display = "none";
Ballonggjøglingh2.style.display = "none";
Sukkerspinnmaskin.style.display = "none"

footer.style.display = "block";
Bor_du_i_Bergen.style.display = "block";
hvor_lenge_har_holt_poID.style.display = "block";

// Lytte etter klikk på hamburgermeny-knappen
const hamburgerimg = document.querySelector("#hamburgermeny");
console.log(hamburgerimg);

hamburgerimg.addEventListener("click", function(){
    hamburgertoggle("active","hidden");
});
const teamSwitch = document.querySelector("#teamSwitch")

teamSwitch.addEventListener("click", function(){
    teamswitshFunction("sun","moon")

})
// Import av funksjoner
import { tryllingKnappFunction } from "./tryllingKnapp.js";
import { BalonggjøglingFunction } from "./Balonggjøgling.js";
import { hovedsideKnappfunction } from "./hovedsideKnapp.js";
import { kontaktKnappfunction } from "./kontaktKnapp.js";
import { sukkerspinnKnappFunction } from "./sukkerspinnKnapp.js";
import {teamswitshFunction} from "./teamswitshtoggle.js";

// Kall på funksjoner
BalonggjøglingFunction();
hovedsideKnappfunction();
kontaktKnappfunction();
sukkerspinnKnappFunction();
tryllingKnappFunction();
teamswitshFunction();
