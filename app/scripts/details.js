import { elementFactory } from "./helper_functions.js";


document.getElementById("input_id").addEventListener("click", () => {
  const apiUrl = "";

  debugger;
  fetch(apiUrl)
  .then(function (response) {
      return response.json();
  })
  .then(data => 
      getPokemon(data.pokemon));
  });
  


function getPokemon(){
  
    const element = elementFactory({
        eltType: "div",
        parentElt: card_container,
        classNames: ["details_card", "align-center", "rounded"],
       
      });
    
      const heading = elementFactory({
        eltType: "h1",
        text: "Pokemon Details",
        parentElt: details_card,
        classNames: ["card_Title"],
    
      })
     
      
      
      const img = elementFactory({
        parentElt: details_card,
        eltType: "img", 
        classNames: ["col-6"],
        attrs: [
          { name: "alt", value: `${data.name}` },
          {
            name: "src",
            value: "`${data.pokemon.sprites.other.dream_world.front_default}`",
          },
        ],
      })

      const newName = elementFactory({
        eltType: "h3",
        text: `${data.name}`,
        parentElt: details_card,
        classNames: ["Poke_Name"],
    })
    
      const section1 = elementFactory({
        eltType: "section",
        parentElt: "div",
        classNames: ["pokemon_details"],
      })

      const type = elementFactory({
        eltType: "p",
          text: "Type: `${data.type}`",
          parentElt: section1,
          classNames: ["Pok-type"],
      })


    const weight = elementFactory({
      eltType: "p",
        text: "Weight: `${data.weight}`",
        parentElt: section1,
        classNames: ["Poke_weight"],
    })

    const height = elementFactory({
      eltType: "p",
        text: "Height: `${data.height}`",
        parentElt: section1,
        classNames: ["Poke_height"],
    })

    const moves = elementFactory({
      eltType: "p",
      text: "Moves: `${data.moves}`",
      parentElt: section1,
      classNames: ["Poke_move"],

    })

}

    
    const Button = elementFactory({
        eltType: "button",
        text: "ADD TO TEAM ",
        classNames: ["btn", "btn-primary"],
        parentElt: cardBody,
        eventListener: {eventType: "click", func: func},
      });
      



