import { pokeDetail } from "./details.js";
import { elementFactory, handleRemove } from "./helper_functions.js";

export function createTeamPage({ parentElt }) {
  parentElt.innerHTML = "";
  const contentDiv = elementFactory({
    eltType: "div",
    classNames: ["row", "align-items-start", "text-center"],
    attrs: [{name: "id", value: "list_content"}]
  });
  createContent({ parentElt: contentDiv });


  parentElt.appendChild(contentDiv);
}

function createContent({ parentElt }) {
  const teamDiv = createDiv({
    parentElt,
    classNames: ["col", "row", "align-center", "rounded"],
    attrs: [
      {
        name: "style",
        value:
          "height:95vh; width:49vw;margin:2px;overflow-y:scroll;background-color:blue;opacity:95%",
      },
    ],
  });

  const detailDiv = createDiv({
    parentElt,
    classNames: ["col"],
    attrs: [
      {
        name: "style",
        value:
          "overflow-y:scroll;border:solid 2px; height:95vh; width:49vw;margin:2px;background-color:pink;opacity:95%",
      },
    ],
  });

  createButton({
    parentElt: teamDiv,
    text: "Create New Team",
    eventType: "click",
    event: handleTeam,
  });

  createTeamContainer({ parentElt: teamDiv });
}

function createDiv({ parentElt, attrs }) {
  const div = elementFactory({
    parentElt,
    eltType: "div",
    attrs,
  });
  return div;
}

function createButton({ parentElt, eventType, event, text }) {
  elementFactory({
    parentElt,
    eltType: "button",
    classNames: ["btn", "btn-block", "btn-danger"],
    text,
    events: [{ eventType, event }],
    attrs: [{ name: "style", value: "margin: 3px" }],
  });
}

function handleTeam(e) {
  e.preventDefault();
  const parentElt = e.target.parentElement;
  const nameInput = promptNewTeamName();
  if (nameInput) {
      createTeamDiv({parentElt, key: nameInput})
  }
}

function promptNewTeamName() {
    let teamNum = parseInt(localStorage.getItem("teamNum"), 10) + 1;
    const storage = localStorage;
    const keys = Object.keys(storage)

    let nameInput;
    if (teamNum) {
        nameInput = prompt("Enter Your New Team Name", `Team ${teamNum}`);
        if (nameInput != null && nameInput != "") {
            if (!keys.includes(nameInput)) {
                localStorage.setItem(`${nameInput}`, "")
                localStorage.setItem("teamNum", `${teamNum}`)
                return nameInput
            } else {
                alert("That Team Name Already Exists!!!")
            }
        } 
    } else {
        localStorage.setItem("teamNum", "1");
        teamNum = parseInt(localStorage.getItem("teamNum"))
        nameInput = prompt("Enter Your New Team Name", `Team 1`);
        if (nameInput != null && nameInput != "") {
            localStorage.setItem(`${nameInput}`, "")
            return nameInput
        } 
    }
}

function createTeamContainer({ parentElt }) {
  const storage = localStorage;
  for (const key in storage) {
    if (Object.hasOwnProperty.call(storage, key)) {
      const element = storage[key];
      const pokemon = element.split(",")
      if (key != "activePage" && key != "teamNum" && key != "length") {
       const teamDiv = createTeamDiv({parentElt, key})

       createPokeTeam({parentElt: teamDiv, pokemon})
    

         
        }
      }
  }
}

export function createPokeTeam({parentElt, pokemon}) {
 

  pokemon.forEach(async poke => {
    if(poke) {
      const pokeData = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`)
      .then((response) => (response.json())).then((data) => (data)) 

      const pokeDiv = elementFactory({
        eltType: "div",
        parentElt: parentElt,
        classNames: ["pokeDiv"]
      })

      const pokeImg = elementFactory({
        eltType: "img",
        parentElt: pokeDiv,
        classNames: ["rounded"],
        attrs: [
          {
            name: "style",
            value:
              "border:solid black 1px; height:150px;width:150px;background-color:lightblue;text-color:white;margin:1px",
          },
          {
            name: "src",
            value: `${pokeData.sprites.front_default}`,
          },
          {
            name: "id",
            value: `${pokeData.id}`,
          },
          {
            name: "name",
            value: `${pokeData.name}`
          }
        ],
        events: [{eventType: "click", event: pokeDetail}]
      });
      elementFactory({
        eltType: "button",
        parentElt: pokeDiv,
        text: "x",
        events: [{eventType: "click", event: handleRemovePokeIMG}],
        attrs: [{name: "style", value: "z-index:1"}]
      })
    }
  });
}

function createTeamDiv({parentElt, key}) {
  const teamDiv = elementFactory({
    parentElt,
    eltType: "div",
    classNames: ["rounded", "teams"],
    attrs: [
      {
        name: "style",
        value:
          "padding: 100px; margin: 10px; background-color: lightblue; border-radius:",
      },
    ],
  });
  elementFactory({
    parentElt: teamDiv,
    eltType: "p",
    text: `${key}`,
  })
     elementFactory({
        eltType: "button",
        parentElt: teamDiv,
        text: "x",
        events: [{eventType: "click", event: handleRemoveTeam}]
      })
      

  return teamDiv
}

function handleRemoveTeam(e) {
  const removeElement = e.target.parentElement
  const removeFromTeamStorage = removeElement.innerText.split("\n")
  console.log(removeFromTeamStorage)
  const teamName = removeFromTeamStorage[0]
  localStorage.removeItem(teamName)
  while (removeElement.firstChild) {
    removeElement.firstChild.remove();
  }
  removeElement.remove();
  let teamNum = localStorage.getItem("teamNum") - 1;
  localStorage.setItem("teamNum", teamNum)
}

function handleRemovePokeIMG(e) {
  const removeElement = e.target.parentElement
  const pokemon = e.target.parentElement.firstChild.name
  const removeFromTeamStorage = removeElement.parentElement.innerText.split("\n")
  const teamName = removeFromTeamStorage[0]
  const team = localStorage.getItem(teamName)
  const splitTeam =team.split(',')
  console.log("splitTeam: ", splitTeam)
  const pokeIndex = splitTeam.lastIndexOf(pokemon)
  console.log("pokeIndex: ", pokeIndex)
  splitTeam.splice(pokeIndex, 1)
  const filteredNewTeam = splitTeam.filter(poke => poke?poke:false)
  console.log("filteredNewTeam: ", filteredNewTeam)
  while (removeElement.firstChild) {
    removeElement.firstChild.remove();
  }
  removeElement.remove();
localStorage.setItem(teamName, `${filteredNewTeam},`)
}