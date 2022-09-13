import { elementFactory } from "./helper_functions.js";

export function createTeam() {
    const contentDiv = document.createElement("div")
    contentDiv.setAttribute("id", "teamList_content")
    const teamDiv = createDiv({parentElt: contentDiv});
    const detailDiv = createDiv({parentElt: contentDiv});
    return contentDiv.outerHTML;
}

function createDiv({parentElt}) {
    const div = elementFactory({
        parentElt,
        eltType: "div",
        attrs: [{name: "style", value: "border: 3px solid white; padding: 100px"}]
    })
    return div;
}