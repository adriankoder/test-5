function kontaktKnappfunction (){
    const kontaktKnapp = document.getElementById("Kontakt");
const andini_med_kaninid = document.getElementById('andini_med_kaninid');
const Bor_du_i_Bergen = document.getElementById("Bor_du_i_Bergen?")
const footer = document.getElementById("føler_meg_privilegertP")
const TryllingID = document.getElementById("TryllingID")
const element2 = document.getElementById("iframe")
const telefon = document.getElementById("littImfo")
const iframe = document.getElementById ("iframe")
const ballonggjimgid = document.getElementById("ballonggjimgid")
const Ballonggjøgling = document.getElementById ("Ballonggjøglingp")
const SukkerspinnmaskinIDp = document.getElementById("SukkerspinnmaskinIDp")
const Sukkerspinnmaskin = document.getElementById("Sukkerspinnmaskin")
const Ballonggjøglingh2 = document.getElementById("Ballonggjøglingh2")
const pElement = document.getElementById("pElement")
if (kontaktKnapp){
    kontaktKnapp.addEventListener("click", function() {
    telefon .style.display = "block"
    TryllingID.style.display = "none";
    iframe.style.opacity = 1
    Bor_du_i_Bergen.style.display = "none"
    hvor_lenge_har_holt_poID.style.display = "none"
    Ballonggjøglingh2.style.display = "none"

    footer.style.display = "none"
    SukkerspinnmaskinIDp.style.display = "none"
    Sukkerspinnmaskin.style.display ="none"
    Ballonggjøgling.style.display = "none"
    // KontaktIfo2.style.display = "block"
    KontaktConteiner.style.display = "block"
    iframe.style.display = "block"
    andini_med_kaninid.style.display = "none"
   
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
// pElement.style.left = '50%'; // Centering horizontally
pElement.style.top = '60px';
pElement.style.display = "block"
    // Ensure this script runs after the HTML elements are parsed
// document.addEventListener('DOMContentLoaded', function() {
//     // Assuming pElement should reference an existing <p> element in the document
//     const pElement = document.querySelector('p'); // Adjust the selector as needed
    
//     function applyResponsiveFeatures() {
//         if (window.innerWidth <= 768) {
//             pElement.style.marginTop= "-347%"
//         } else {
//             pElement.style.marginTop= "-40%"
//         }
//     }

//     // Add event listener for window resize
//     window.addEventListener('resize', applyResponsiveFeatures);

//     // Apply initially to set the correct styles based on current window size
//     applyResponsiveFeatures();
// });

    // pElement.style.marginTop= "-347%"

// Initialiser TryllingID til å være skjult

    })
}
    
}


export {kontaktKnappfunction}