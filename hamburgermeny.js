function hamburgertoggle (active,hidden) {
    //get  a element from html
    const ul = document.querySelector("#button")
    console.log(ul)
        //set up a if/else statment to check wat 
    if (ul.classList.contains(active)){
        ul.classList.remove(active)
        ul.classList.add(hidden)
    } else if (ul.classList.contains(hidden)){
        ul.classList.remove(hidden)
        ul.classList.add(active)

    }else{
        console.log("somting is wrong")
    }
}

export {hamburgertoggle}
