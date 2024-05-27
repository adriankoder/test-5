function hovedsideKnappfunction(color,button){

const hovedsideKnapp = document.getElementById("Hovedside");
const KontaktIfo2 = document.getElementById("KontaktIfo")
const TrylleshowID = document.getElementById("TrylleshowID")
const Bor_du_i_Bergen = document.getElementById("Bor_du_i_Bergen?")
const føler_meg_privilegertP = document.getElementById("føler_meg_privilegertP")
const iframe = document.getElementById("iframe")
// const telefon = document.getElementById("littImfo")
const andini_med_kaninid = document.getElementById("andini_med_kaninid");
const Ballonggjøgling = document.getElementById("Ballonggjøglingp")
const SukkerspinnmaskinIDp = document.getElementById("SukkerspinnmaskinIDp")
const TryllingID = document.getElementById("TryllingID")
const ballonggjimgid = document.getElementById("ballonggjimgid")
const Ballonggjøglingh2 = document.getElementById("Ballonggjøglingh2")
const Sukkerspinnmaskin = document.getElementById("Sukkerspinnmaskin")
const kontakt_meg = document.getElementById ("kontakt_meg")
// const pElement = document.getElementById("pElement")

// const Hovedside = document.querySelector("#Hovedside")
if (hovedsideKnapp) {
    hovedsideKnapp.addEventListener("click", function() {
      
        
        iframe.style.opacity = 1;
        // hovedsideKnapp.style.display ="block"
        andini_med_kaninid.style.opacity = 1;
        andini_med_kaninid.style.display ="block"
        kontakt_meg.style.display ="none"
        Bor_du_i_Bergen.style.display = "block"
        hvor_lenge_har_holt_poID.style.display = "block"
        føler_meg_privilegertP.style.display = "block"
        TrylleshowID.style.display = "none";
        // pElement.style.display = "none"
        SukkerspinnmaskinIDp.style.display = "none"
        Sukkerspinnmaskin.style.display = "none"
        Ballonggjøglingh2.style.display = "none"
        // KontaktConteiner.style.display = "none"
        ballonggjimgid.style.display ="none"
        TryllingID.style.display ="none"
        // Sukkerspinnmaskin.style.display = "none"
        Ballonggjøgling.style.display = "none"
        telefon.style.display= "none";
    }
  )}
};

               
        // .style.display = "block" // Gjør elementet usynlig
       
       
        // Sett andre elementer til synlige etter behov
        



export {hovedsideKnappfunction}