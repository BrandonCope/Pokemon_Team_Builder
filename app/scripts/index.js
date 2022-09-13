import { createPokeList } from "./allPokemonList.js";
import { createHome } from "./home.js";
import { createTeam } from "./team.js";

document.querySelector("#home").addEventListener("click", (e) => {
    e.preventDefault()
    document.querySelector("#main_body").innerHTML = createHome();
    document.querySelector("#home").classList.add("active")
    document.querySelector("#teamList").classList.remove("active")
    document.querySelector("#pokeList").classList.remove("active")
});

document.querySelector("#pokeList").addEventListener("click", (e) => {
    e.preventDefault()
    document.querySelector("#main_body").innerHTML = createPokeList();
    document.querySelector("#pokeList").classList.add("active")
    document.querySelector("#home").classList.remove("active")
    document.querySelector("#teamList").classList.remove("active")
})

document.querySelector("#teamList").addEventListener("click", (e) => {
    e.preventDefault()
    document.querySelector("#main_body").innerHTML = createTeam();
    document.querySelector("#teamList").classList.add("active")
    document.querySelector("#home").classList.remove("active")
    document.querySelector("#pokeList").classList.remove("active")

})