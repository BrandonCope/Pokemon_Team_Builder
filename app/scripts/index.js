import { createPokeList } from "./allPokemonList.js";
import { createHome } from "./home.js";
import { createTeam } from "./team.js";

const mainBody = document.querySelector("#main_body");
const teamListNav = document.querySelector("#teamList");
const pokeListNav = document.querySelector("#pokeList");
const homeNav = document.querySelector("#home");

document.querySelector("#home").addEventListener("click", (e) => {
  e.preventDefault();
  mainBody.innerHTML = createHome();
  homeNav.classList.add("active");
  teamListNav.classList.remove("active");
  pokeListNav.classList.remove("active");
  localStorage.setItem("activePage", "home");
});

document.querySelector("#pokeList").addEventListener("click", (e) => {
  e.preventDefault();
  //createPokeList({ parentElt: mainBody });
  mainBody.innerHTML = createPokeList();
  pokeListNav.classList.add("active");
  teamListNav.classList.remove("active");
  homeNav.classList.remove("active");
  localStorage.setItem("activePage", "pokeList");
});

document.querySelector("#teamList").addEventListener("click", (e) => {
  e.preventDefault();
  mainBody.innerHTML = createTeam();
  teamListNav.classList.add("active");
  homeNav.classList.remove("active");
  pokeListNav.classList.remove("active");
  localStorage.setItem("activePage", "teamList");
});

window.onload = () => {
  const activePage = localStorage.getItem("activePage");

  switch (activePage) {
    case "home":
      mainBody.innerHTML = createHome();
      homeNav.classList.add("active");
      break;
    case "pokeList":
      mainBody.innerHTML = createPokeList();
      pokeListNav.classList.add("active");
      break;
    case "teamList":
      mainBody.innerHTML = createTeam();
      teamListNav.classList.add("active");
      break;
    default:
      mainBody.innerHTML = createHome();
      homeNav.classList.add("active");
      break;
  }
};
