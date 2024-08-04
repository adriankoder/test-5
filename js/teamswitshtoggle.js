function teamswitshFunction(moon, sun, Light, dark) {
  //get  a elemen from html
  const body = document.querySelector("#body");
  const teamSwitchToggle = document.querySelector("#teamSwitch");

  //set up a if/else statment to check wat
  console.log(body);
  if (body.classList.contains(moon, Light)) {
    body.classList.remove(moon);
    body.classList.remove(Light);

    body.classList.add(sun);
    body.classList.add(dark);

    console.log("test 1");
    console.log("lite");
    teamSwitchToggle.src = "./asset/sun.png";
  } else if (body.classList.contains(sun, dark)) {
    body.classList.remove(sun);
    body.classList.remove(dark);

    body.classList.add(moon);
    body.classList.remove(Light);

    console.log("Light 2");

    teamSwitchToggle.src = "./asset/moon (1).png";
    console.log("dark");
  } else {
    console.log("somting is wrong");
  }
}

export { teamswitshFunction };
