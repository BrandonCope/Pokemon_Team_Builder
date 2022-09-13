import { elementFactory } from "./helper_functions.js";

export function createTeam({parentElem}) {
    const element = "<p>!!!!</p>";
    const teamsContainer = createDiv({parentElem});
    const detailsContainer = createDiv({parentElem});
    return element;
}

function createDiv({parentElem}) {
    elementFactory
    elementFactory({
        parentElem,
        elemType: "div",
        // attrs: [{name: "style", value: }]
    })
}

// function elementFactory({parentElem, elemType, classNames, text, attrs, events}) {
//     !elemType ? undefined : false;
//     const newElem = document.createElement(elemType);
//     text? newElem.innerText = text : false;
//     parentElem ? parentElem.appendChild(newElem) : false;
//     attrs ? attrs.forEach(attr => setAttribute(attr, newElt)) : false;

//     return newElem;
// }

// function setAttribute(attr, newElt){
//     const { name: attrName, value: attrVal } = attr;
//     newElt.setAttribute(attrName, attrVal);
// }