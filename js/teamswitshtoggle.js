function teamswitshFunction (moon,sun) {
    //get  a elemen from html
    const body = document.querySelector("#body")
    const teamSwitchToggle = document.querySelector("#teamSwitch")
    
        //set up a if/else statment to check wat 
        console.log(body)
    if (body.classList.contains(moon)){
        body.classList.remove(moon)
        body.classList.add(sun)
        console.log("lite")
        teamSwitchToggle.src = "./asset/sun.png"

    } else if (body.classList.contains(sun)){
        body.classList.remove(sun)
        body.classList.add(moon)
        teamSwitchToggle.src = "./asset/moon (1).png"
console.log("dark")
    }else{
          console.log("somting is wrong")
          
       
    }
}

export {teamswitshFunction}
