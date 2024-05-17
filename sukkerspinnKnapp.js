function sukkerspinnKnappFunction (){

const sukkerspinnKnapp = document.getElementById("Sukkerspinn");
const andini_med_kaninid = document.getElementById('andini_med_kaninid');
const Bor_du_i_Bergen = document.getElementById("Bor_du_i_Bergen?")
const footer = document.getElementById("føler_meg_privilegertP")
const TrylleshowID = document.getElementById("TrylleshowID")
// const element2 = document.getElementById("iframe")
const telefon = document.getElementById("littImfo")
const iframe = document.getElementById ("iframe")
const pElement = document.getElementById ("pElement")
const Ballonggjøgling = document.getElementById("Ballonggjøglingp")
const SukkerspinnmaskinIDp = document.getElementById("SukkerspinnmaskinIDp")
const SukkerspinnmaskinH2 =document.getElementById("SukkerspinnmaskinH2")
const Ballonggjøglingh2 = document.getElementById("Ballonggjøglingh2")
const Sukkerspinnmaskin = document.getElementById("Sukkerspinnmaskin")
const ballonggjimgid = document.getElementById("ballonggjimgid")
if(sukkerspinnKnapp){
    sukkerspinnKnapp.addEventListener("click", function(){
        
        Ballonggjøgling.style.display = "none"
        TrylleshowID.style.display = "none"
        Bor_du_i_Bergen.style.display = "none"
        KontaktConteiner.style.display = "none"
        Ballonggjøglingh2.style.display = "none"
        ballonggjimgid.style.display = "none"
        // //KontaktIfo2.style.display = "none"
        footer.style.display = "none"
        hvor_lenge_har_holt_poID.style.display = "none"
        andini_med_kaninid.style.display ="none"
        iframe.style.opacity = 0
        telefon.style.display ="none"
        pElement.style.display ="none"
        SukkerspinnmaskinH2.style.display = "none"
        SukkerspinnmaskinIDp.style.display = "block"
        Sukkerspinnmaskin.style.display = "block"

    })
}
    
}

 export {sukkerspinnKnappFunction}