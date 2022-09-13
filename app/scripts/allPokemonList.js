import { elementFactory } from "./helper_functions.js";

export function createPokeList() {
  const element = elementFactory({
    eltType: "div",
    classNames: ["container"],
    text: "test",
    attrs: [{ name: "style", value: "border:solid 5px; height:75vh" }],
  });
  const card = elementFactory({
    eltType: "div",
    parentElt: element,
    classNames: "card",
    text: "this is a card",
    attrs: [{ name: "style", value: "border:solid 3px; height:50%;width:33%" }],
  });

  return element.outerHTML;
}

function createCard() {
  const card = [];
  for (const card of card) {
  }
}
