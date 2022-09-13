import { createPokeList } from "./allPokemonList.js";
import { createHome } from "./home.js";
import { createTeam } from "./team.js";

const mainBody = document.querySelector("#main_body");
const teamListNav = document.querySelector("#teamList");
const pokeListNav = document.querySelector("#pokeList");
const homeNav = document.querySelector("#home");

document.querySelector("#home").addEventListener("click", (e) => {
    e.preventDefault()
    mainBody.innerHTML = createHome();
    homeNav.classList.add("active")
    teamListNav.classList.remove("active")
    pokeListNav.classList.remove("active")
});

document.querySelector("#pokeList").addEventListener("click", (e) => {
    e.preventDefault()
    mainBody.innerHTML = createPokeList();
    pokeListNav.classList.add("active")
    teamListNav.classList.remove("active")
    homeNav.classList.remove("active")
})

document.querySelector("#teamList").addEventListener("click", (e) => {
    e.preventDefault()
    mainBody.innerHTML = createTeam();
    teamListNav.classList.add("active")
    homeNav.classList.remove("active")
    pokeListNav.classList.remove("active")
})

window.onload = () => {
    mainBody.innerHTML = createHome()
    homeNav.classList.add("active")
}