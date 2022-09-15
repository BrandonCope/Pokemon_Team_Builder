import { elementFactory } from "./helper_functions.js";
import { pokeDetail } from "./details.js";

const pokeId = Array(151);

export function createPokeList({parentElt}) {
  parentElt.innerHTML = ""
  const element = elementFactory({
    eltType: "div",
    classNames: ["row", "align-items-start", "text-center"],
    attrs: [{name: "id", value: "list_content"}]
  });
  const listCtr = elementFactory({
    eltType: "div",
    classNames: ["col", "row", "align-center", "rounded"],
    parentElt: element,
    attrs: [
      {
        name: "style",
        value:
          "height:95vh; width:49vw;margin:2px;overflow-y:scroll;background-color:blue;opacity:95%",
      },
    ],
  });

  // THIS IS A PLACEHOLDER FOR THE DETAILS EVENT LISTENER
  const detailCtr = elementFactory({
    eltType: "div",
    classNames: ["col"],
    parentElt: element,
    text: "This will be the details container",
    attrs: [
      {
        name: "style",
        value:
          "overflow-y:scroll;border:solid 2px; height:95vh; width:49vw;margin:2px;background-color:pink;opacity:95%",
      },
    ],
  });

  for (let index = 1; index <= pokeId.length; index++) {
    const card = {};
    card.prop = elementFactory({
      eltType: "img",
      parentElt: listCtr,
      classNames: ["rounded"],
      attrs: [
        {
          name: "style",
          value:
            "border:solid black 1px; height:150px;width:150px;background-color:lightblue;text-color:white;margin:1px",
        },
        {
          name: "src",
          value: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`,
        },
        {
          name: "id",
          value: index,
        }
      ],
      events: [{eventType: "click", event: pokeDetail}]
    });
    /* 
    fetch(`https://pokeapi.co/api/v2/pokemon/${index}`)
      .then((response) => response.json())
      .then((data) => {
        card.img = data.name;
      }); */
  }

  parentElt.appendChild(element);
}
