function kontaktKnappfunction (){
    const kontaktKnapp = document.getElementById("Kontakt");
const andini_med_kaninid = document.getElementById('andini_med_kaninid');
const footer = document.getElementById("føler_meg_privilegertP")
const TryllingID = document.getElementById("TryllingID")
// const telefon = document.getElementById("littImfo")
const iframe = document.getElementById ("iframe")
const Sukkerspinnmaskin = document.getElementById("Sukkerspinnmaskin")
const kontakt_meg = document.getElementById ("kontakt_meg")
// const pElement = document.getElementById("pElement")
const SUKKER_BALONG_hvor_lenge = document.getElementById ("SUKKER_BALONG_hvor_lenge")

if (kontaktKnapp){
    kontaktKnapp.addEventListener("click", function() {
    // telefon .style.display = "block"
    TryllingID.style.display = "none";
    iframe.style.opacity = 1
    iframe.style.display ="block"
    kontakt_meg.style.display = "block"

    footer.style.display = "none"
    Sukkerspinnmaskin.style.display ="none"
    // Ballonggjøgling.style.display = "none"
    // KontaktConteiner.style.display = "block"
    andini_med_kaninid.style.display = "none"
    SUKKER_BALONG_hvor_lenge.style.display = "none"
   
    const num1 = "neren";
    const num2 = "anders";
    const num3 = "@";
    const num4 = "try";
    const num5 = "kunst";
    const num6 = "lle";
    const num7 = ".no";
    const kontakt = "kontakt"
    const tegn = ":"
    const mellomroim = " "
    // Kombinerer strenger
    const combined = kontakt+tegn+mellomroim+num2 + num3 + num4 + num6 + num5 + num1 + num7;
    
    // Oppretter et nytt <p> element
    // const pElement = document.createElement("p");
    
    // Setter innholdet til den kombinerte strengen
    pElement.textContent = combined;
    
    // Legger <p> elementet til i body av dokumentet
    // document.body.appendChild(pElement);
    pElement.style.zIndex = '1000'; // High z-index to ensure it appears on top

pElement.style.display = "block"

    })
}
 


}

export {kontaktKnappfunction}